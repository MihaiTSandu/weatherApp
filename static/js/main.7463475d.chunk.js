(this["webpackJsonpweather-app"]=this["webpackJsonpweather-app"]||[]).push([[0],{69:function(e,t,n){"use strict";n.r(t);var r=n(76),a=n(77),c=n(79),i=n(2),o=n(46),s=n.n(o),l=n(23),d=n(14),u=n(6),m=n(47),f=n(30),h=n(3),p="autocomplete-input";function b(e){var t=e.onSubmit,n=Object(i.useRef)(),r=Object(i.useState)([]),a=Object(d.a)(r,2),c=a[0],o=a[1],s=Object(i.useState)(-1),l=Object(d.a)(s,2),u=l[0],b=l[1],_=Object(i.useState)(""),k=Object(d.a)(_,2),C=k[0],S=k[1],I=function(e){var r,a;null===t||void 0===t||t(-1===u?{name:e.target.value}:c[u]),S(null===(r=c[u])||void 0===r?void 0:r.name),n.current.value=(null===(a=c[u])||void 0===a?void 0:a.name)||"",o([]),e.target.blur()};return Object(h.jsxs)(v,{children:[Object(h.jsxs)(w,{htmlFor:p,children:[Object(h.jsx)(x,{ref:n,id:p,type:"text",placeholder:"Enter a city",onInput:function(e){var t=e.target,n=t.value.trim().toLowerCase().replaceAll(/\s/g,""),r=m.filter((function(e){return e.name.trim().toLowerCase().replaceAll(/\s/g,"").startsWith(n)}));o(0===n.length?[]:r.slice(0,5)),S(t.value)},onKeyDown:function(e){switch(e.key){case f.Key.ArrowDown:e.preventDefault(),b(u===c.length-1?0:u+1);break;case f.Key.ArrowUp:e.preventDefault(),b(0===u?c.length-1:u-1);break;case f.Key.Enter:I(e)}},autoComplete:"off"}),0!==c.length&&Object(h.jsx)(g,{children:c.map((function(e,t){return Object(h.jsxs)(j,{highlighted:t===u,children:[Object(h.jsx)("b",{children:e.name.slice(0,C.length)}),"".concat(e.name.slice(C.length),", ").concat(e.country)]},"".concat(e.name).concat(e.lat).concat(e.lng))}))})]}),Object(h.jsx)(y,{children:Object(h.jsx)(O,{type:"button",onClick:I,children:"GET WEATHER"})})]})}var g=u.c.div.withConfig({displayName:"SearchBar__Dropdown",componentId:"sc-1n8rdce-0"})(["background:#fff;border:0.0625rem solid #bdbdbd;border-bottom-left-radius:0.1875rem;border-bottom-right-radius:0.1875rem;box-sizing:border-box;margin:0 2.5rem;position:absolute;top:5.1875rem;white-space:nowrap;width:calc(100% - 5rem);"]),j=u.c.div.withConfig({displayName:"SearchBar__DropdownSearchResult",componentId:"sc-1n8rdce-1"})(["background:",";font-family:'Raleway',sans-serif;overflow:hidden;padding:0.625rem 1.25rem;text-overflow:ellipsis;"],(function(e){return e.highlighted?"#eceff1":"transparent"})),w=u.c.label.withConfig({displayName:"SearchBar__SearchContainer",componentId:"sc-1n8rdce-2"})(["display:flex;position:relative;"]),v=u.c.div.withConfig({displayName:"SearchBar__SearchBarContainer",componentId:"sc-1n8rdce-3"})(["display:flex;flex-direction:column;justify-content:center;padding:1.25rem;width:100%;"]),O=u.c.button.withConfig({displayName:"SearchBar__SearchButton",componentId:"sc-1n8rdce-4"})(["background:#fff;border:0;border-radius:0.1875rem;color:#007c91;cursor:pointer;font-family:'Raleway',sans-serif;font-size:1.25rem;font-weight:bold;padding:1.25rem 2.5rem;:hover{background:#f5f5f5;}:active{background:#eee;}"]),x=u.c.input.withConfig({displayName:"SearchBar__StyledInput",componentId:"sc-1n8rdce-5"})(["background:transparent;border:0.1875rem solid #fff;border-radius:0.1875rem;color:#fff;font-family:'Raleway',sans-serif;font-size:2rem;font-weight:300;margin:0 2.5rem 2.5rem;outline:0;padding:1.25rem 0;text-align:center;width:100%;:focus{background:#006978;}::placeholder{color:#fff;}"]),y=u.c.div.withConfig({displayName:"SearchBar__ButtonContainer",componentId:"sc-1n8rdce-6"})(["text-align:center;"]),_=n(16),k=n.n(_),C=n(21),S=n(49),I=n.n(S),A=n(36),R=n.n(A),N=function(){var e=Object(C.a)(k.a.mark((function e(t,n){var r,a,c,i,o,s,l;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(o={coords:{latitude:t,longitude:n}},null!=t&&null!=n){e.next=5;break}return e.next=4,E();case 4:o=e.sent;case 5:return s={lat:null===(r=o)||void 0===r||null===(a=r.coords)||void 0===a?void 0:a.latitude,lon:null===(c=o)||void 0===c||null===(i=c.coords)||void 0===i?void 0:i.longitude,appid:"",units:"metric"},console.log(Object({NODE_ENV:"production",PUBLIC_URL:"/weatherApp",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_OPEN_WEATHER_API_KEY:""})),e.prev=7,e.next=10,fetch("".concat("https://api.openweathermap.org/data/2.5/weather","?").concat(new URLSearchParams(s)));case 10:return e.next=12,e.sent.json();case 12:return l=e.sent,e.abrupt("return",new Promise((function(e){return e(l)})));case 16:return e.prev=16,e.t0=e.catch(7),e.abrupt("return",new Promise((function(e){return e(null)})));case 19:case"end":return e.stop()}}),e,null,[[7,16]])})));return function(t,n){return e.apply(this,arguments)}}(),E=function(){var e=Object(C.a)(k.a.mark((function e(){return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e){navigator.geolocation.getCurrentPosition((function(t){return e(t)}),(function(){return e(null)}))})));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),P=N,D={icon:"PARTLY_CLOUDY_DAY",color:"#007c91",size:192,animate:!0};function T(e){var t=e.latitude,n=e.longitude,r=Object(i.useState)(),a=Object(d.a)(r,2),c=a[0],o=a[1],s=Object(i.useState)(),l=Object(d.a)(s,2),u=l[0],m=l[1],f=Object(i.useCallback)(Object(C.a)(k.a.mark((function e(){var r;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,P(t,n);case 2:if(r=e.sent){e.next=6;break}e.next=45;break;case 6:e.t0=r.weather[0].icon,e.next="01d"===e.t0?9:"01n"===e.t0?11:"02d"===e.t0?13:"02n"===e.t0?15:"03d"===e.t0?17:"03n"===e.t0?19:"04d"===e.t0?21:"04n"===e.t0?23:"09d"===e.t0?25:"09n"===e.t0?27:"10d"===e.t0?29:"10n"===e.t0?31:"13d"===e.t0?33:"13n"===e.t0?35:"50d"===e.t0?37:"50n"===e.t0?39:41;break;case 9:return D.icon="CLEAR_DAY",e.abrupt("break",43);case 11:return D.icon="CLEAR_NIGHT",e.abrupt("break",43);case 13:return D.icon="PARTLY_CLOUDY_DAY",e.abrupt("break",43);case 15:return D.icon="PARTLY_CLOUDY_NIGHT",e.abrupt("break",43);case 17:case 19:case 21:case 23:return D.icon="CLOUDY",e.abrupt("break",43);case 25:case 27:case 29:case 31:return D.icon="RAIN",e.abrupt("break",43);case 33:case 35:return D.icon="SNOW",e.abrupt("break",43);case 37:case 39:return D.icon="FOG",e.abrupt("break",43);case 41:return D.icon="WIND",e.abrupt("break",43);case 43:o(r.main.temp),m(r.name);case 45:case"end":return e.stop()}}),e)}))),[t,n]);return Object(i.useEffect)((function(){f()}),[f]),Object(h.jsxs)(L,{children:[Object(h.jsx)(W,{children:u||Object(h.jsx)(R.a,{width:300})}),Object(h.jsx)(I.a,{icon:D.icon,color:D.color,size:D.size,animate:D.animate}),Object(h.jsx)("div",{children:Object(h.jsx)(z,{children:c?"".concat(c.toFixed(),"\xb0C"):Object(h.jsx)(R.a,{width:50})})})]})}var H,L=u.c.div.withConfig({displayName:"WeatherInfo__WeatherInfoContainer",componentId:"sc-mcgfpz-0"})(["margin:1.25rem;text-align:center;"]),W=u.c.h1.withConfig({displayName:"WeatherInfo__LocationHeader",componentId:"sc-mcgfpz-1"})(["color:#007c91;font-family:'Raleway',sans-serif;font-size:4rem;font-weight:500;"]),z=u.c.h1.withConfig({displayName:"WeatherInfo__TemperatureHeader",componentId:"sc-mcgfpz-2"})(["color:#007c91;font-family:'Raleway',sans-serif;font-size:4rem;font-weight:500;"]),B={small:600,medium:1024,large:1440,xlarge:1920},Y=Object.keys(B).reduce((function(e,t){return e[t]=function(e){for(var n=arguments.length,r=new Array(n>1?n-1:0),a=1;a<n;a++)r[a-1]=arguments[a];return Object(u.b)(["@media (min-width:","px){","}"],B[t],u.b.apply(void 0,[e].concat(r)))},e}),{});function K(){var e=Object(i.useState)(),t=Object(d.a)(e,2),n=t[0],r=t[1];return Object(h.jsxs)(J,{children:[Object(h.jsxs)(G,{children:[Object(h.jsx)(q,{children:"Weather App"}),Object(h.jsx)(b,{onSubmit:function(e){r(e)}})]}),Object(h.jsx)(F,{children:Object(h.jsx)(T,{latitude:null===n||void 0===n?void 0:n.lat,longitude:null===n||void 0===n?void 0:n.lng})})]})}var U,F=u.c.div.withConfig({displayName:"HomePage__ResultContainer",componentId:"sc-1ksmkmv-0"})(["align-content:center;align-items:center;display:flex;flex:1;flex-direction:column;height:inherit;justify-content:center;"]),G=Object(u.c)(F).withConfig({displayName:"HomePage__SearchContainer",componentId:"sc-1ksmkmv-1"})(["background-color:#007c91;border-radius:0.1875rem;height:calc(100vh - 2.5rem);margin:1.25rem;"]),J=u.c.div.withConfig({displayName:"HomePage__HomePageContainer",componentId:"sc-1ksmkmv-2"})(["display:flex;flex-direction:column;height:100vh;",""],Y.medium(H||(H=Object(l.a)(["\n    flex-direction: row;\n  "])))),q=u.c.div.withConfig({displayName:"HomePage__Header",componentId:"sc-1ksmkmv-3"})(["color:#fff;font-family:'Raleway',sans-serif;font-size:4rem;font-weight:500;margin:0 2.5rem 8rem;text-align:center;"]),V=Object(u.a)(U||(U=Object(l.a)(["\n  html,\n  body {\n    height: 100%;\n    margin: 0;\n    padding: 0;\n    width: 100%;\n  }\n  \n  /* stylelint-disable-next-line selector-max-id */\n  #root {\n    min-height: 100%;\n    min-width: 100%;\n  }\n"])));var M=function(){return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(K,{}),Object(h.jsx)(V,{})]})},Q=new r.a({uri:"http://localhost:4000/graphql",cache:new a.a});s.a.render(Object(h.jsx)(c.a,{client:Q,children:Object(h.jsx)(M,{})}),document.getElementById("root"))}},[[69,1,2]]]);
//# sourceMappingURL=main.7463475d.chunk.js.map