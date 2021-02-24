import React, {useState, useEffect} from "react"
import './App.css';



const SUBREDDITS = [
  {
    name: "unpopularopinion",
    tagline: "Is this opinion unpopular?"
  },
  {
    name: "changemyview",
    tagline: "Is this opinion unpopular?"
  }
]


const getRandomPostUrl = (subreddit) => `https://www.reddit.com/r/${subreddit}/random.json`

function App() {


  const [question, setQuestion] = useState("Loading")
  const [description, setDescription] = useState("")
  const [tagline, setTagline] = useState("Loading...")
  const [subreddit, setSubreddit] = useState(null)


  useEffect(() => {
    loadNewQuestion();
  }, [])


  const loadNewQuestion = async () => {
    // get random subreddit
    const random = Math.floor(Math.random() * Math.floor(SUBREDDITS.length));
    const randomSubreddit = SUBREDDITS[random];

    
    // get random post 

    const url = getRandomPostUrl(randomSubreddit.name)
    console.log(url)
    const json = await fetch(url).then(res => res.json())
    console.log(json)

    
    const {title,selftext} = json[0].data.children[0].data

    setQuestion(title)
    setDescription(selftext)
    

    setTagline(randomSubreddit.tagline)
    setSubreddit(randomSubreddit.name)

  }






  const onAgree = () => {
    loadNewQuestion()
  }

  const onDisagree = () => {
    loadNewQuestion()
  }


  return (
    <div className="App">
      
    <div className="title">
      {question}

      <div class="subtitle">
        /r/{subreddit}
      </div>
    </div>

    <div className="description">
      {description}
    </div>


      <div className="tagline">
        {tagline}
      </div>

      <div className="buttons">
      <button onClick={onDisagree} className="button--disagree">Disagree</button>
        <button onClick={onAgree} className="button--agree">Agree</button>
      
      </div>
    </div>
  );
}

export default App;
