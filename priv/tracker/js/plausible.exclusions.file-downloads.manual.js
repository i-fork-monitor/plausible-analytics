!function(){"use strict";var c=window.location,u=window.document,s=u.currentScript,d=s.getAttribute("data-api")||new URL(s.src).origin+"/api/event";function f(t){console.warn("Ignoring Event: "+t)}function t(t,e){if(/^localhost$|^127(\.[0-9]+){0,2}\.[0-9]+$|^\[::1?\]$/.test(c.hostname)||"file:"===c.protocol)return f("localhost");if(!(window._phantom||window.__nightmare||window.navigator.webdriver||window.Cypress)){try{if("true"===window.localStorage.plausible_ignore)return f("localStorage flag")}catch(t){}var n=s&&s.getAttribute("data-include"),a=s&&s.getAttribute("data-exclude");if("pageview"===t){var i=!n||n&&n.split(",").some(p),r=a&&a.split(",").some(p);if(!i||r)return f("exclusion rule")}var o={};o.n=t,o.u=e&&e.u?e.u:c.href,o.d=s.getAttribute("data-domain"),o.r=u.referrer||null,o.w=window.innerWidth,e&&e.meta&&(o.m=JSON.stringify(e.meta)),e&&e.props&&(o.p=e.props);var l=new XMLHttpRequest;l.open("POST",d,!0),l.setRequestHeader("Content-Type","text/plain"),l.send(JSON.stringify(o)),l.onreadystatechange=function(){4===l.readyState&&e&&e.callback&&e.callback()}}function p(t){return c.pathname.match(new RegExp("^"+t.trim().replace(/\*\*/g,".*").replace(/([^\.])\*/g,"$1[^\\s/]*")+"/?$"))}}var e=window.plausible&&window.plausible.q||[];window.plausible=t;for(var n=0;n<e.length;n++)t.apply(this,e[n]);var a={},w=!1;function r(t,e,n,a){var i,r,o,l,p;o=e,l=!(r=t).target||r.target.match(/^_(self|parent|top)$/i),p="click"===o.type&&!(o.ctrlKey||o.metaKey||o.shiftKey),l&&p&&(!o.defaultPrevented||w)?(e.preventDefault(),w=!0,i=g(n,function(){window.location=t.href}),setTimeout(i,5e3),m(n,a,i)):m(n,a,g(n,null))}function g(t,e){return function(){delete a[t],e&&0==Object.keys(a).length&&e()}}function m(t,e,n){a[t]=!0,plausible(t,{props:e,callback:n})}var i=["pdf","xlsx","docx","txt","rtf","csv","exe","key","pps","ppt","pptx","7z","pkg","rar","gz","zip","avi","mov","mp4","mpeg","wmv","midi","mp3","wav","wma"],o=s.getAttribute("file-types"),l=s.getAttribute("add-file-types"),p=o&&o.split(",")||l&&l.split(",").concat(i)||i;function v(t){var e,n,a=function(t){for(;t&&(void 0===t.tagName||"a"!==t.tagName.toLowerCase()||!t.href);)t=t.parentNode;return t}(t.target),i=a&&a.href&&a.href.split("?")[0];n=(e=i)&&e.split(".").pop(),p.some(function(t){return t===n})&&r(a,t,"File Download",{url:i})}u.addEventListener("click",v),u.addEventListener("auxclick",v)}();