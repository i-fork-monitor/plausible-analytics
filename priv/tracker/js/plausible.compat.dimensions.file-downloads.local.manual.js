!function(){"use strict";var t,e,n,o=window.location,l=window.document,p=l.getElementById("plausible"),u=p.getAttribute("data-api")||(t=p.src.split("/"),e=t[0],n=t[2],e+"//"+n+"/api/event");function a(t,e){try{if("true"===window.localStorage.plausible_ignore)return void console.warn("Ignoring Event: localStorage flag")}catch(t){}var n={};n.n=t,n.u=e&&e.u?e.u:o.href,n.d=p.getAttribute("data-domain"),n.r=l.referrer||null,n.w=window.innerWidth,e&&e.meta&&(n.m=JSON.stringify(e.meta)),e&&e.props&&(n.p=e.props);var a=p.getAttributeNames().filter(function(t){return"event-"===t.substring(0,6)}),r=n.p||{};a.forEach(function(t){var e=t.replace("event-",""),n=p.getAttribute(t);r[e]=r[e]||n}),n.p=r;var i=new XMLHttpRequest;i.open("POST",u,!0),i.setRequestHeader("Content-Type","text/plain"),i.send(JSON.stringify(n)),i.onreadystatechange=function(){4===i.readyState&&e&&e.callback&&e.callback()}}var r=window.plausible&&window.plausible.q||[];window.plausible=a;for(var i=0;i<r.length;i++)a.apply(this,r[i]);var c={},s=!1;function d(t,e,n,a){var r,i,o,l,p;o=e,l=!(i=t).target||i.target.match(/^_(self|parent|top)$/i),p="click"===o.type&&!(o.ctrlKey||o.metaKey||o.shiftKey),l&&p&&(!o.defaultPrevented||s)?(e.preventDefault(),s=!0,r=f(n,function(){window.location=t.href}),setTimeout(r,5e3),g(n,a,r)):g(n,a,f(n,null))}function f(t,e){return function(){delete c[t],e&&0==Object.keys(c).length&&e()}}function g(t,e,n){c[t]=!0,plausible(t,{props:e,callback:n})}var v=["pdf","xlsx","docx","txt","rtf","csv","exe","key","pps","ppt","pptx","7z","pkg","rar","gz","zip","avi","mov","mp4","mpeg","wmv","midi","mp3","wav","wma"],w=p.getAttribute("file-types"),m=p.getAttribute("add-file-types"),b=w&&w.split(",")||m&&m.split(",").concat(v)||v;function y(t){var e,n,a=function(t){for(;t&&(void 0===t.tagName||"a"!==t.tagName.toLowerCase()||!t.href);)t=t.parentNode;return t}(t.target),r=a&&a.href&&a.href.split("?")[0];n=(e=r)&&e.split(".").pop(),b.some(function(t){return t===n})&&d(a,t,"File Download",{url:r})}l.addEventListener("click",y),l.addEventListener("auxclick",y)}();