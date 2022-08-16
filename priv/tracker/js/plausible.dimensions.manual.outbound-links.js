!function(){"use strict";var o=window.location,l=window.document,c=l.currentScript,u=c.getAttribute("data-api")||new URL(c.src).origin+"/api/event";function s(t){console.warn("Ignoring Event: "+t)}function t(t,e){if(/^localhost$|^127(\.[0-9]+){0,2}\.[0-9]+$|^\[::1?\]$/.test(o.hostname)||"file:"===o.protocol)return s("localhost");if(!(window._phantom||window.__nightmare||window.navigator.webdriver||window.Cypress)){try{if("true"===window.localStorage.plausible_ignore)return s("localStorage flag")}catch(t){}var n={};n.n=t,n.u=e&&e.u?e.u:o.href,n.d=c.getAttribute("data-domain"),n.r=l.referrer||null,n.w=window.innerWidth,e&&e.meta&&(n.m=JSON.stringify(e.meta)),e&&e.props&&(n.p=e.props);var r=c.getAttributeNames().filter(function(t){return"event-"===t.substring(0,6)}),a=n.p||{};r.forEach(function(t){var e=t.replace("event-",""),n=c.getAttribute(t);a[e]=a[e]||n}),n.p=a;var i=new XMLHttpRequest;i.open("POST",u,!0),i.setRequestHeader("Content-Type","text/plain"),i.send(JSON.stringify(n)),i.onreadystatechange=function(){4===i.readyState&&e&&e.callback&&e.callback()}}}var e=window.plausible&&window.plausible.q||[];window.plausible=t;for(var n=0;n<e.length;n++)t.apply(this,e[n]);var r={},f=!1;function a(t,e,n,r){var a,i,o,l,c;o=e,l=!(i=t).target||i.target.match(/^_(self|parent|top)$/i),c="click"===o.type&&!(o.ctrlKey||o.metaKey||o.shiftKey),l&&c&&(!o.defaultPrevented||f)?(e.preventDefault(),f=!0,a=d(n,function(){window.location=t.href}),setTimeout(a,5e3),p(n,r,a)):p(n,r,d(n,null))}function d(t,e){return function(){delete r[t],e&&0==Object.keys(r).length&&e()}}function p(t,e,n){r[t]=!0,plausible(t,{props:e,callback:n})}function i(t){var e,n=function(t){for(;t&&(void 0===t.tagName||"a"!==t.tagName.toLowerCase()||!t.href);)t=t.parentNode;return t}(t.target);(e=n)&&e.href&&e.host&&e.host!==o.host&&a(n,t,"Outbound Link: Click",{url:n.href})}l.addEventListener("click",i),l.addEventListener("auxclick",i)}();