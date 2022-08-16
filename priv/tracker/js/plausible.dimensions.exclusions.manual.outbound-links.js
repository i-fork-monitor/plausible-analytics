!function(){"use strict";var p=window.location,d=window.document,f=d.currentScript,w=f.getAttribute("data-api")||new URL(f.src).origin+"/api/event";function g(e){console.warn("Ignoring Event: "+e)}function e(e,t){if(/^localhost$|^127(\.[0-9]+){0,2}\.[0-9]+$|^\[::1?\]$/.test(p.hostname)||"file:"===p.protocol)return g("localhost");if(!(window._phantom||window.__nightmare||window.navigator.webdriver||window.Cypress)){try{if("true"===window.localStorage.plausible_ignore)return g("localStorage flag")}catch(e){}var n=f&&f.getAttribute("data-include"),r=f&&f.getAttribute("data-exclude");if("pageview"===e){var a=!n||n&&n.split(",").some(s),i=r&&r.split(",").some(s);if(!a||i)return g("exclusion rule")}var o={};o.n=e,o.u=t&&t.u?t.u:p.href,o.d=f.getAttribute("data-domain"),o.r=d.referrer||null,o.w=window.innerWidth,t&&t.meta&&(o.m=JSON.stringify(t.meta)),t&&t.props&&(o.p=t.props);var l=f.getAttributeNames().filter(function(e){return"event-"===e.substring(0,6)}),u=o.p||{};l.forEach(function(e){var t=e.replace("event-",""),n=f.getAttribute(e);u[t]=u[t]||n}),o.p=u;var c=new XMLHttpRequest;c.open("POST",w,!0),c.setRequestHeader("Content-Type","text/plain"),c.send(JSON.stringify(o)),c.onreadystatechange=function(){4===c.readyState&&t&&t.callback&&t.callback()}}function s(e){return p.pathname.match(new RegExp("^"+e.trim().replace(/\*\*/g,".*").replace(/([^\.])\*/g,"$1[^\\s/]*")+"/?$"))}}var t=window.plausible&&window.plausible.q||[];window.plausible=e;for(var n=0;n<t.length;n++)e.apply(this,t[n]);var r={},c=!1;function a(e,t,n,r){var a,i,o,l,u;o=t,l=!(i=e).target||i.target.match(/^_(self|parent|top)$/i),u="click"===o.type&&!(o.ctrlKey||o.metaKey||o.shiftKey),l&&u&&(!o.defaultPrevented||c)?(t.preventDefault(),c=!0,a=s(n,function(){window.location=e.href}),setTimeout(a,5e3),h(n,r,a)):h(n,r,s(n,null))}function s(e,t){return function(){delete r[e],t&&0==Object.keys(r).length&&t()}}function h(e,t,n){r[e]=!0,plausible(e,{props:t,callback:n})}function i(e){var t,n=function(e){for(;e&&(void 0===e.tagName||"a"!==e.tagName.toLowerCase()||!e.href);)e=e.parentNode;return e}(e.target);(t=n)&&t.href&&t.host&&t.host!==p.host&&a(n,e,"Outbound Link: Click",{url:n.href})}d.addEventListener("click",i),d.addEventListener("auxclick",i)}();