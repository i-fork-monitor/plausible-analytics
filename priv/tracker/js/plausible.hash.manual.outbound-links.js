!function(){"use strict";var r=window.location,i=window.document,o=i.currentScript,l=o.getAttribute("data-api")||new URL(o.src).origin+"/api/event";function c(t){console.warn("Ignoring Event: "+t)}function t(t,e){if(/^localhost$|^127(\.[0-9]+){0,2}\.[0-9]+$|^\[::1?\]$/.test(r.hostname)||"file:"===r.protocol)return c("localhost");if(!(window._phantom||window.__nightmare||window.navigator.webdriver||window.Cypress)){try{if("true"===window.localStorage.plausible_ignore)return c("localStorage flag")}catch(t){}var n={};n.n=t,n.u=e&&e.u?e.u:r.href,n.d=o.getAttribute("data-domain"),n.r=i.referrer||null,n.w=window.innerWidth,e&&e.meta&&(n.m=JSON.stringify(e.meta)),e&&e.props&&(n.p=e.props),n.h=1;var a=new XMLHttpRequest;a.open("POST",l,!0),a.setRequestHeader("Content-Type","text/plain"),a.send(JSON.stringify(n)),a.onreadystatechange=function(){4===a.readyState&&e&&e.callback&&e.callback()}}}var e=window.plausible&&window.plausible.q||[];window.plausible=t;for(var n=0;n<e.length;n++)t.apply(this,e[n]);var a={},u=!1;function s(t,e,n,a){var r,i,o,l,c;o=e,l=!(i=t).target||i.target.match(/^_(self|parent|top)$/i),c="click"===o.type&&!(o.ctrlKey||o.metaKey||o.shiftKey),l&&c&&(!o.defaultPrevented||u)?(e.preventDefault(),u=!0,r=d(n,function(){window.location=t.href}),setTimeout(r,5e3),f(n,a,r)):f(n,a,d(n,null))}function d(t,e){return function(){delete a[t],e&&0==Object.keys(a).length&&e()}}function f(t,e,n){a[t]=!0,plausible(t,{props:e,callback:n})}function w(t){var e,n=function(t){for(;t&&(void 0===t.tagName||"a"!==t.tagName.toLowerCase()||!t.href);)t=t.parentNode;return t}(t.target);(e=n)&&e.href&&e.host&&e.host!==r.host&&s(n,t,"Outbound Link: Click",{url:n.href})}i.addEventListener("click",w),i.addEventListener("auxclick",w)}();