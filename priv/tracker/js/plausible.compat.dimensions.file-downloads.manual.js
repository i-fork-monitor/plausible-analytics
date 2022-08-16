!function(){"use strict";var t,e,n,o=window.location,l=window.document,p=l.getElementById("plausible"),c=p.getAttribute("data-api")||(t=p.src.split("/"),e=t[0],n=t[2],e+"//"+n+"/api/event");function s(t){console.warn("Ignoring Event: "+t)}function a(t,e){if(/^localhost$|^127(\.[0-9]+){0,2}\.[0-9]+$|^\[::1?\]$/.test(o.hostname)||"file:"===o.protocol)return s("localhost");if(!(window._phantom||window.__nightmare||window.navigator.webdriver||window.Cypress)){try{if("true"===window.localStorage.plausible_ignore)return s("localStorage flag")}catch(t){}var n={};n.n=t,n.u=e&&e.u?e.u:o.href,n.d=p.getAttribute("data-domain"),n.r=l.referrer||null,n.w=window.innerWidth,e&&e.meta&&(n.m=JSON.stringify(e.meta)),e&&e.props&&(n.p=e.props);var a=p.getAttributeNames().filter(function(t){return"event-"===t.substring(0,6)}),i=n.p||{};a.forEach(function(t){var e=t.replace("event-",""),n=p.getAttribute(t);i[e]=i[e]||n}),n.p=i;var r=new XMLHttpRequest;r.open("POST",c,!0),r.setRequestHeader("Content-Type","text/plain"),r.send(JSON.stringify(n)),r.onreadystatechange=function(){4===r.readyState&&e&&e.callback&&e.callback()}}}var i=window.plausible&&window.plausible.q||[];window.plausible=a;for(var r=0;r<i.length;r++)a.apply(this,i[r]);var u={},d=!1;function f(t,e,n,a){var i,r,o,l,p;o=e,l=!(r=t).target||r.target.match(/^_(self|parent|top)$/i),p="click"===o.type&&!(o.ctrlKey||o.metaKey||o.shiftKey),l&&p&&(!o.defaultPrevented||d)?(e.preventDefault(),d=!0,i=w(n,function(){window.location=t.href}),setTimeout(i,5e3),g(n,a,i)):g(n,a,w(n,null))}function w(t,e){return function(){delete u[t],e&&0==Object.keys(u).length&&e()}}function g(t,e,n){u[t]=!0,plausible(t,{props:e,callback:n})}var v=["pdf","xlsx","docx","txt","rtf","csv","exe","key","pps","ppt","pptx","7z","pkg","rar","gz","zip","avi","mov","mp4","mpeg","wmv","midi","mp3","wav","wma"],m=p.getAttribute("file-types"),h=p.getAttribute("add-file-types"),b=m&&m.split(",")||h&&h.split(",").concat(v)||v;function y(t){var e,n,a=function(t){for(;t&&(void 0===t.tagName||"a"!==t.tagName.toLowerCase()||!t.href);)t=t.parentNode;return t}(t.target),i=a&&a.href&&a.href.split("?")[0];n=(e=i)&&e.split(".").pop(),b.some(function(t){return t===n})&&f(a,t,"File Download",{url:i})}l.addEventListener("click",y),l.addEventListener("auxclick",y)}();