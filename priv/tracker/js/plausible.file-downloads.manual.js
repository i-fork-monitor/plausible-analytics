!function(){"use strict";var a=window.location,r=window.document,o=r.currentScript,l=o.getAttribute("data-api")||new URL(o.src).origin+"/api/event";function p(t){console.warn("Ignoring Event: "+t)}function t(t,e){if(/^localhost$|^127(\.[0-9]+){0,2}\.[0-9]+$|^\[::1?\]$/.test(a.hostname)||"file:"===a.protocol)return p("localhost");if(!(window._phantom||window.__nightmare||window.navigator.webdriver||window.Cypress)){try{if("true"===window.localStorage.plausible_ignore)return p("localStorage flag")}catch(t){}var n={};n.n=t,n.u=e&&e.u?e.u:a.href,n.d=o.getAttribute("data-domain"),n.r=r.referrer||null,n.w=window.innerWidth,e&&e.meta&&(n.m=JSON.stringify(e.meta)),e&&e.props&&(n.p=e.props);var i=new XMLHttpRequest;i.open("POST",l,!0),i.setRequestHeader("Content-Type","text/plain"),i.send(JSON.stringify(n)),i.onreadystatechange=function(){4===i.readyState&&e&&e.callback&&e.callback()}}}var e=window.plausible&&window.plausible.q||[];window.plausible=t;for(var n=0;n<e.length;n++)t.apply(this,e[n]);var i={},c=!1;function s(t,e,n,i){var a,r,o,l,p;o=e,l=!(r=t).target||r.target.match(/^_(self|parent|top)$/i),p="click"===o.type&&!(o.ctrlKey||o.metaKey||o.shiftKey),l&&p&&(!o.defaultPrevented||c)?(e.preventDefault(),c=!0,a=u(n,function(){window.location=t.href}),setTimeout(a,5e3),d(n,i,a)):d(n,i,u(n,null))}function u(t,e){return function(){delete i[t],e&&0==Object.keys(i).length&&e()}}function d(t,e,n){i[t]=!0,plausible(t,{props:e,callback:n})}var f=["pdf","xlsx","docx","txt","rtf","csv","exe","key","pps","ppt","pptx","7z","pkg","rar","gz","zip","avi","mov","mp4","mpeg","wmv","midi","mp3","wav","wma"],w=o.getAttribute("file-types"),g=o.getAttribute("add-file-types"),v=w&&w.split(",")||g&&g.split(",").concat(f)||f;function m(t){var e,n,i=function(t){for(;t&&(void 0===t.tagName||"a"!==t.tagName.toLowerCase()||!t.href);)t=t.parentNode;return t}(t.target),a=i&&i.href&&i.href.split("?")[0];n=(e=a)&&e.split(".").pop(),v.some(function(t){return t===n})&&s(i,t,"File Download",{url:a})}r.addEventListener("click",m),r.addEventListener("auxclick",m)}();