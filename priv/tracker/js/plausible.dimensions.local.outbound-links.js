!function(){"use strict";var o=window.location,l=window.document,u=l.currentScript,c=u.getAttribute("data-api")||new URL(u.src).origin+"/api/event";function t(t,e){try{if("true"===window.localStorage.plausible_ignore)return void console.warn("Ignoring Event: localStorage flag")}catch(t){}var n={};n.n=t,n.u=o.href,n.d=u.getAttribute("data-domain"),n.r=l.referrer||null,n.w=window.innerWidth,e&&e.meta&&(n.m=JSON.stringify(e.meta)),e&&e.props&&(n.p=e.props);var i=u.getAttributeNames().filter(function(t){return"event-"===t.substring(0,6)}),a=n.p||{};i.forEach(function(t){var e=t.replace("event-",""),n=u.getAttribute(t);a[e]=a[e]||n}),n.p=a;var r=new XMLHttpRequest;r.open("POST",c,!0),r.setRequestHeader("Content-Type","text/plain"),r.send(JSON.stringify(n)),r.onreadystatechange=function(){4===r.readyState&&e&&e.callback&&e.callback()}}var e=window.plausible&&window.plausible.q||[];window.plausible=t;for(var n,i=0;i<e.length;i++)t.apply(this,e[i]);function a(){n!==o.pathname&&(n=o.pathname,t("pageview"))}var r,s=window.history;s.pushState&&(r=s.pushState,s.pushState=function(){r.apply(this,arguments),a()},window.addEventListener("popstate",a)),"prerender"===l.visibilityState?l.addEventListener("visibilitychange",function(){n||"visible"!==l.visibilityState||a()}):a();var p={},d=!1;function f(t,e,n,i){var a,r,o,l,u;o=e,l=!(r=t).target||r.target.match(/^_(self|parent|top)$/i),u="click"===o.type&&!(o.ctrlKey||o.metaKey||o.shiftKey),l&&u&&(!o.defaultPrevented||d)?(e.preventDefault(),d=!0,a=v(n,function(){window.location=t.href}),setTimeout(a,5e3),w(n,i,a)):w(n,i,v(n,null))}function v(t,e){return function(){delete p[t],e&&0==Object.keys(p).length&&e()}}function w(t,e,n){p[t]=!0,plausible(t,{props:e,callback:n})}function h(t){var e,n=function(t){for(;t&&(void 0===t.tagName||"a"!==t.tagName.toLowerCase()||!t.href);)t=t.parentNode;return t}(t.target);(e=n)&&e.href&&e.host&&e.host!==o.host&&f(n,t,"Outbound Link: Click",{url:n.href})}l.addEventListener("click",h),l.addEventListener("auxclick",h)}();