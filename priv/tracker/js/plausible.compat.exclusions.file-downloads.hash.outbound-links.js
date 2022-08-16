!function(){"use strict";var e,t,i,c=window.location,p=window.document,u=p.getElementById("plausible"),d=u.getAttribute("data-api")||(e=u.src.split("/"),t=e[0],i=e[2],t+"//"+i+"/api/event");function f(e){console.warn("Ignoring Event: "+e)}function n(e,t){if(/^localhost$|^127(\.[0-9]+){0,2}\.[0-9]+$|^\[::1?\]$/.test(c.hostname)||"file:"===c.protocol)return f("localhost");if(!(window._phantom||window.__nightmare||window.navigator.webdriver||window.Cypress)){try{if("true"===window.localStorage.plausible_ignore)return f("localStorage flag")}catch(e){}var i=u&&u.getAttribute("data-include"),n=u&&u.getAttribute("data-exclude");if("pageview"===e){var a=!i||i&&i.split(",").some(s),r=n&&n.split(",").some(s);if(!a||r)return f("exclusion rule")}var o={};o.n=e,o.u=c.href,o.d=u.getAttribute("data-domain"),o.r=p.referrer||null,o.w=window.innerWidth,t&&t.meta&&(o.m=JSON.stringify(t.meta)),t&&t.props&&(o.p=t.props),o.h=1;var l=new XMLHttpRequest;l.open("POST",d,!0),l.setRequestHeader("Content-Type","text/plain"),l.send(JSON.stringify(o)),l.onreadystatechange=function(){4===l.readyState&&t&&t.callback&&t.callback()}}function s(e){return c.pathname.match(new RegExp("^"+e.trim().replace(/\*\*/g,".*").replace(/([^\.])\*/g,"$1[^\\s/]*")+"/?$"))}}var a=window.plausible&&window.plausible.q||[];window.plausible=n;for(var r,o=0;o<a.length;o++)n.apply(this,a[o]);function l(){r=c.pathname,n("pageview")}window.addEventListener("hashchange",l),"prerender"===p.visibilityState?p.addEventListener("visibilitychange",function(){r||"visible"!==p.visibilityState||l()}):l();var s={},w=!1;function g(e){for(;e&&(void 0===e.tagName||"a"!==e.tagName.toLowerCase()||!e.href);)e=e.parentNode;return e}function v(e,t,i,n){var a,r,o,l,s;o=t,l=!(r=e).target||r.target.match(/^_(self|parent|top)$/i),s="click"===o.type&&!(o.ctrlKey||o.metaKey||o.shiftKey),l&&s&&(!o.defaultPrevented||w)?(t.preventDefault(),w=!0,a=h(i,function(){window.location=e.href}),setTimeout(a,5e3),m(i,n,a)):m(i,n,h(i,null))}function h(e,t){return function(){delete s[e],t&&0==Object.keys(s).length&&t()}}function m(e,t,i){s[e]=!0,plausible(e,{props:t,callback:i})}function b(e){var t,i=g(e.target);(t=i)&&t.href&&t.host&&t.host!==c.host&&v(i,e,"Outbound Link: Click",{url:i.href})}p.addEventListener("click",b),p.addEventListener("auxclick",b);var y=["pdf","xlsx","docx","txt","rtf","csv","exe","key","pps","ppt","pptx","7z","pkg","rar","gz","zip","avi","mov","mp4","mpeg","wmv","midi","mp3","wav","wma"],k=u.getAttribute("file-types"),x=u.getAttribute("add-file-types"),E=k&&k.split(",")||x&&x.split(",").concat(y)||y;function L(e){var t,i,n=g(e.target),a=n&&n.href&&n.href.split("?")[0];i=(t=a)&&t.split(".").pop(),E.some(function(e){return e===i})&&v(n,e,"File Download",{url:a})}p.addEventListener("click",L),p.addEventListener("auxclick",L)}();