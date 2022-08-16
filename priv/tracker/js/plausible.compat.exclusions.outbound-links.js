!function(){"use strict";var t,e,n,u=window.location,c=window.document,p=c.getElementById("plausible"),d=p.getAttribute("data-api")||(t=p.src.split("/"),e=t[0],n=t[2],e+"//"+n+"/api/event");function f(t){console.warn("Ignoring Event: "+t)}function i(t,e){if(/^localhost$|^127(\.[0-9]+){0,2}\.[0-9]+$|^\[::1?\]$/.test(u.hostname)||"file:"===u.protocol)return f("localhost");if(!(window._phantom||window.__nightmare||window.navigator.webdriver||window.Cypress)){try{if("true"===window.localStorage.plausible_ignore)return f("localStorage flag")}catch(t){}var n=p&&p.getAttribute("data-include"),i=p&&p.getAttribute("data-exclude");if("pageview"===t){var a=!n||n&&n.split(",").some(s),r=i&&i.split(",").some(s);if(!a||r)return f("exclusion rule")}var o={};o.n=t,o.u=u.href,o.d=p.getAttribute("data-domain"),o.r=c.referrer||null,o.w=window.innerWidth,e&&e.meta&&(o.m=JSON.stringify(e.meta)),e&&e.props&&(o.p=e.props);var l=new XMLHttpRequest;l.open("POST",d,!0),l.setRequestHeader("Content-Type","text/plain"),l.send(JSON.stringify(o)),l.onreadystatechange=function(){4===l.readyState&&e&&e.callback&&e.callback()}}function s(t){return u.pathname.match(new RegExp("^"+t.trim().replace(/\*\*/g,".*").replace(/([^\.])\*/g,"$1[^\\s/]*")+"/?$"))}}var a=window.plausible&&window.plausible.q||[];window.plausible=i;for(var r,o=0;o<a.length;o++)i.apply(this,a[o]);function l(){r!==u.pathname&&(r=u.pathname,i("pageview"))}var s,w=window.history;w.pushState&&(s=w.pushState,w.pushState=function(){s.apply(this,arguments),l()},window.addEventListener("popstate",l)),"prerender"===c.visibilityState?c.addEventListener("visibilitychange",function(){r||"visible"!==c.visibilityState||l()}):l();var h={},g=!1;function v(t,e,n,i){var a,r,o,l,s;o=e,l=!(r=t).target||r.target.match(/^_(self|parent|top)$/i),s="click"===o.type&&!(o.ctrlKey||o.metaKey||o.shiftKey),l&&s&&(!o.defaultPrevented||g)?(e.preventDefault(),g=!0,a=m(n,function(){window.location=t.href}),setTimeout(a,5e3),b(n,i,a)):b(n,i,m(n,null))}function m(t,e){return function(){delete h[t],e&&0==Object.keys(h).length&&e()}}function b(t,e,n){h[t]=!0,plausible(t,{props:e,callback:n})}function y(t){var e,n=function(t){for(;t&&(void 0===t.tagName||"a"!==t.tagName.toLowerCase()||!t.href);)t=t.parentNode;return t}(t.target);(e=n)&&e.href&&e.host&&e.host!==u.host&&v(n,t,"Outbound Link: Click",{url:n.href})}c.addEventListener("click",y),c.addEventListener("auxclick",y)}();