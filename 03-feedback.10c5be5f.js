var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t=/^\s+|\s+$/g,n=/^[-+]0x[0-9a-f]+$/i,o=/^0b[01]+$/i,r=/^0o[0-7]+$/i,a=parseInt,i="object"==typeof e&&e&&e.Object===Object&&e,u="object"==typeof self&&self&&self.Object===Object&&self,f=i||u||Function("return this")(),l=Object.prototype.toString,c=Math.max,s=Math.min,m=function(){return f.Date.now()};function d(e,t,n){var o,r,a,i,u,f,l=0,d=!1,p=!1,y=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function b(t){var n=o,a=r;return o=r=void 0,l=t,i=e.apply(a,n)}function S(e){return l=e,u=setTimeout(O,t),d?b(e):i}function j(e){var n=e-f;return void 0===f||n>=t||n<0||p&&e-l>=a}function O(){var e=m();if(j(e))return T(e);u=setTimeout(O,function(e){var n=t-(e-f);return p?s(n,a-(e-l)):n}(e))}function T(e){return u=void 0,y&&o?b(e):(o=r=void 0,i)}function h(){var e=m(),n=j(e);if(o=arguments,r=this,f=e,n){if(void 0===u)return S(f);if(p)return u=setTimeout(O,t),b(f)}return void 0===u&&(u=setTimeout(O,t)),i}return t=g(t)||0,v(n)&&(d=!!n.leading,a=(p="maxWait"in n)?c(g(n.maxWait)||0,t):a,y="trailing"in n?!!n.trailing:y),h.cancel=function(){void 0!==u&&clearTimeout(u),l=0,o=f=r=u=void 0},h.flush=function(){return void 0===u?i:T(m())},h}function v(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function g(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==l.call(e)}(e))return NaN;if(v(e)){var i="function"==typeof e.valueOf?e.valueOf():e;e=v(i)?i+"":i}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(t,"");var u=o.test(e);return u||r.test(e)?a(e.slice(2),u?2:8):n.test(e)?NaN:+e}const p={form:document.querySelector(".feedback-form"),email:document.querySelector('[name="email"]'),message:document.querySelector('[name="message"]'),submit:document.querySelector('[type="submit"]')};let y=JSON.parse(localStorage.getItem("feedback-form-state"));y&&(p.email.value=y.email,p.message.value=y.message),p.form.addEventListener("input",(function(e){const t=e.currentTarget.elements,n={email:t.email.value,message:t.message.value};localStorage.setItem("feedback-form-state",JSON.stringify(n))})),p.form.addEventListener("submit",(function(e){e.preventDefault(),""===p.email.value?alert("Email empty!!!"):""===p.message.value?alert("Message empty!!!"):(console.log(JSON.parse(localStorage.getItem("feedback-form-state"))),localStorage.clear(),p.email.value="",p.message.value="")}));
//# sourceMappingURL=03-feedback.10c5be5f.js.map
