(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{11:function(t,e,n){},13:function(t,e,n){},15:function(t,e,n){"use strict";n.r(e);var c=n(1),a=n.n(c),s=n(5),i=n.n(s),o=(n(11),n(4)),r=n.n(o),u=n(6),l=n(2),d=(n(13),n(0)),j=[{name:"unpopularopinion",tagline:"Is this opinion unpopular?"},{name:"changemyview",tagline:"Is this opinion unpopular?"}],b=function(t){return"https://www.reddit.com/r/".concat(t,"/random.json")};var h=function(){var t=Object(c.useState)("Loading"),e=Object(l.a)(t,2),n=e[0],a=e[1],s=Object(c.useState)(""),i=Object(l.a)(s,2),o=i[0],h=i[1],f=Object(c.useState)("Loading..."),p=Object(l.a)(f,2),g=p[0],O=p[1],m=Object(c.useState)(null),v=Object(l.a)(m,2),x=v[0],w=v[1];Object(c.useEffect)((function(){N()}),[]);var N=function(){var t=Object(u.a)(r.a.mark((function t(){var e,n,c,s,i,o,u;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=Math.floor(Math.random()*Math.floor(j.length)),c=b((n=j[e]).name),console.log(c),t.next=6,fetch(c).then((function(t){return t.json()}));case 6:s=t.sent,console.log(s),i=s[0].data.children[0].data,o=i.title,u=i.selftext,a(o),h(u),O(n.tagline),w(n.name);case 13:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsxs)("div",{className:"title",children:[n,Object(d.jsxs)("div",{class:"subtitle",children:["/r/",x]})]}),Object(d.jsx)("div",{className:"description",children:o}),Object(d.jsx)("div",{className:"tagline",children:g}),Object(d.jsxs)("div",{className:"buttons",children:[Object(d.jsx)("button",{onClick:function(){N()},className:"button--disagree",children:"Disagree"}),Object(d.jsx)("button",{onClick:function(){N()},className:"button--agree",children:"Agree"})]})]})},f=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,16)).then((function(e){var n=e.getCLS,c=e.getFID,a=e.getFCP,s=e.getLCP,i=e.getTTFB;n(t),c(t),a(t),s(t),i(t)}))};i.a.render(Object(d.jsx)(a.a.StrictMode,{children:Object(d.jsx)(h,{})}),document.getElementById("root")),f()}},[[15,1,2]]]);
//# sourceMappingURL=main.46977244.chunk.js.map