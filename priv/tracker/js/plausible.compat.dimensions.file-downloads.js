!function(){"use strict";var t,e,i,o=window.location,l=window.document,p=l.getElementById("plausible"),s=p.getAttribute("data-api")||(t=p.src.split("/"),e=t[0],i=t[2],e+"//"+i+"/api/event");function c(t){console.warn("Ignoring Event: "+t)}function n(t,e){if(/^localhost$|^127(\.[0-9]+){0,2}\.[0-9]+$|^\[::1?\]$/.test(o.hostname)||"file:"===o.protocol)return c("localhost");if(!(window._phantom||window.__nightmare||window.navigator.webdriver||window.Cypress)){try{if("true"===window.localStorage.plausible_ignore)return c("localStorage flag")}catch(t){}var i={};i.n=t,i.u=o.href,i.d=p.getAttribute("data-domain"),i.r=l.referrer||null,i.w=window.innerWidth,e&&e.meta&&(i.m=JSON.stringify(e.meta)),e&&e.props&&(i.p=e.props);var n=p.getAttributeNames().filter(function(t){return"event-"===t.substring(0,6)}),a=i.p||{};n.forEach(function(t){var e=t.replace("event-",""),i=p.getAttribute(t);a[e]=a[e]||i}),i.p=a;var r=new XMLHttpRequest;r.open("POST",s,!0),r.setRequestHeader("Content-Type","text/plain"),r.send(JSON.stringify(i)),r.onreadystatechange=function(){4===r.readyState&&e&&e.callback&&e.callback()}}}var a=window.plausible&&window.plausible.q||[];window.plausible=n;for(var r,u=0;u<a.length;u++)n.apply(this,a[u]);function d(){r!==o.pathname&&(r=o.pathname,n("pageview"))}var f,w=window.history;w.pushState&&(f=w.pushState,w.pushState=function(){f.apply(this,arguments),d()},window.addEventListener("popstate",d)),"prerender"===l.visibilityState?l.addEventListener("visibilitychange",function(){r||"visible"!==l.visibilityState||d()}):d();var v={},g=!1;function h(t,e,i,n){var a,r,o,l,p;o=e,l=!(r=t).target||r.target.match(/^_(self|parent|top)$/i),p="click"===o.type&&!(o.ctrlKey||o.metaKey||o.shiftKey),l&&p&&(!o.defaultPrevented||g)?(e.preventDefault(),g=!0,a=m(i,function(){window.location=t.href}),setTimeout(a,5e3),b(i,n,a)):b(i,n,m(i,null))}function m(t,e){return function(){delete v[t],e&&0==Object.keys(v).length&&e()}}function b(t,e,i){v[t]=!0,plausible(t,{props:e,callback:i})}var y=["pdf","xlsx","docx","txt","rtf","csv","exe","key","pps","ppt","pptx","7z","pkg","rar","gz","zip","avi","mov","mp4","mpeg","wmv","midi","mp3","wav","wma"],S=p.getAttribute("file-types"),k=p.getAttribute("add-file-types"),x=S&&S.split(",")||k&&k.split(",").concat(y)||y;function E(t){var e,i,n=function(t){for(;t&&(void 0===t.tagName||"a"!==t.tagName.toLowerCase()||!t.href);)t=t.parentNode;return t}(t.target),a=n&&n.href&&n.href.split("?")[0];i=(e=a)&&e.split(".").pop(),x.some(function(t){return t===i})&&h(n,t,"File Download",{url:a})}l.addEventListener("click",E),l.addEventListener("auxclick",E)}();