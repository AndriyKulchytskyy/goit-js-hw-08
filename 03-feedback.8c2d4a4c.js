!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function t(e){return e&&e.__esModule?e.default:e}var n={};Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var o="Expected a function",r=/^\s+|\s+$/g,i=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,a=/^0o[0-7]+$/i,f=parseInt,l="object"==typeof e&&e&&e.Object===Object&&e,c="object"==typeof self&&self&&self.Object===Object&&self,s=l||c||Function("return this")(),m=Object.prototype.toString,d=Math.max,v=Math.min,b=function(){return s.Date.now()};function g(e,t,n){var r,i,u,a,f,l,c=0,s=!1,m=!1,g=!0;if("function"!=typeof e)throw new TypeError(o);function S(t){var n=r,o=i;return r=i=void 0,c=t,a=e.apply(o,n)}function j(e){return c=e,f=setTimeout(T,t),s?S(e):a}function O(e){var n=e-l;return void 0===l||n>=t||n<0||m&&e-c>=u}function T(){var e=b();if(O(e))return h(e);f=setTimeout(T,function(e){var n=t-(e-l);return m?v(n,u-(e-c)):n}(e))}function h(e){return f=void 0,g&&r?S(e):(r=i=void 0,a)}function w(){var e=b(),n=O(e);if(r=arguments,i=this,l=e,n){if(void 0===f)return j(l);if(m)return f=setTimeout(T,t),S(l)}return void 0===f&&(f=setTimeout(T,t)),a}return t=y(t)||0,p(n)&&(s=!!n.leading,u=(m="maxWait"in n)?d(y(n.maxWait)||0,t):u,g="trailing"in n?!!n.trailing:g),w.cancel=function(){void 0!==f&&clearTimeout(f),c=0,r=l=i=f=void 0},w.flush=function(){return void 0===f?a:h(b())},w}function p(e){var o=void 0===e?"undefined":t(n)(e);return!!e&&("object"==o||"function"==o)}function y(e){if("number"==typeof e)return e;if(function(e){return"symbol"==(void 0===e?"undefined":t(n)(e))||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==m.call(e)}(e))return NaN;if(p(e)){var o="function"==typeof e.valueOf?e.valueOf():e;e=p(o)?o+"":o}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(r,"");var l=u.test(e);return l||a.test(e)?f(e.slice(2),l?2:8):i.test(e)?NaN:+e}var S="feedback-form-state",j={form:document.querySelector(".feedback-form"),email:document.querySelector('[name="email"]'),message:document.querySelector('[name="message"]'),submit:document.querySelector('[type="submit"]')},O=JSON.parse(localStorage.getItem(S));O&&(j.email.value=O.email,j.message.value=O.message),j.form.addEventListener("input",(function(e){var t=e.currentTarget.elements,n={email:t.email.value,message:t.message.value};localStorage.setItem(S,JSON.stringify(n))})),j.form.addEventListener("submit",(function(e){e.preventDefault(),console.log(JSON.parse(localStorage.getItem(S))),localStorage.clear(),j.email.value="",j.message.value=""}))}();
//# sourceMappingURL=03-feedback.8c2d4a4c.js.map
