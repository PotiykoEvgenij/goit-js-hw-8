var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t=/^\s+|\s+$/g,n=/^[-+]0x[0-9a-f]+$/i,o=/^0b[01]+$/i,i=/^0o[0-7]+$/i,r=parseInt,a="object"==typeof e&&e&&e.Object===Object&&e,u="object"==typeof self&&self&&self.Object===Object&&self,f=a||u||Function("return this")(),c=Object.prototype.toString,l=Math.max,s=Math.min,v=function(){return f.Date.now()};function d(e,t,n){var o,i,r,a,u,f,c=0,d=!1,b=!1,y=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function g(t){var n=o,r=i;return o=i=void 0,c=t,a=e.apply(r,n)}function j(e){return c=e,u=setTimeout(O,t),d?g(e):a}function S(e){var n=e-f;return void 0===f||n>=t||n<0||b&&e-c>=r}function O(){var e=v();if(S(e))return h(e);u=setTimeout(O,function(e){var n=t-(e-f);return b?s(n,r-(e-c)):n}(e))}function h(e){return u=void 0,y&&o?g(e):(o=i=void 0,a)}function T(){var e=v(),n=S(e);if(o=arguments,i=this,f=e,n){if(void 0===u)return j(f);if(b)return u=setTimeout(O,t),g(f)}return void 0===u&&(u=setTimeout(O,t)),a}return t=p(t)||0,m(n)&&(d=!!n.leading,r=(b="maxWait"in n)?l(p(n.maxWait)||0,t):r,y="trailing"in n?!!n.trailing:y),T.cancel=function(){void 0!==u&&clearTimeout(u),c=0,o=f=i=u=void 0},T.flush=function(){return void 0===u?a:h(v())},T}function m(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function p(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==c.call(e)}(e))return NaN;if(m(e)){var a="function"==typeof e.valueOf?e.valueOf():e;e=m(a)?a+"":a}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(t,"");var u=o.test(e);return u||i.test(e)?r(e.slice(2),u?2:8):n.test(e)?NaN:+e}const b=document.querySelector(".feedback-form"),y=b.querySelector('input[name="email"]'),g=b.querySelector('textarea[name="message"]');function j(){const e={email:y.value,message:g.value};localStorage.setItem("feedback-form-state",JSON.stringify(e))}y.addEventListener("input",j),g.addEventListener("input",j),function(){const e=JSON.parse(localStorage.getItem("feedback-form-state"));e&&(y.value=e.email,g.value=e.message)}(),b.addEventListener("submit",(e=>{e.preventDefault();const t={email:y.value,message:g.value};y.value="",g.value="",console.log(t),localStorage.removeItem("feedback-form-state")}));
//# sourceMappingURL=03-feedback.2793a87c.js.map
