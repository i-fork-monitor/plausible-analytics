!function(){"use strict";var a=window.location,r=window.document,o=r.currentScript,l=o.getAttribute("data-api")||new URL(o.src).origin+"/api/event";function e(e,t){try{if("true"===window.localStorage.plausible_ignore)return void console.warn("Ignoring Event: localStorage flag")}catch(e){}var i={};i.n=e,i.u=a.href,i.d=o.getAttribute("data-domain"),i.r=r.referrer||null,i.w=window.innerWidth,t&&t.meta&&(i.m=JSON.stringify(t.meta)),t&&t.props&&(i.p=t.props),i.h=1;var n=new XMLHttpRequest;n.open("POST",l,!0),n.setRequestHeader("Content-Type","text/plain"),n.send(JSON.stringify(i)),n.onreadystatechange=function(){4===n.readyState&&t&&t.callback&&t.callback()}}var t=window.plausible&&window.plausible.q||[];window.plausible=e;for(var i,n=0;n<t.length;n++)e.apply(this,t[n]);function p(){i=a.pathname,e("pageview")}window.addEventListener("hashchange",p),"prerender"===r.visibilityState?r.addEventListener("visibilitychange",function(){i||"visible"!==r.visibilityState||p()}):p();var c={},s=!1;function d(e,t,i,n){var a,r,o,l,p;o=t,l=!(r=e).target||r.target.match(/^_(self|parent|top)$/i),p="click"===o.type&&!(o.ctrlKey||o.metaKey||o.shiftKey),l&&p&&(!o.defaultPrevented||s)?(t.preventDefault(),s=!0,a=u(i,function(){window.location=e.href}),setTimeout(a,5e3),f(i,n,a)):f(i,n,u(i,null))}function u(e,t){return function(){delete c[e],t&&0==Object.keys(c).length&&t()}}function f(e,t,i){c[e]=!0,plausible(e,{props:t,callback:i})}var v=["pdf","xlsx","docx","txt","rtf","csv","exe","key","pps","ppt","pptx","7z","pkg","rar","gz","zip","avi","mov","mp4","mpeg","wmv","midi","mp3","wav","wma"],w=o.getAttribute("file-types"),g=o.getAttribute("add-file-types"),h=w&&w.split(",")||g&&g.split(",").concat(v)||v;function m(e){var t,i,n=function(e){for(;e&&(void 0===e.tagName||"a"!==e.tagName.toLowerCase()||!e.href);)e=e.parentNode;return e}(e.target),a=n&&n.href&&n.href.split("?")[0];i=(t=a)&&t.split(".").pop(),h.some(function(e){return e===i})&&d(n,e,"File Download",{url:a})}r.addEventListener("click",m),r.addEventListener("auxclick",m)}();