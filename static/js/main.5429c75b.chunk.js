(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{11:function(e,n,t){e.exports=t(23)},20:function(e,n,t){},21:function(e,n,t){},23:function(e,n,t){"use strict";t.r(n);var o=t(0),a=t.n(o),r=t(5),i=t.n(r),c=(t(20),t(6)),s=t(7),l=t(9),u=t(8),h=t(10),d=function(e){var n=e.name,t=e.email,o=e.id;return a.a.createElement("div",{className:"tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5"},a.a.createElement("img",{alt:"robots",src:"https://robohash.org/".concat(o,"?200x200")}),a.a.createElement("div",null,a.a.createElement("h2",null,n),a.a.createElement("p",null,t)))},f=function(e){var n=e.robots;return a.a.createElement("div",null,n.map((function(e,t){return a.a.createElement(d,{key:t,id:n[t].id,name:n[t].name,email:n[t].email})})))},m=function(e){e.searchfield;var n=e.searchChange;return a.a.createElement("div",{className:"pa2"},a.a.createElement("input",{className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"Search robots",onChange:n}))},g=function(e){return a.a.createElement("div",{style:{overflowY:"scroll",border:"3px solid black",height:"800px"}},e.children)},v=(t(21),function(e){function n(){var e;return Object(c.a)(this,n),(e=Object(l.a)(this,Object(u.a)(n).call(this))).onSearchChange=function(n){e.setState({searchfield:n.target.value})},e.state={robots:[],searchfield:""},e}return Object(h.a)(n,e),Object(s.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(n){return e.setState({robots:n})}))}},{key:"render",value:function(){var e=this.state,n=e.robots,t=e.searchfield,o=n.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())}));return n.length?a.a.createElement("div",{className:"tc"},a.a.createElement("h1",{className:"f1"},"RoboFriends"),a.a.createElement(m,{searchChange:this.onSearchChange}),a.a.createElement(g,null,a.a.createElement(f,{robots:o}))):a.a.createElement("h1",null,"Loading")}}]),n}(o.Component)),b=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function p(e){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}t(22);i.a.render(a.a.createElement(v,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/khanzohan/RoboFriendss",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("/khanzohan/RoboFriendss","/service-worker.js");b?(!function(e){fetch(e).then((function(n){404===n.status||-1===n.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):p(e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")}))):p(e)}))}}()}},[[11,1,2]]]);
//# sourceMappingURL=main.5429c75b.chunk.js.map