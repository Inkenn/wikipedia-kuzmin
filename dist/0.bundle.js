(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(3),o=n.n(c),s=(n(13),n(1)),i=n.n(s),l=n(4),m=n(5),u=n(6),d=n(8),h=n(7),p=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(m.a)(this,n),(a=t.call(this,e)).state={rp:5,pt:[],renderdone:!1},a}return Object(u.a)(n,[{key:"createRandomPages",value:function(){var e=Object(l.a)(i.a.mark((function e(){var t,n,a,r,c,o;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="https://en.wikipedia.org/w/api.php?origin=*&action=query&format=json&list=random&rnlimit="+this.state.rp,e.next=3,fetch(t);case 3:return n=e.sent,e.next=6,n.json();case 6:for(a=e.sent,r=a.query.random,c=[],o=0;o<r.length;o++)c[o]=r[o].title;this.setState({pt:c,renderdone:!0});case 11:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"handleRefresh",value:function(){this.setState({pt:[],renderdone:!1,rp:5})}},{key:"render",value:function(){var e=this;this.state.renderdone||this.createRandomPages();var t=this.state.pt.map((function(e,t){var n="https://wikipedia.org/wiki/"+e;return r.a.createElement("div",{className:"row",key:t},r.a.createElement("div",{className:"col-md-12"},r.a.createElement("h3",null,e),r.a.createElement("p",null,r.a.createElement("a",{className:"btn",href:n},"\u041d\u0430 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443 \xbb"))))}));return r.a.createElement("div",{className:"container-fluid"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-12"},r.a.createElement("h2",{className:"text-center"},"\u0413\u0435\u043d\u0435\u0440\u0438\u0440\u0443\u0435\u043c \u0441\u043b\u0443\u0447\u0430\u0439\u043d\u044b\u0435 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u044b!"),t,r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-12"},r.a.createElement("button",{type:"button",className:"btn btn-secondary",onClick:function(){return e.handleRefresh()}},"\u0421\u0433\u0435\u043d\u0435\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0435\u0449\u0451!"))))))}}]),n}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(p,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[15,1,2]]]);
//# sourceMappingURL=0.bundle.js.map