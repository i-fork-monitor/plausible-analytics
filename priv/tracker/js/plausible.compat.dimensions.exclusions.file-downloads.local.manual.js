!function(){"use strict";var e,t,n,s=window.location,f=window.document,d=f.getElementById("plausible"),g=d.getAttribute("data-api")||(e=d.src.split("/"),t=e[0],n=e[2],t+"//"+n+"/api/event");function v(e){console.warn("Ignoring Event: "+e)}function a(e,t){try{if("true"===window.localStorage.plausible_ignore)return v("localStorage flag")}catch(e){}var n=d&&d.getAttribute("data-include"),a=d&&d.getAttribute("data-exclude");if("pageview"===e){var r=!n||n&&n.split(",").some(l),i=a&&a.split(",").some(l);if(!r||i)return v("exclusion rule")}function l(e){return s.pathname.match(new RegExp("^"+e.trim().replace(/\*\*/g,".*").replace(/([^\.])\*/g,"$1[^\\s/]*")+"/?$"))}var o={};o.n=e,o.u=t&&t.u?t.u:s.href,o.d=d.getAttribute("data-domain"),o.r=f.referrer||null,o.w=window.innerWidth,t&&t.meta&&(o.m=JSON.stringify(t.meta)),t&&t.props&&(o.p=t.props);var p=d.getAttributeNames().filter(function(e){return"event-"===e.substring(0,6)}),u=o.p||{};p.forEach(function(e){var t=e.replace("event-",""),n=d.getAttribute(e);u[t]=u[t]||n}),o.p=u;var c=new XMLHttpRequest;c.open("POST",g,!0),c.setRequestHeader("Content-Type","text/plain"),c.send(JSON.stringify(o)),c.onreadystatechange=function(){4===c.readyState&&t&&t.callback&&t.callback()}}var r=window.plausible&&window.plausible.q||[];window.plausible=a;for(var i=0;i<r.length;i++)a.apply(this,r[i]);var l={},u=!1;function o(e,t,n,a){var r,i,l,o,p;l=t,o=!(i=e).target||i.target.match(/^_(self|parent|top)$/i),p="click"===l.type&&!(l.ctrlKey||l.metaKey||l.shiftKey),o&&p&&(!l.defaultPrevented||u)?(t.preventDefault(),u=!0,r=c(n,function(){window.location=e.href}),setTimeout(r,5e3),w(n,a,r)):w(n,a,c(n,null))}function c(e,t){return function(){delete l[e],t&&0==Object.keys(l).length&&t()}}function w(e,t,n){l[e]=!0,plausible(e,{props:t,callback:n})}var p=["pdf","xlsx","docx","txt","rtf","csv","exe","key","pps","ppt","pptx","7z","pkg","rar","gz","zip","avi","mov","mp4","mpeg","wmv","midi","mp3","wav","wma"],m=d.getAttribute("file-types"),b=d.getAttribute("add-file-types"),h=m&&m.split(",")||b&&b.split(",").concat(p)||p;function y(e){var t,n,a=function(e){for(;e&&(void 0===e.tagName||"a"!==e.tagName.toLowerCase()||!e.href);)e=e.parentNode;return e}(e.target),r=a&&a.href&&a.href.split("?")[0];n=(t=r)&&t.split(".").pop(),h.some(function(e){return e===n})&&o(a,e,"File Download",{url:r})}f.addEventListener("click",y),f.addEventListener("auxclick",y)}();