(()=>{var t={705:t=>{"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var r="",n=void 0!==e[5];return e[4]&&(r+="@supports (".concat(e[4],") {")),e[2]&&(r+="@media ".concat(e[2]," {")),n&&(r+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),r+=t(e),n&&(r+="}"),e[2]&&(r+="}"),e[4]&&(r+="}"),r})).join("")},e.i=function(t,r,n,o,a){"string"==typeof t&&(t=[[null,t,void 0]]);var s={};if(n)for(var d=0;d<this.length;d++){var i=this[d][0];null!=i&&(s[i]=!0)}for(var c=0;c<t.length;c++){var l=[].concat(t[c]);n&&s[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),r&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=r):l[2]=r),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),e.push(l))}},e}},738:t=>{"use strict";t.exports=function(t){return t[1]}},66:(t,e,r)=>{"use strict";r.r(e),r.d(e,{default:()=>d});var n=r(738),o=r.n(n),a=r(705),s=r.n(a)()(o());s.push([t.id,".card{border:1px solid #ddd;border-radius:5px;box-shadow:0 2px 4px rgba(0,0,0,.1);padding:15px;background-color:#fff}.card-header{background-color:#f2f2f2;padding:10px;border-bottom:1px solid #ddd;text-align:center}.table{width:100%;border-collapse:collapse}th{padding:8px;text-align:left;border-bottom:1px solid #ddd}td{padding:8px;border-bottom:1px solid #ddd}.btn-primary{background-color:#007bff;color:#fff;padding:8px 16px;border-radius:4px;text-decoration:none}.btn-primary:hover{background-color:#0056b3}",""]);const d=s},158:(t,e,r)=>{var n=r(66);n.__esModule&&(n=n.default),"string"==typeof n&&(n=[[t.id,n,""]]),n.locals&&(t.exports=n.locals),(0,r(23).Z)("35de8f9c",n,!1,{})},23:(t,e,r)=>{"use strict";function n(t,e){for(var r=[],n={},o=0;o<e.length;o++){var a=e[o],s=a[0],d={id:t+":"+o,css:a[1],media:a[2],sourceMap:a[3]};n[s]?n[s].parts.push(d):r.push(n[s]={id:s,parts:[d]})}return r}r.d(e,{Z:()=>f});var o="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!o)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var a={},s=o&&(document.head||document.getElementsByTagName("head")[0]),d=null,i=0,c=!1,l=function(){},v=null,u="data-vue-ssr-id",p="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function f(t,e,r,o){c=r,v=o||{};var s=n(t,e);return _(s),function(e){for(var r=[],o=0;o<s.length;o++){var d=s[o];(i=a[d.id]).refs--,r.push(i)}for(e?_(s=n(t,e)):s=[],o=0;o<r.length;o++){var i;if(0===(i=r[o]).refs){for(var c=0;c<i.parts.length;c++)i.parts[c]();delete a[i.id]}}}}function _(t){for(var e=0;e<t.length;e++){var r=t[e],n=a[r.id];if(n){n.refs++;for(var o=0;o<n.parts.length;o++)n.parts[o](r.parts[o]);for(;o<r.parts.length;o++)n.parts.push(b(r.parts[o]));n.parts.length>r.parts.length&&(n.parts.length=r.parts.length)}else{var s=[];for(o=0;o<r.parts.length;o++)s.push(b(r.parts[o]));a[r.id]={id:r.id,refs:1,parts:s}}}}function h(){var t=document.createElement("style");return t.type="text/css",s.appendChild(t),t}function b(t){var e,r,n=document.querySelector("style["+u+'~="'+t.id+'"]');if(n){if(c)return l;n.parentNode.removeChild(n)}if(p){var o=i++;n=d||(d=h()),e=y.bind(null,n,o,!1),r=y.bind(null,n,o,!0)}else n=h(),e=x.bind(null,n),r=function(){n.parentNode.removeChild(n)};return e(t),function(n){if(n){if(n.css===t.css&&n.media===t.media&&n.sourceMap===t.sourceMap)return;e(t=n)}else r()}}var g,m=(g=[],function(t,e){return g[t]=e,g.filter(Boolean).join("\n")});function y(t,e,r,n){var o=r?"":n.css;if(t.styleSheet)t.styleSheet.cssText=m(e,o);else{var a=document.createTextNode(o),s=t.childNodes;s[e]&&t.removeChild(s[e]),s.length?t.insertBefore(a,s[e]):t.appendChild(a)}}function x(t,e){var r=e.css,n=e.media,o=e.sourceMap;if(n&&t.setAttribute("media",n),v.ssrId&&t.setAttribute(u,e.id),o&&(r+="\n/*# sourceURL="+o.sources[0]+" */",r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */"),t.styleSheet)t.styleSheet.cssText=r;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(r))}}}},e={};function r(n){var o=e[n];if(void 0!==o)return o.exports;var a=e[n]={id:n,exports:{}};return t[n](a,a.exports,r),a.exports}r.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return r.d(e,{a:e}),e},r.d=(t,e)=>{for(var n in e)r.o(e,n)&&!r.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},r.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),r.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},(()=>{"use strict";var t=function(){return this._self._c,this._m(0)};t._withStripped=!0;r(158);var e=function(t,e,r,n,o,a,s,d){var i,c="function"==typeof t?t.options:t;if(e&&(c.render=e,c.staticRenderFns=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"card mx-4 my-4"},[e("div",{staticClass:"card-header"},[e("h3",{staticClass:"text-bold"},[t._v("Detail Siswa")])]),t._v(" "),e("table",{staticClass:"table table-sm"},[e("tbody",[e("tr",[e("th",{attrs:{scope:"row"}},[t._v("NIS")]),t._v(" "),e("td",[t._v(":")]),t._v(" "),e("td",[t._v("2006201")])]),t._v(" "),e("tr",[e("th",{attrs:{scope:"row"}},[t._v("NAMA")]),t._v(" "),e("td",[t._v(":")]),t._v(" "),e("td",[t._v("Muhamad Iqbal Adi Saputra")])]),t._v(" "),e("tr",[e("th",{attrs:{scope:"row"}},[t._v("KELAS")]),t._v(" "),e("td",[t._v(":")]),t._v(" "),e("td",[t._v("XII RPL")])]),t._v(" "),e("tr",[e("th",{attrs:{scope:"row"}},[t._v("Tahun Masuk")]),t._v(" "),e("td",[t._v(":")]),t._v(" "),e("td",[t._v("2021")])]),t._v(" "),e("tr",[e("th",{attrs:{scope:"row"}},[t._v("Tempat Lahir")]),t._v(" "),e("td",[t._v(":")]),t._v(" "),e("td",[t._v("Bandung")])]),t._v(" "),e("tr",[e("th",{attrs:{scope:"row"}},[t._v("Tanggal Lahir")]),t._v(" "),e("td",[t._v(":")]),t._v(" "),e("td",[t._v("05 Juni 2006")])]),t._v(" "),e("tr",[e("th",{attrs:{scope:"row"}},[t._v("ALAMAT")]),t._v(" "),e("td",[t._v(":")]),t._v(" "),e("td",[t._v("Jln. Babakan Baru")])]),t._v(" "),e("tr",[e("th",{attrs:{scope:"row"}},[t._v("NO TELEPON")]),t._v(" "),e("td",[t._v(":")]),t._v(" "),e("td",[t._v("089739281928")])]),t._v(" "),e("tr",[e("th",{attrs:{scope:"row"}},[t._v("STATUS")]),t._v(" "),e("td",[t._v(":")]),t._v(" "),e("td",[t._v("Aktif")])])])]),t._v(" "),e("div",{staticClass:"my-4"},[e("a",{staticClass:"btn btn-primary",attrs:{href:"/murid"}},[t._v("Keluar")])])])}],c._compiled=!0),i)if(c.functional){c._injectStyles=i;var l=c.render;c.render=function(t,e){return i.call(e),l(t,e)}}else{var v=c.beforeCreate;c.beforeCreate=v?[].concat(v,i):[i]}return{exports:t,options:c}}({},t);const n=e.exports;new Vue({el:"#app",render:function(t){return t(n)}})})()})();