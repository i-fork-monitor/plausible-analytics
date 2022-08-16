!function(){"use strict";var c=window.location,s=window.document,u=s.currentScript,d=u.getAttribute("data-api")||new URL(u.src).origin+"/api/event";function f(e){console.warn("Ignoring Event: "+e)}function e(e,t){try{if("true"===window.localStorage.plausible_ignore)return f("localStorage flag")}catch(e){}var i=u&&u.getAttribute("data-include"),n=u&&u.getAttribute("data-exclude");if("pageview"===e){var a=!i||i&&i.split(",").some(o),r=n&&n.split(",").some(o);if(!a||r)return f("exclusion rule")}function o(e){return c.pathname.match(new RegExp("^"+e.trim().replace(/\*\*/g,".*").replace(/([^\.])\*/g,"$1[^\\s/]*")+"/?$"))}var l={};l.n=e,l.u=c.href,l.d=u.getAttribute("data-domain"),l.r=s.referrer||null,l.w=window.innerWidth,t&&t.meta&&(l.m=JSON.stringify(t.meta)),t&&t.props&&(l.p=t.props),l.h=1;var p=new XMLHttpRequest;p.open("POST",d,!0),p.setRequestHeader("Content-Type","text/plain"),p.send(JSON.stringify(l)),p.onreadystatechange=function(){4===p.readyState&&t&&t.callback&&t.callback()}}var t=window.plausible&&window.plausible.q||[];window.plausible=e;for(var i,n=0;n<t.length;n++)e.apply(this,t[n]);function a(){i=c.pathname,e("pageview")}window.addEventListener("hashchange",a),"prerender"===s.visibilityState?s.addEventListener("visibilitychange",function(){i||"visible"!==s.visibilityState||a()}):a();var r={},g=!1;function o(e,t,i,n){var a,r,o,l,p;o=t,l=!(r=e).target||r.target.match(/^_(self|parent|top)$/i),p="click"===o.type&&!(o.ctrlKey||o.metaKey||o.shiftKey),l&&p&&(!o.defaultPrevented||g)?(t.preventDefault(),g=!0,a=v(i,function(){window.location=e.href}),setTimeout(a,5e3),w(i,n,a)):w(i,n,v(i,null))}function v(e,t){return function(){delete r[e],t&&0==Object.keys(r).length&&t()}}function w(e,t,i){r[e]=!0,plausible(e,{props:t,callback:i})}var l=["pdf","xlsx","docx","txt","rtf","csv","exe","key","pps","ppt","pptx","7z","pkg","rar","gz","zip","avi","mov","mp4","mpeg","wmv","midi","mp3","wav","wma"],p=u.getAttribute("file-types"),m=u.getAttribute("add-file-types"),h=p&&p.split(",")||m&&m.split(",").concat(l)||l;function b(e){var t,i,n=function(e){for(;e&&(void 0===e.tagName||"a"!==e.tagName.toLowerCase()||!e.href);)e=e.parentNode;return e}(e.target),a=n&&n.href&&n.href.split("?")[0];i=(t=a)&&t.split(".").pop(),h.some(function(e){return e===i})&&o(n,e,"File Download",{url:a})}s.addEventListener("click",b),s.addEventListener("auxclick",b)}();