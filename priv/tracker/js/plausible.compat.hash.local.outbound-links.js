!function(){"use strict";var e,t,n,a=window.location,r=window.document,o=r.getElementById("plausible"),l=o.getAttribute("data-api")||(e=o.src.split("/"),t=e[0],n=e[2],t+"//"+n+"/api/event");function i(e,t){try{if("true"===window.localStorage.plausible_ignore)return void console.warn("Ignoring Event: localStorage flag")}catch(e){}var n={};n.n=e,n.u=a.href,n.d=o.getAttribute("data-domain"),n.r=r.referrer||null,n.w=window.innerWidth,t&&t.meta&&(n.m=JSON.stringify(t.meta)),t&&t.props&&(n.p=t.props),n.h=1;var i=new XMLHttpRequest;i.open("POST",l,!0),i.setRequestHeader("Content-Type","text/plain"),i.send(JSON.stringify(n)),i.onreadystatechange=function(){4===i.readyState&&t&&t.callback&&t.callback()}}var c=window.plausible&&window.plausible.q||[];window.plausible=i;for(var s,u=0;u<c.length;u++)i.apply(this,c[u]);function d(){s=a.pathname,i("pageview")}window.addEventListener("hashchange",d),"prerender"===r.visibilityState?r.addEventListener("visibilitychange",function(){s||"visible"!==r.visibilityState||d()}):d();var p={},f=!1;function v(e,t,n,i){var a,r,o,l,c;o=t,l=!(r=e).target||r.target.match(/^_(self|parent|top)$/i),c="click"===o.type&&!(o.ctrlKey||o.metaKey||o.shiftKey),l&&c&&(!o.defaultPrevented||f)?(t.preventDefault(),f=!0,a=w(n,function(){window.location=e.href}),setTimeout(a,5e3),g(n,i,a)):g(n,i,w(n,null))}function w(e,t){return function(){delete p[e],t&&0==Object.keys(p).length&&t()}}function g(e,t,n){p[e]=!0,plausible(e,{props:t,callback:n})}function h(e){var t,n=function(e){for(;e&&(void 0===e.tagName||"a"!==e.tagName.toLowerCase()||!e.href);)e=e.parentNode;return e}(e.target);(t=n)&&t.href&&t.host&&t.host!==a.host&&v(n,e,"Outbound Link: Click",{url:n.href})}r.addEventListener("click",h),r.addEventListener("auxclick",h)}();