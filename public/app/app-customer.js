(()=>{"use strict";var t=function(){return(0,this._self._c)("router-view")};function a(t,a,e,o,s,r,i,n){var l,m="function"==typeof t?t.options:t;if(a&&(m.render=a,m.staticRenderFns=e,m._compiled=!0),o&&(m.functional=!0),r&&(m._scopeId="data-v-"+r),i?(l=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),s&&s.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(i)},m._ssrRegister=l):s&&(l=n?function(){s.call(this,(m.functional?this.parent:this).$root.$options.shadowRoot)}:s),l)if(m.functional){m._injectStyles=l;var c=m.render;m.render=function(t,a){return l.call(a),c(t,a)}}else{var u=m.beforeCreate;m.beforeCreate=u?[].concat(u,l):[l]}return{exports:t,options:m}}t._withStripped=!0;const e=a({data:()=>({x:""}),methods:{},beforeMount(){}},t,[],!1,null,null,null).exports;var o=function(){var t=this,a=t._self._c;return a("div",[a("div",{staticClass:"card"},[a("div",{staticClass:"container"}),t._v(" "),a("div",{staticClass:"card-header bg-info"},[a("div",{staticClass:"d-flex justify-content-between"},[a("strong",{staticClass:"mb-0"},[t._v("Customer")]),t._v(" "),a("div",[a("button",{staticClass:"btn btn-sm btn-info ml-2",on:{click:t.kirim}},[a("i",{staticClass:"fa fa-plus"})])])])]),t._v(" "),a("div",{staticClass:"card-body"},[a("div",{staticClass:"d-flex"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.search,expression:"search"}],staticClass:"form-control form-control-sm mb-2",attrs:{type:"text",placeholder:"Search ..."},domProps:{value:t.search},on:{input:function(a){a.target.composing||(t.search=a.target.value)}}}),t._v(" "),a("button",{staticClass:"btn btn-sm btn-info ml-2",on:{click:t.kirim}},[a("i",{staticClass:"fa fa-plus"})])]),t._v(" "),a("b-table",{staticStyle:{cursor:"pointer"},attrs:{fields:t.columns,items:t.paginatedData,hover:"",filter:t.search},on:{"row-clicked":t.openDetail}}),t._v(" "),a("b-pagination",{staticClass:"mt-5",attrs:{"total-rows":t.data.length,"per-page":t.perPage,align:"center"},model:{value:t.currentPage,callback:function(a){t.currentPage=a},expression:"currentPage"}})],1)])])};o._withStripped=!0;const s=a({data:()=>({data:[],search:"",currentPage:1,perPage:3,columns:[{key:"no",label:"No"},{key:"nama",label:"Nama Customer"},{key:"alamat",label:"Alamat"},{key:"no_tlp",label:"No Telepon"},{key:"jenis_cst",label:"Jenis Customer"},{key:"active",label:"Active"}]}),computed:{totalPages(){return Math.ceil(this.data.length/this.perPage)},paginatedData(){const t=(this.currentPage-1)*this.perPage,a=t+this.perPage;return this.data.slice(t,a)}},methods:{getList(){axios.get("/api/customer/list").then((t=>{this.data=t.data.data})).catch((t=>{}))},openDetail(t){this.$router.push(`/${t.id}`)},kirim(){axios.post("/api/customer/post").then((t=>{this.getList()})).catch((t=>{}))}},mounted(){this.getList()}},o,[],!1,null,null,null).exports;var r=function(){var t=this,a=t._self._c;return a("div",{staticClass:"container-fluid"},[a("h1",[t._v("Detail dan update Customer")]),t._v(" "),a("div",{staticClass:"card"},[a("div",{staticClass:"card-body"},[a("form",{staticClass:"mt-3 mb-4",on:{submit:t.submitForm}},[a("div",{staticClass:"form-group mt-3"},[a("label",[t._v("Nama")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.Data1,expression:"formData.Data1"}],staticClass:"form-control col-md-8",attrs:{type:"text"},domProps:{value:t.formData.Data1},on:{input:function(a){a.target.composing||t.$set(t.formData,"Data1",a.target.value)}}})]),t._v(" "),a("div",{staticClass:"form-group mt-3"},[a("label",[t._v("Nomer Telepon")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.Data2,expression:"formData.Data2"}],staticClass:"form-control col-md-8",attrs:{type:"number"},domProps:{value:t.formData.Data2},on:{input:function(a){a.target.composing||t.$set(t.formData,"Data2",a.target.value)}}})]),t._v(" "),a("div",{staticClass:"form-group mt-3"},[a("label",[t._v("Penanggung Jawab")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.Data3,expression:"formData.Data3"}],staticClass:"form-control col-md-8",attrs:{type:"text"},domProps:{value:t.formData.Data3},on:{input:function(a){a.target.composing||t.$set(t.formData,"Data3",a.target.value)}}})]),t._v(" "),a("div",{staticClass:"form-group mt-3"},[a("label",[t._v("Nomer Telepon")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.Data4,expression:"formData.Data4"}],staticClass:"form-control col-md-8",attrs:{type:"number"},domProps:{value:t.formData.Data4},on:{input:function(a){a.target.composing||t.$set(t.formData,"Data4",a.target.value)}}})]),t._v(" "),a("div",{staticClass:"form-group mt-3"},[a("label",{staticClass:"col-md-4 h6"},[t._v("Jenis Customer")]),t._v(" "),a("select",{directives:[{name:"model",rawName:"v-model",value:t.formData.Data5,expression:"formData.Data5"}],staticClass:"form-control",on:{change:function(a){var e=Array.prototype.filter.call(a.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.formData,"Data5",a.target.multiple?e:e[0])}}},[a("option",{attrs:{value:"",disabled:"",selected:""}},[t._v("pilih Jenis...")]),t._v(" "),a("option",{attrs:{value:"perorang"}},[t._v("PerOrangan")]),t._v(" "),a("option",{attrs:{value:"perusahaan"}},[t._v("Perusahaan")])])]),t._v(" "),a("div",{staticClass:"form-group mt-3"},[a("label",{staticClass:"form-label",attrs:{for:"exampleFormControlTextarea1"}},[t._v("Alamat")]),t._v(" "),a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.formData.Data6,expression:"formData.Data6"}],staticClass:"form-control",attrs:{id:"exampleFormControlTextarea1",rows:"3"},domProps:{value:t.formData.Data6},on:{input:function(a){a.target.composing||t.$set(t.formData,"Data6",a.target.value)}}})]),t._v(" "),a("div",{staticClass:"form-group mt-3"},[a("label",{staticClass:"col-md-4 h6"},[t._v("Active")]),t._v(" "),a("select",{directives:[{name:"model",rawName:"v-model",value:t.formData.Data7,expression:"formData.Data7"}],staticClass:"form-control",on:{change:function(a){var e=Array.prototype.filter.call(a.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.formData,"Data7",a.target.multiple?e:e[0])}}},[a("option",{attrs:{value:"",selected:""}},[t._v("pilih Tipe...")]),t._v(" "),a("option",{attrs:{value:"0"}},[t._v("Non Active")]),t._v(" "),a("option",{attrs:{value:"1"}},[t._v("Active")])])]),t._v(" "),t._m(0)])])])])};r._withStripped=!0;const i=a({data:()=>({content:[],formData:{}}),computed:{x(){return this.$route.params.id}},methods:{submitForm(t){t.preventDefault(),axios.post(`/api/customer/edit/${this.x}`,this.formData).then((t=>{this.$router.push("/")})).catch((t=>{}))},getList(){axios.get(`/api/customer/detail/${this.x}`).then((t=>{this.content=t.data.data,this.formData={Data1:this.content[0].nama,Data2:this.content[0].no_tlp,Data3:this.content[0].penagnggung_jawab,Data4:this.content[0].no_tlp_pj,Data5:this.content[0].jenis_cst,Data6:this.content[0].alamat,Data7:this.content[0].active}})).catch((t=>{}))}},mounted(){this.getList()}},r,[function(){var t=this._self._c;return t("div",{staticClass:"card-footer mt-3"},[t("input",{staticClass:"btn btn-primary",attrs:{type:"submit",value:"Submit"}})])}],!1,null,null,null).exports;var n=function(){var t=this,a=t._self._c;return a("div",{staticClass:"container-fluid"},[a("h1",[t._v("Tambah Customer")]),t._v(" "),a("div",{staticClass:"card"},[a("div",{staticClass:"card-body"},[a("form",{staticClass:"mt-3 mb-4",on:{submit:t.submitForm}},[a("div",{staticClass:"form-group mt-3"},[a("label",[t._v("Nama")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.Data1,expression:"formData.Data1"}],staticClass:"form-control col-md-8",attrs:{type:"text"},domProps:{value:t.formData.Data1},on:{input:function(a){a.target.composing||t.$set(t.formData,"Data1",a.target.value)}}})]),t._v(" "),a("div",{staticClass:"form-group mt-3"},[a("label",[t._v("Nomer Telepon")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.Data3,expression:"formData.Data3"}],staticClass:"form-control col-md-8",attrs:{type:"text"},domProps:{value:t.formData.Data3},on:{input:function(a){a.target.composing||t.$set(t.formData,"Data3",a.target.value)}}})]),t._v(" "),a("div",{staticClass:"form-group mt-3"},[a("label",{staticClass:"col-md-4 h6"},[t._v("Area")]),t._v(" "),a("select",{directives:[{name:"model",rawName:"v-model",value:t.formData.Data5,expression:"formData.Data5"}],staticClass:"form-control",on:{change:function(a){var e=Array.prototype.filter.call(a.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.formData,"Data5",a.target.multiple?e:e[0])}}},[a("option",{attrs:{value:"",disabled:"",selected:""}},[t._v("pilih area...")]),t._v(" "),t._l(t.area,(function(e,o){return a("option",{key:o,domProps:{value:e.id}},[t._v(t._s(e.label)+" || "+t._s(e.area))])}))],2)]),t._v(" "),a("div",{staticClass:"form-group mt-3"},[a("label",{staticClass:"form-label",attrs:{for:"exampleFormControlTextarea1"}},[t._v("Alamat")]),t._v(" "),a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.formData.Data2,expression:"formData.Data2"}],staticClass:"form-control",attrs:{id:"exampleFormControlTextarea1",rows:"3"},domProps:{value:t.formData.Data2},on:{input:function(a){a.target.composing||t.$set(t.formData,"Data2",a.target.value)}}})]),t._v(" "),t._m(0)])])])])};n._withStripped=!0;const l=a({data:()=>({content:[],area:[],formData:{}}),computed:{x(){return this.$route.params.id}},methods:{submitForm(t){t.preventDefault(),axios.post("/api/customer/kirim",this.formData).then((t=>{this.$router.push("/")})).catch((t=>{}))},getList(){axios.get(`/api/customer/detail/${this.x}`).then((t=>{this.area=t.data.area})).catch((t=>{}))}},mounted(){this.getList()}},n,[function(){var t=this._self._c;return t("div",{staticClass:"card-footer mt-3"},[t("input",{staticClass:"btn btn-primary",attrs:{type:"submit",value:"Submit"}})])}],!1,null,null,null).exports,m=new VueRouter({mode:"hash",base:"/",routes:[{path:"/",name:"List",component:s},{path:"/:id",name:"Detail",component:i},{path:"/customer/post",name:"Buat customer",component:l}]});new Vue({el:"#app",router:m,render:function(t){return t(e)}})})();