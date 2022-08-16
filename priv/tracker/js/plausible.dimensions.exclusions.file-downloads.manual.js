!function(){"use strict";var s=window.location,d=window.document,f=d.currentScript,w=f.getAttribute("data-api")||new URL(f.src).origin+"/api/event";function g(t){console.warn("Ignoring Event: "+t)}function t(t,e){if(/^localhost$|^127(\.[0-9]+){0,2}\.[0-9]+$|^\[::1?\]$/.test(s.hostname)||"file:"===s.protocol)return g("localhost");if(!(window._phantom||window.__nightmare||window.navigator.webdriver||window.Cypress)){try{if("true"===window.localStorage.plausible_ignore)return g("localStorage flag")}catch(t){}var n=f&&f.getAttribute("data-include"),r=f&&f.getAttribute("data-exclude");if("pageview"===t){var i=!n||n&&n.split(",").some(u),a=r&&r.split(",").some(u);if(!i||a)return g("exclusion rule")}var o={};o.n=t,o.u=e&&e.u?e.u:s.href,o.d=f.getAttribute("data-domain"),o.r=d.referrer||null,o.w=window.innerWidth,e&&e.meta&&(o.m=JSON.stringify(e.meta)),e&&e.props&&(o.p=e.props);var l=f.getAttributeNames().filter(function(t){return"event-"===t.substring(0,6)}),p=o.p||{};l.forEach(function(t){var e=t.replace("event-",""),n=f.getAttribute(t);p[e]=p[e]||n}),o.p=p;var c=new XMLHttpRequest;c.open("POST",w,!0),c.setRequestHeader("Content-Type","text/plain"),c.send(JSON.stringify(o)),c.onreadystatechange=function(){4===c.readyState&&e&&e.callback&&e.callback()}}function u(t){return s.pathname.match(new RegExp("^"+t.trim().replace(/\*\*/g,".*").replace(/([^\.])\*/g,"$1[^\\s/]*")+"/?$"))}}var e=window.plausible&&window.plausible.q||[];window.plausible=t;for(var n=0;n<e.length;n++)t.apply(this,e[n]);var r={},c=!1;function a(t,e,n,r){var i,a,o,l,p;o=e,l=!(a=t).target||a.target.match(/^_(self|parent|top)$/i),p="click"===o.type&&!(o.ctrlKey||o.metaKey||o.shiftKey),l&&p&&(!o.defaultPrevented||c)?(e.preventDefault(),c=!0,i=u(n,function(){window.location=t.href}),setTimeout(i,5e3),v(n,r,i)):v(n,r,u(n,null))}function u(t,e){return function(){delete r[t],e&&0==Object.keys(r).length&&e()}}function v(t,e,n){r[t]=!0,plausible(t,{props:e,callback:n})}var i=["pdf","xlsx","docx","txt","rtf","csv","exe","key","pps","ppt","pptx","7z","pkg","rar","gz","zip","avi","mov","mp4","mpeg","wmv","midi","mp3","wav","wma"],o=f.getAttribute("file-types"),l=f.getAttribute("add-file-types"),p=o&&o.split(",")||l&&l.split(",").concat(i)||i;function m(t){var e,n,r=function(t){for(;t&&(void 0===t.tagName||"a"!==t.tagName.toLowerCase()||!t.href);)t=t.parentNode;return t}(t.target),i=r&&r.href&&r.href.split("?")[0];n=(e=i)&&e.split(".").pop(),p.some(function(t){return t===n})&&a(r,t,"File Download",{url:i})}d.addEventListener("click",m),d.addEventListener("auxclick",m)}();