!function(){"use strict";var p=window.location,s=window.document,u=s.currentScript,d=u.getAttribute("data-api")||new URL(u.src).origin+"/api/event";function f(e){console.warn("Ignoring Event: "+e)}function e(e,t){try{if("true"===window.localStorage.plausible_ignore)return f("localStorage flag")}catch(e){}var i=u&&u.getAttribute("data-include"),n=u&&u.getAttribute("data-exclude");if("pageview"===e){var a=!i||i&&i.split(",").some(o),r=n&&n.split(",").some(o);if(!a||r)return f("exclusion rule")}function o(e){return p.pathname.match(new RegExp("^"+e.trim().replace(/\*\*/g,".*").replace(/([^\.])\*/g,"$1[^\\s/]*")+"/?$"))}var l={};l.n=e,l.u=p.href,l.d=u.getAttribute("data-domain"),l.r=s.referrer||null,l.w=window.innerWidth,t&&t.meta&&(l.m=JSON.stringify(t.meta)),t&&t.props&&(l.p=t.props),l.h=1;var c=new XMLHttpRequest;c.open("POST",d,!0),c.setRequestHeader("Content-Type","text/plain"),c.send(JSON.stringify(l)),c.onreadystatechange=function(){4===c.readyState&&t&&t.callback&&t.callback()}}var t=window.plausible&&window.plausible.q||[];window.plausible=e;for(var i,n=0;n<t.length;n++)e.apply(this,t[n]);function a(){i=p.pathname,e("pageview")}window.addEventListener("hashchange",a),"prerender"===s.visibilityState?s.addEventListener("visibilitychange",function(){i||"visible"!==s.visibilityState||a()}):a();var r={},g=!1;function o(e){for(;e&&(void 0===e.tagName||"a"!==e.tagName.toLowerCase()||!e.href);)e=e.parentNode;return e}function l(e,t,i,n){var a,r,o,l,c;o=t,l=!(r=e).target||r.target.match(/^_(self|parent|top)$/i),c="click"===o.type&&!(o.ctrlKey||o.metaKey||o.shiftKey),l&&c&&(!o.defaultPrevented||g)?(t.preventDefault(),g=!0,a=v(i,function(){window.location=e.href}),setTimeout(a,5e3),w(i,n,a)):w(i,n,v(i,null))}function v(e,t){return function(){delete r[e],t&&0==Object.keys(r).length&&t()}}function w(e,t,i){r[e]=!0,plausible(e,{props:t,callback:i})}function c(e){var t,i=o(e.target);(t=i)&&t.href&&t.host&&t.host!==p.host&&l(i,e,"Outbound Link: Click",{url:i.href})}s.addEventListener("click",c),s.addEventListener("auxclick",c);var h=["pdf","xlsx","docx","txt","rtf","csv","exe","key","pps","ppt","pptx","7z","pkg","rar","gz","zip","avi","mov","mp4","mpeg","wmv","midi","mp3","wav","wma"],m=u.getAttribute("file-types"),b=u.getAttribute("add-file-types"),y=m&&m.split(",")||b&&b.split(",").concat(h)||h;function k(e){var t,i,n=o(e.target),a=n&&n.href&&n.href.split("?")[0];i=(t=a)&&t.split(".").pop(),y.some(function(e){return e===i})&&l(n,e,"File Download",{url:a})}s.addEventListener("click",k),s.addEventListener("auxclick",k)}();