!function(){"use strict";var s=window.location,d=window.document,f=d.currentScript,g=f.getAttribute("data-api")||new URL(f.src).origin+"/api/event";function w(t){console.warn("Ignoring Event: "+t)}function t(t,e){if(/^localhost$|^127(\.[0-9]+){0,2}\.[0-9]+$|^\[::1?\]$/.test(s.hostname)||"file:"===s.protocol)return w("localhost");if(!(window._phantom||window.__nightmare||window.navigator.webdriver||window.Cypress)){try{if("true"===window.localStorage.plausible_ignore)return w("localStorage flag")}catch(t){}var n=f&&f.getAttribute("data-include"),r=f&&f.getAttribute("data-exclude");if("pageview"===t){var i=!n||n&&n.split(",").some(p),a=r&&r.split(",").some(p);if(!i||a)return w("exclusion rule")}var o={};o.n=t,o.u=e&&e.u?e.u:s.href,o.d=f.getAttribute("data-domain"),o.r=d.referrer||null,o.w=window.innerWidth,e&&e.meta&&(o.m=JSON.stringify(e.meta)),e&&e.props&&(o.p=e.props);var l=f.getAttributeNames().filter(function(t){return"event-"===t.substring(0,6)}),c=o.p||{};l.forEach(function(t){var e=t.replace("event-",""),n=f.getAttribute(t);c[e]=c[e]||n}),o.p=c;var u=new XMLHttpRequest;u.open("POST",g,!0),u.setRequestHeader("Content-Type","text/plain"),u.send(JSON.stringify(o)),u.onreadystatechange=function(){4===u.readyState&&e&&e.callback&&e.callback()}}function p(t){return s.pathname.match(new RegExp("^"+t.trim().replace(/\*\*/g,".*").replace(/([^\.])\*/g,"$1[^\\s/]*")+"/?$"))}}var e=window.plausible&&window.plausible.q||[];window.plausible=t;for(var n=0;n<e.length;n++)t.apply(this,e[n]);var r={},u=!1;function a(t){for(;t&&(void 0===t.tagName||"a"!==t.tagName.toLowerCase()||!t.href);)t=t.parentNode;return t}function o(t,e,n,r){var i,a,o,l,c;o=e,l=!(a=t).target||a.target.match(/^_(self|parent|top)$/i),c="click"===o.type&&!(o.ctrlKey||o.metaKey||o.shiftKey),l&&c&&(!o.defaultPrevented||u)?(e.preventDefault(),u=!0,i=p(n,function(){window.location=t.href}),setTimeout(i,5e3),v(n,r,i)):v(n,r,p(n,null))}function p(t,e){return function(){delete r[t],e&&0==Object.keys(r).length&&e()}}function v(t,e,n){r[t]=!0,plausible(t,{props:e,callback:n})}function i(t){var e,n=a(t.target);(e=n)&&e.href&&e.host&&e.host!==s.host&&o(n,t,"Outbound Link: Click",{url:n.href})}d.addEventListener("click",i),d.addEventListener("auxclick",i);var l=["pdf","xlsx","docx","txt","rtf","csv","exe","key","pps","ppt","pptx","7z","pkg","rar","gz","zip","avi","mov","mp4","mpeg","wmv","midi","mp3","wav","wma"],c=f.getAttribute("file-types"),m=f.getAttribute("add-file-types"),h=c&&c.split(",")||m&&m.split(",").concat(l)||l;function b(t){var e,n,r=a(t.target),i=r&&r.href&&r.href.split("?")[0];n=(e=i)&&e.split(".").pop(),h.some(function(t){return t===n})&&o(r,t,"File Download",{url:i})}d.addEventListener("click",b),d.addEventListener("auxclick",b)}();