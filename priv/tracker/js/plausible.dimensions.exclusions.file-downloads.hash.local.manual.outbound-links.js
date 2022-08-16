!function(){"use strict";var s=window.location,d=window.document,f=d.currentScript,g=f.getAttribute("data-api")||new URL(f.src).origin+"/api/event";function v(t){console.warn("Ignoring Event: "+t)}function t(t,e){try{if("true"===window.localStorage.plausible_ignore)return v("localStorage flag")}catch(t){}var n=f&&f.getAttribute("data-include"),r=f&&f.getAttribute("data-exclude");if("pageview"===t){var a=!n||n&&n.split(",").some(o),i=r&&r.split(",").some(o);if(!a||i)return v("exclusion rule")}function o(t){return s.pathname.match(new RegExp("^"+t.trim().replace(/\*\*/g,".*").replace(/([^\.])\*/g,"$1[^\\s/]*")+"/?$"))}var l={};l.n=t,l.u=e&&e.u?e.u:s.href,l.d=f.getAttribute("data-domain"),l.r=d.referrer||null,l.w=window.innerWidth,e&&e.meta&&(l.m=JSON.stringify(e.meta)),e&&e.props&&(l.p=e.props);var c=f.getAttributeNames().filter(function(t){return"event-"===t.substring(0,6)}),u=l.p||{};c.forEach(function(t){var e=t.replace("event-",""),n=f.getAttribute(t);u[e]=u[e]||n}),l.p=u,l.h=1;var p=new XMLHttpRequest;p.open("POST",g,!0),p.setRequestHeader("Content-Type","text/plain"),p.send(JSON.stringify(l)),p.onreadystatechange=function(){4===p.readyState&&e&&e.callback&&e.callback()}}var e=window.plausible&&window.plausible.q||[];window.plausible=t;for(var n=0;n<e.length;n++)t.apply(this,e[n]);var r={},u=!1;function i(t){for(;t&&(void 0===t.tagName||"a"!==t.tagName.toLowerCase()||!t.href);)t=t.parentNode;return t}function o(t,e,n,r){var a,i,o,l,c;o=e,l=!(i=t).target||i.target.match(/^_(self|parent|top)$/i),c="click"===o.type&&!(o.ctrlKey||o.metaKey||o.shiftKey),l&&c&&(!o.defaultPrevented||u)?(e.preventDefault(),u=!0,a=p(n,function(){window.location=t.href}),setTimeout(a,5e3),w(n,r,a)):w(n,r,p(n,null))}function p(t,e){return function(){delete r[t],e&&0==Object.keys(r).length&&e()}}function w(t,e,n){r[t]=!0,plausible(t,{props:e,callback:n})}function a(t){var e,n=i(t.target);(e=n)&&e.href&&e.host&&e.host!==s.host&&o(n,t,"Outbound Link: Click",{url:n.href})}d.addEventListener("click",a),d.addEventListener("auxclick",a);var l=["pdf","xlsx","docx","txt","rtf","csv","exe","key","pps","ppt","pptx","7z","pkg","rar","gz","zip","avi","mov","mp4","mpeg","wmv","midi","mp3","wav","wma"],c=f.getAttribute("file-types"),m=f.getAttribute("add-file-types"),h=c&&c.split(",")||m&&m.split(",").concat(l)||l;function b(t){var e,n,r=i(t.target),a=r&&r.href&&r.href.split("?")[0];n=(e=a)&&e.split(".").pop(),h.some(function(t){return t===n})&&o(r,t,"File Download",{url:a})}d.addEventListener("click",b),d.addEventListener("auxclick",b)}();