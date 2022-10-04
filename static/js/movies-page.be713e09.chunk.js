"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[493],{812:function(e,t,n){n.d(t,{Z:function(){return x}});var r=n(87),a=n(739),c=n(7),o=n.n(c),s=n(135),u="MoviesList_list__Ea3rL",i="MoviesList_item__gLWPR",p="MoviesList_poster__dWXXT",f="MoviesList_link__vtKKb",v="MoviesList_voteAverage__YXovH",l="MoviesList_voteWrapper__4IuYk",h="MoviesList_faHeart__4C7h6",m="MoviesList_voteCount__fbDFX",_="MoviesList_title__eedQP",d=n(17),b=n(184);function g(e){var t=e.movies,n=(0,a.TH)();return(0,b.jsx)("ul",{className:u,children:t.map((function(e){var t=e.id,a=e.title,c=e.poster,o=e.voteAverage,u=e.voteCount;return(0,b.jsx)("li",{className:i,children:(0,b.jsxs)(r.rU,{to:"/movies/".concat(t),state:{from:n},className:f,children:[(0,b.jsx)("img",{className:p,src:c?"https://image.tmdb.org/t/p/w500/".concat(c):d,alt:a}),(0,b.jsx)("p",{className:v,children:o.toFixed(1)}),(0,b.jsxs)("p",{className:l,children:[(0,b.jsx)(s.$0H,{className:h}),(0,b.jsx)("span",{className:m,children:u})]}),(0,b.jsx)("p",{className:_,children:a||"Movie without a title"})]})},t)}))})}g.prototype={movies:o().arrayOf(o().shape({id:o().number,title:o().string,poster:o().string,voteAverage:o().number,voteCount:o().number})).isRequired};var x=g},89:function(e,t,n){n.r(t),n.d(t,{default:function(){return d}});var r=n(885),a=n(791),c=n(739);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var i=n(135),p="SearchBar_FormSearch__kj9mw",f="SearchBar_InputSearch__O4aeU",v="SearchBar_ButtonSubmit__rChOp",l=n(184);var h=function(){var e=(0,c.TH)(),t=(0,c.s0)();return(0,l.jsxs)("form",{className:p,onSubmit:function(n){n.preventDefault();var r=n.target.elements.query.value;t(u(u({},e),{},{search:"query=".concat(r)}))},children:[(0,l.jsx)("input",{className:f,type:"text",name:"query"}),(0,l.jsx)("button",{className:v,type:"submit",children:(0,l.jsx)(i.U41,{})})]})},m=n(812),_=n(433);var d=function(){var e,t=(0,c.TH)().search,n=null!==(e=new URLSearchParams(t).get("query"))&&void 0!==e?e:"",o=(0,a.useState)(null),s=(0,r.Z)(o,2),u=s[0],i=s[1];return(0,a.useEffect)((function(){""!==n&&(0,_.V0)(n).then((function(e){var t=e.results,n=[];t.map((function(e){var t={id:e.id,title:e.original_title,poster:e.poster_path,voteAverage:e.vote_average,voteCount:e.vote_count};return n.push(t)})),i(n)}))}),[n]),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(h,{}),u&&(0,l.jsx)(m.Z,{movies:u})]})}},433:function(e,t,n){function r(e,t,n,r,a,c,o){try{var s=e[c](o),u=s.value}catch(i){return void n(i)}s.done?t(u):Promise.resolve(u).then(r,a)}function a(e){return function(){var t=this,n=arguments;return new Promise((function(a,c){var o=e.apply(t,n);function s(e){r(o,a,c,s,u,"next",e)}function u(e){r(o,a,c,s,u,"throw",e)}s(void 0)}))}}n.d(t,{zv:function(){return i},TP:function(){return p},tx:function(){return f},V0:function(){return v},Hg:function(){return l}});var c=n(687),o=n.n(c),s="57c4f7b58ce81ca7bd804351e71dcbc7",u="https://api.themoviedb.org/3",i=function(){var e=a(o().mark((function e(t){var n,r,a;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="/movie/".concat(t,"/credits?api_key=").concat(s,"&language=en-US"),e.next=3,fetch("".concat(u).concat(n));case 3:return r=e.sent,e.next=6,r.json();case 6:return a=e.sent,e.abrupt("return",a);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=a(o().mark((function e(t){var n,r,a;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="/movie/".concat(t,"?api_key=").concat(s,"&language=en-US"),e.next=3,fetch("".concat(u).concat(n));case 3:return r=e.sent,e.next=6,r.json();case 6:return a=e.sent,e.abrupt("return",a);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=a(o().mark((function e(t){var n,r,a;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="/movie/".concat(t,"/reviews?api_key=").concat(s,"&language=en-US&page=1"),e.next=3,fetch("".concat(u).concat(n));case 3:return r=e.sent,e.next=6,r.json();case 6:return a=e.sent,e.abrupt("return",a);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),v=function(){var e=a(o().mark((function e(t){var n,r,a,c,i=arguments;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=i.length>1&&void 0!==i[1]?i[1]:1,r="/search/movie?api_key=".concat(s,"&query=").concat(t,"&language=en-US&page=").concat(n,"&include_adult=false"),e.next=4,fetch("".concat(u).concat(r));case 4:return a=e.sent,e.next=7,a.json();case 7:return c=e.sent,e.abrupt("return",c);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=a(o().mark((function e(){var t,n,r;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="/trending/all/day?api_key=".concat(s),e.next=3,fetch("".concat(u).concat(t));case 3:return n=e.sent,e.next=6,n.json();case 6:return r=e.sent,e.abrupt("return",r);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},17:function(e,t,n){e.exports=n.p+"static/media/poster.04c882399a3e1cbf8b12.jpg"}}]);
//# sourceMappingURL=movies-page.be713e09.chunk.js.map