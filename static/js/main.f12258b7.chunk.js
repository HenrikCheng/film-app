(this["webpackJsonpmovie-app"]=this["webpackJsonpmovie-app"]||[]).push([[0],{14:function(e,t,n){},17:function(e,t,n){},19:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),r=n(7),s=n.n(r),i=(n(14),n(9)),o=n(6),l=n.n(o),u=n(8),j=n(4),d=(n(16),n(17),n(0)),m=function(e){var t=e.favouriteComponent;return Object(d.jsx)(d.Fragment,{children:e.movies.map((function(n,c){return Object(d.jsxs)("div",{className:"image-container d-flex justify-content-start m-3",children:[Object(d.jsx)("img",{src:n.Poster,alt:"movie"}),e.movies.Country,Object(d.jsx)("div",{onClick:function(){return e.handleFavouritesClick(n)},className:"overlay d-flex align-items-center justify-content-center",children:Object(d.jsx)(t,{})}),Object(d.jsxs)("div",{className:"description d-flex align-items-center justify-content-center",children:["\ud83d\udd0e ",n.Title]})]})}))})},v=function(e){return Object(d.jsx)("div",{className:"col",children:Object(d.jsx)("h1",{children:e.heading})})},h=function(e){return Object(d.jsx)("div",{className:"col col-sm-4",children:Object(d.jsx)("input",{className:"form-control",value:e.value,onChange:function(t){return e.setSearchValue(t.target.value)},placeholder:"Type to search..."})})},f=function(){return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("span",{className:"mr-2",children:"Add to Favourites"}),Object(d.jsx)("svg",{width:"1em",height:"1em",viewBox:"0 0 16 16",class:"bi bi-heart-fill",fill:"red",xmlns:"http://www.w3.org/2000/svg",children:Object(d.jsx)("path",{"fill-rule":"evenodd",d:"M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"})})]})},b=function(){return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("span",{className:"mr-2",children:"Remove from favourites"}),Object(d.jsxs)("svg",{width:"1em",height:"1em",viewBox:"0 0 16 16",class:"bi bi-x-square",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:[Object(d.jsx)("path",{"fill-rule":"evenodd",d:"M14 1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"}),Object(d.jsx)("path",{"fill-rule":"evenodd",d:"M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"})]})]})},x=function(){var e=Object(c.useState)([]),t=Object(j.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)(""),s=Object(j.a)(r,2),o=s[0],x=s[1],O=Object(c.useState)([]),p=Object(j.a)(O,2),g=p[0],w=p[1],N=function(){var e=Object(u.a)(l.a.mark((function e(t){var n,c,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="http://www.omdbapi.com/?s=".concat(t,"&apikey=d62eb7e1"),e.next=3,fetch(n);case 3:return c=e.sent,e.next=6,c.json();case 6:(r=e.sent).Search&&a(r.Search);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();Object(c.useEffect)((function(){N(o)}),[o]),Object(c.useEffect)((function(){var e=JSON.parse(localStorage.getItem("react-movie-app-favourites"));w(e)}),[]);var C=function(e){localStorage.setItem("react-movie-app-favourites",JSON.stringify(e))};return Object(d.jsxs)("div",{className:"container-fluid movie-app",children:[Object(d.jsxs)("div",{className:"row",children:[Object(d.jsx)(v,{heading:"Movies"}),Object(d.jsx)(h,{searchValue:o,setSearchValue:x})]}),Object(d.jsx)("div",{className:"row",children:Object(d.jsx)(m,{movies:n,favouriteComponent:f,handleFavouritesClick:function(e){var t=[].concat(Object(i.a)(g),[e]);w(t),C(t)}})}),Object(d.jsx)("div",{className:"row d-flex align-items-center mt-4 mb-4",children:Object(d.jsx)(v,{heading:"Favourites"})}),Object(d.jsx)("div",{className:"row",children:Object(d.jsx)(m,{movies:g,handleFavouritesClick:function(e){var t=g.filter((function(t){return t.imdbID!==e.imdbID}));w(t),C(t)},favouriteComponent:b})})]})},O=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,20)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),c(e),a(e),r(e),s(e)}))};s.a.render(Object(d.jsx)(a.a.StrictMode,{children:Object(d.jsx)(x,{})}),document.getElementById("root")),O()}},[[19,1,2]]]);
//# sourceMappingURL=main.f12258b7.chunk.js.map