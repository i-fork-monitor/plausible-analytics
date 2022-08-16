!function(){"use strict";var t,e,n,s=window.location,d=window.document,f=d.getElementById("plausible"),g=f.getAttribute("data-api")||(t=f.src.split("/"),e=t[0],n=t[2],e+"//"+n+"/api/event");function w(t){console.warn("Ignoring Event: "+t)}function a(t,e){if(/^localhost$|^127(\.[0-9]+){0,2}\.[0-9]+$|^\[::1?\]$/.test(s.hostname)||"file:"===s.protocol)return w("localhost");if(!(window._phantom||window.__nightmare||window.navigator.webdriver||window.Cypress)){try{if("true"===window.localStorage.plausible_ignore)return w("localStorage flag")}catch(t){}var n=f&&f.getAttribute("data-include"),a=f&&f.getAttribute("data-exclude");if("pageview"===t){var r=!n||n&&n.split(",").some(c),i=a&&a.split(",").some(c);if(!r||i)return w("exclusion rule")}var o={};o.n=t,o.u=e&&e.u?e.u:s.href,o.d=f.getAttribute("data-domain"),o.r=d.referrer||null,o.w=window.innerWidth,e&&e.meta&&(o.m=JSON.stringify(e.meta)),e&&e.props&&(o.p=e.props);var l=f.getAttributeNames().filter(function(t){return"event-"===t.substring(0,6)}),p=o.p||{};l.forEach(function(t){var e=t.replace("event-",""),n=f.getAttribute(t);p[e]=p[e]||n}),o.p=p;var u=new XMLHttpRequest;u.open("POST",g,!0),u.setRequestHeader("Content-Type","text/plain"),u.send(JSON.stringify(o)),u.onreadystatechange=function(){4===u.readyState&&e&&e.callback&&e.callback()}}function c(t){return s.pathname.match(new RegExp("^"+t.trim().replace(/\*\*/g,".*").replace(/([^\.])\*/g,"$1[^\\s/]*")+"/?$"))}}var r=window.plausible&&window.plausible.q||[];window.plausible=a;for(var i=0;i<r.length;i++)a.apply(this,r[i]);var o={},u=!1;function l(t,e,n,a){var r,i,o,l,p;o=e,l=!(i=t).target||i.target.match(/^_(self|parent|top)$/i),p="click"===o.type&&!(o.ctrlKey||o.metaKey||o.shiftKey),l&&p&&(!o.defaultPrevented||u)?(e.preventDefault(),u=!0,r=c(n,function(){window.location=t.href}),setTimeout(r,5e3),v(n,a,r)):v(n,a,c(n,null))}function c(t,e){return function(){delete o[t],e&&0==Object.keys(o).length&&e()}}function v(t,e,n){o[t]=!0,plausible(t,{props:e,callback:n})}var p=["pdf","xlsx","docx","txt","rtf","csv","exe","key","pps","ppt","pptx","7z","pkg","rar","gz","zip","avi","mov","mp4","mpeg","wmv","midi","mp3","wav","wma"],m=f.getAttribute("file-types"),h=f.getAttribute("add-file-types"),b=m&&m.split(",")||h&&h.split(",").concat(p)||p;function y(t){var e,n,a=function(t){for(;t&&(void 0===t.tagName||"a"!==t.tagName.toLowerCase()||!t.href);)t=t.parentNode;return t}(t.target),r=a&&a.href&&a.href.split("?")[0];n=(e=r)&&e.split(".").pop(),b.some(function(t){return t===n})&&l(a,t,"File Download",{url:r})}d.addEventListener("click",y),d.addEventListener("auxclick",y)}();