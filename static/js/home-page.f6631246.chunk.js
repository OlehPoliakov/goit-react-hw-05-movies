"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[223],{9020:function(e,t,r){r.r(t),r.d(t,{default:function(){return k}});var n=r(7689),a="Container_container__MM274",s=r(184),i=function(e){var t=e.children;return(0,s.jsx)("div",{className:a,children:t})};i.defaultProps={children:[]};var c=i,o=r(6731),u=r(9135),l="Navigation_Nav__Ri1sC",v="Navigation_LogoWrapper__l+F7b",p="Navigation_CustomIcon__CCyVb",h="Navigation_Title__064V3",d="Navigation_NavigationList__fH50b",f="Navigation_Item__JdtQk",_="Navigation_CustomLink__6OtD7",m=function(){return(0,s.jsxs)("nav",{className:l,children:[(0,s.jsxs)("div",{className:v,children:[(0,s.jsx)(u.rHK,{className:p}),(0,s.jsx)("h1",{className:h,children:"Kinopoisk"})]}),(0,s.jsxs)("ul",{className:d,children:[(0,s.jsx)("li",{className:f,children:(0,s.jsx)(o.OL,{className:_,end:!0,to:"/",children:"Home"})}),(0,s.jsx)("li",{className:f,children:(0,s.jsx)(o.OL,{className:_,to:"/movies",children:"Movies"})})]})]})},x="AppBar_header__odvjn",g=function(){return(0,s.jsx)("header",{className:x,children:(0,s.jsx)(m,{})})},w="AppFooter_footer__7LjDl",j="AppFooter_text__UcIie",N=function(){return(0,s.jsx)("footer",{className:w,children:(0,s.jsxs)("p",{className:j,children:["\xa9 ",(new Date).getFullYear()," Kinopoisk"]})})},k=function(){return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(g,{}),(0,s.jsx)(c,{children:(0,s.jsx)(n.j3,{})}),(0,s.jsx)(N,{})]})}},2132:function(e,t,r){r.d(t,{Z:function(){return i}});var n="Message_message__UdveK",a=r(184),s=function(e){var t=e.children;return(0,a.jsx)("div",{className:n,children:t})};s.defaultProps={children:[]};var i=s},8898:function(e,t,r){r.d(t,{Z:function(){return k}});var n=r(6731),a=r(7689),s=r(2007),i=r.n(s),c=r(9135),o="MoviePreview_card__+AsSG",u="MoviePreview_poster__ioYtN",l="MoviePreview_voteAverage__g0SxC",v="MoviePreview_voteWrapper__0QHyq",p="MoviePreview_faHeart__il21d",h="MoviePreview_voteCount__diOlf",d="MoviePreview_title__UV6ts",f=r(1017),_=r(184),m=function(e){var t=e.title,r=e.poster,n=e.voteCount,a=e.voteAverage,s=r?"https://image.tmdb.org/t/p/w500".concat(r):f;return(0,_.jsxs)("div",{className:o,children:[(0,_.jsx)("img",{className:u,src:s,alt:t,title:t}),(0,_.jsx)("p",{className:l,children:a}),(0,_.jsxs)("p",{className:v,children:[(0,_.jsx)(c.$0H,{className:p}),(0,_.jsx)("span",{className:h,children:n})]}),(0,_.jsx)("p",{className:d,children:t||"Movie without a title"})]})};m.defaultProps={poster:"",vote:null};var x=m,g="MoviesList_list__Ea3rL",w="MoviesList_item__gLWPR",j="MoviesList_link__vtKKb";function N(e){var t=e.movies,r=(0,a.TH)();return(0,_.jsx)("ul",{className:g,children:t.map((function(e,t){var a=e.id,s=e.original_title,i=e.poster_path,c=e.vote_average,o=e.vote_count;return(0,_.jsx)("li",{className:w,children:(0,_.jsx)(n.rU,{to:"/movies/".concat(a),state:{from:r},className:j,children:(0,_.jsx)(x,{title:s,poster:i,voteAverage:c,voteCount:o})})},t)}))})}N.prototype={movies:i().arrayOf(i().shape({id:i().number.isRequired,title:i().string.isRequired,poster:i().string})).isRequired};var k=N},1206:function(e,t,r){r.r(t);var n=r(5861),a=r(885),s=r(4687),i=r.n(s),c=r(2791),o=r(8898),u=r(2132),l=r(7808),v=r(4390),p=r(184);t.default=function(){var e=(0,c.useState)([]),t=(0,a.Z)(e,2),r=t[0],s=t[1],h=(0,c.useState)(!1),d=(0,a.Z)(h,2),f=d[0],_=d[1],m=(0,c.useState)(""),x=(0,a.Z)(m,2),g=(x[0],x[1]);(0,c.useEffect)((function(){w()}),[]);var w=function(){var e=(0,n.Z)(i().mark((function e(){var t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return _(!0),e.prev=1,e.next=4,v.ZP.fetchTrends();case 4:t=e.sent,s(t),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(1),console.error("Smth wrong with homepage trends fetch",e.t0),g(e.t0.message);case 12:return e.prev=12,_(!1),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[1,8,12,15]])})));return function(){return e.apply(this,arguments)}}();return(0,p.jsxs)("main",{children:[(0,p.jsx)("h1",{style:{textAlign:"center",color:"wheat",fontSize:"36px",textShadow:"1px 0 1px black"},children:"Trends of the day"}),r?(0,p.jsx)(o.Z,{movies:r}):(0,p.jsx)(u.Z,{children:(0,p.jsx)("h2",{children:"The service is temporarily unavailable. Please try again later."})}),f&&(0,p.jsx)(l.Z,{})]})}},4390:function(e,t,r){var n=r(5861),a=r(4687),s=r.n(a),i=r(4569),c=r.n(i);c().defaults.baseURL="https://api.themoviedb.org/3/";var o="57c4f7b58ce81ca7bd804351e71dcbc7",u=function(){var e=(0,n.Z)(s().mark((function e(){var t,r,n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c().get("trending/movie/day?api_key=".concat(o));case 3:return t=e.sent,r=t.data,n=r.results,e.abrupt("return",n);case 9:e.prev=9,e.t0=e.catch(0),console.error("Smth wrong with fetch trends in api",e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}(),l=function(){var e=(0,n.Z)(s().mark((function e(t,r){var n,a,i;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c().get("search/movie?api_key=".concat(o,"&query=").concat(t,"&page=").concat(r,"&language=en-US"));case 3:return n=e.sent,a=n.data,i=a.results,e.abrupt("return",i);case 9:e.prev=9,e.t0=e.catch(0),console.error("Smth wrong with fetch movie search in api",e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t,r){return e.apply(this,arguments)}}(),v=function(){var e=(0,n.Z)(s().mark((function e(t){var r,n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c().get("/movie/".concat(t,"?api_key=").concat(o,"&language=en-US"));case 3:return r=e.sent,n=r.data,e.abrupt("return",n);case 8:e.prev=8,e.t0=e.catch(0),console.error("Smth wrong with fetch movie id in api",e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,n.Z)(s().mark((function e(t){var r,n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c().get("/movie/".concat(t,"/credits?api_key=").concat(o,"&language=en-US"));case 3:return r=e.sent,n=r.data,e.abrupt("return",n);case 8:e.prev=8,e.t0=e.catch(0),console.error("Smth wrong with fetch cast in api",e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}(),h=function(){var e=(0,n.Z)(s().mark((function e(t){var r,n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c().get("/movie/".concat(t,"/reviews?api_key=").concat(o,"&language=en-US&page=1"));case 3:return r=e.sent,n=r.data,e.abrupt("return",n);case 8:e.prev=8,e.t0=e.catch(0),console.error("Smth wrong with fetch reviews in api",e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}();t.ZP={fetchTrends:u,fetchMoviesBySearch:l,fetchMovieById:v,fetchCast:p,fetchReviews:h}},1017:function(e,t,r){e.exports=r.p+"static/media/poster.04c882399a3e1cbf8b12.jpg"}}]);
//# sourceMappingURL=home-page.f6631246.chunk.js.map