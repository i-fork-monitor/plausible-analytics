!function(){"use strict";var e,t,n,a=window.location,r=window.document,o=r.getElementById("plausible"),l=o.getAttribute("data-api")||(e=o.src.split("/"),t=e[0],n=e[2],t+"//"+n+"/api/event");function c(e){console.warn("Ignoring Event: "+e)}function i(e,t){if(/^localhost$|^127(\.[0-9]+){0,2}\.[0-9]+$|^\[::1?\]$/.test(a.hostname)||"file:"===a.protocol)return c("localhost");if(!(window._phantom||window.__nightmare||window.navigator.webdriver||window.Cypress)){try{if("true"===window.localStorage.plausible_ignore)return c("localStorage flag")}catch(e){}var n={};n.n=e,n.u=a.href,n.d=o.getAttribute("data-domain"),n.r=r.referrer||null,n.w=window.innerWidth,t&&t.meta&&(n.m=JSON.stringify(t.meta)),t&&t.props&&(n.p=t.props),n.h=1;var i=new XMLHttpRequest;i.open("POST",l,!0),i.setRequestHeader("Content-Type","text/plain"),i.send(JSON.stringify(n)),i.onreadystatechange=function(){4===i.readyState&&t&&t.callback&&t.callback()}}}var s=window.plausible&&window.plausible.q||[];window.plausible=i;for(var d,u=0;u<s.length;u++)i.apply(this,s[u]);function p(){d=a.pathname,i("pageview")}window.addEventListener("hashchange",p),"prerender"===r.visibilityState?r.addEventListener("visibilitychange",function(){d||"visible"!==r.visibilityState||p()}):p();var f={},w=!1;function h(e,t,n,i){var a,r,o,l,c;o=t,l=!(r=e).target||r.target.match(/^_(self|parent|top)$/i),c="click"===o.type&&!(o.ctrlKey||o.metaKey||o.shiftKey),l&&c&&(!o.defaultPrevented||w)?(t.preventDefault(),w=!0,a=g(n,function(){window.location=e.href}),setTimeout(a,5e3),v(n,i,a)):v(n,i,g(n,null))}function g(e,t){return function(){delete f[e],t&&0==Object.keys(f).length&&t()}}function v(e,t,n){f[e]=!0,plausible(e,{props:t,callback:n})}function b(e){var t,n=function(e){for(;e&&(void 0===e.tagName||"a"!==e.tagName.toLowerCase()||!e.href);)e=e.parentNode;return e}(e.target);(t=n)&&t.href&&t.host&&t.host!==a.host&&h(n,e,"Outbound Link: Click",{url:n.href})}r.addEventListener("click",b),r.addEventListener("auxclick",b)}();