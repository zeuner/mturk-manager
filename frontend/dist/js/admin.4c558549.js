(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["admin"],{"1ad5":function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("base-table",{attrs:{"name-vuex-module":"moduleMessages","name-state-pagination":e.nameStatePagination,"name-local-storage-pagination":e.nameLocalStoragePagination,"function-load-page":e.loadPage,"array-items":e.arrayItems,"name-state-columns":"arrayColumns","name-state-columns-selected":e.nameStateColumnsSelected,"is-condensed":!0},scopedSlots:e._u([{key:"default",fn:function(e){var t=e.props,n=e.array_columns_selected,r=e.isCondensed,s=e.refresh;return[a("item-messages-reject",{attrs:{props:t,"array-columns-selected":n,"is-condensed":r},on:{delete:function(e){return s()}}})]}},{key:"actions",fn:function(e){var t=e.refresh;return[a("item-add-message",{on:{create:function(e){return t()}}})]}}])})},r=[],s=a("cebc"),o=a("2f62"),i=a("48be"),l=a("2696"),u=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("tr",{key:this.props.item.id,staticClass:"text-no-wrap"},[a("base-table-cell",{staticClass:"text-xs-left",attrs:{name:"message",item:this.props.item,"columns-selected":e.columnsSelected,"is-condensed":e.isCondensed},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.item;return[e._v("\n    "+e._s(a.message)+"\n  ")]}}])}),a("base-table-cell",{staticClass:"text-xs-right",attrs:{name:"count_usage",item:this.props.item,"columns-selected":e.columnsSelected,"is-condensed":e.isCondensed},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.item;return[e._v("\n    "+e._s(a.count_usage)+"\n  ")]}}])}),a("base-table-cell",{staticClass:"text-xs-right",attrs:{name:"actions",item:this.props.item,"columns-selected":e.columnsSelected,"is-condensed":e.isCondensed},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.item;return[a("message-make-default",{attrs:{item:n}}),a("base-delete-message",{attrs:{item:n},on:{delete:function(t){return e.$emit("delete")}}})]}}])})],1)},c=[],d=a("97c2"),m=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-dialog",{attrs:{"max-width":"500",lazy:""},model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[a("v-btn",{staticClass:"my-0",attrs:{slot:"activator",icon:"",small:""},slot:"activator"},[a("v-icon",{attrs:{color:"error"}},[e._v("delete")])],1),a("v-card",[a("v-card-text",[e._v("\n      Do you really want to delete the message '"+e._s(e.item.message)+"'?\n    ")]),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{flat:"",color:"error"},on:{click:function(t){return e.remove()}}},[e._v("Delete")])],1)],1)],1)},g=[],p=(a("96cf"),a("3b8d")),f={name:"BaseDeleteMessage",props:{item:{required:!0,type:Object}},data:function(){return{dialog:!1}},methods:{remove:function(){var e=Object(p["a"])(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,l["a"].delete({idMessage:this.item.id});case 2:this.$emit("delete"),this.dialog=!1;case 4:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}()}},v=f,h=a("2877"),_=a("6544"),b=a.n(_),x=a("8336"),j=a("b0af"),y=a("99d9"),w=a("169a"),S=a("132d"),R=a("9910"),k=Object(h["a"])(v,m,g,!1,null,null,null),P=k.exports;b()(k,{VBtn:x["a"],VCard:j["a"],VCardActions:y["a"],VCardText:y["b"],VDialog:w["a"],VIcon:S["a"],VSpacer:R["a"]});var M=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-hover",{scopedSlots:e._u([{key:"default",fn:function(t){var n=t.hover;return a("v-btn",{staticClass:"my-0",attrs:{small:"",icon:"",loading:e.loading},on:{click:e.setDefault}},[a("v-icon",{attrs:{color:e.isDefault?"warning":"white"}},[e._v("\n      "+e._s(n||e.isDefault?"star":"star_border")+"\n    ")])],1)}}])})},C=[],O=a("50ce"),A={name:"MessageMakeDefault",props:{item:{required:!0,type:Object}},data:function(){return{loading:!1}},computed:{isDefault:function(){var e=this.$store.getters["moduleProjects/get_project_current"];return null!==e.message_reject_default&&void 0!==e.message_reject_default&&e.message_reject_default.id===this.item.id}},methods:{setDefault:function(){var e=Object(p["a"])(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return this.loading=!0,e.next=3,O["a"].setMessageRejectDefault({message:this.isDefault?null:this.item});case 3:this.loading=!1;case 4:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}()}},V=A,I=a("163b"),D=a("98a1"),$=a("58df"),q=a("d9bd"),L=Object($["a"])(I["a"],D["a"]).extend({name:"v-hover",props:{disabled:{type:Boolean,default:!1},value:{type:Boolean,default:void 0}},methods:{onMouseEnter:function(){this.runDelay("open")},onMouseLeave:function(){this.runDelay("close")}},render:function(){if(!this.$scopedSlots.default&&void 0===this.value)return Object(q["c"])("v-hover is missing a default scopedSlot or bound value",this),null;var e=void 0;return this.$scopedSlots.default?e=this.$scopedSlots.default({hover:this.isActive}):this.$slots.default&&1===this.$slots.default.length&&(e=this.$slots.default[0]),Array.isArray(e)&&1===e.length&&(e=e[0]),e&&!Array.isArray(e)&&e.tag?(this.disabled||(e.data=e.data||{},this._g(e.data,{mouseenter:this.onMouseEnter,mouseleave:this.onMouseLeave})),e):(Object(q["c"])("v-hover should only contain a single element",this),e)}}),z=Object(h["a"])(V,M,C,!1,null,null,null),B=z.exports;b()(z,{VBtn:x["a"],VHover:L,VIcon:S["a"]});var E={name:"ItemMessagesReject",components:{MessageMakeDefault:B,BaseDeleteMessage:P,BaseTableCell:d["a"]},props:{props:{required:!0},arrayColumnsSelected:{type:Array,required:!0},isCondensed:{required:!0,type:Boolean}},computed:{columnsSelected:function(){return this.arrayColumnsSelected.reduce(function(e,t){return e[t]=t,e},{})}}},T=E,H=Object(h["a"])(T,u,c,!1,null,null,null),F=H.exports,J=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-dialog",{model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[a("v-btn",{attrs:{slot:"activator",color:"primary",small:""},slot:"activator"},[a("v-icon",[e._v("add")]),e._v(" Add Message\n  ")],1),a("v-card",[a("v-card-title",[a("span",{staticClass:"headline"},[e._v("\n        Add Reject Message\n      ")]),a("v-spacer"),a("v-btn",{attrs:{icon:""},on:{click:function(t){e.dialog=!1}}},[a("v-icon",[e._v("close")])],1)],1),a("v-card-text",[a("v-combobox",{attrs:{items:e.items,loading:e.isLoading,"search-input":e.search,label:"Message",autofocus:"",dense:"","item-text":"message","item-value":"message_lowercase","no-filter":""},on:{"update:searchInput":function(t){e.search=t},"update:search-input":function(t){e.search=t},input:function(t){return e.input(t)}},model:{value:e.model,callback:function(t){e.model=t},expression:"model"}})],1)],1)],1)},G=[],K={name:"ItemAddMessage",data:function(){return{dialog:!1,model:"",items:[],search:"",isLoading:!1}},watch:{search:function(){var e=Object(p["a"])(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(this.isLoading=!0,t===this.model){e.next=5;break}return e.next=4,l["a"].loadAll({search:t});case 4:this.items=e.sent;case 5:this.isLoading=!1;case 6:case"end":return e.stop()}},e,this)}));function t(t){return e.apply(this,arguments)}return t}()},methods:{input:function(){var e=Object(p["a"])(regeneratorRuntime.mark(function e(t){var a;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(null!==t&&""!==t){e.next=2;break}return e.abrupt("return");case 2:return a={},"string"===typeof t?a.message=t:a.id=t.id,e.next=6,l["a"].save({message:a});case 6:this.$emit("create"),this.model="",this.dialog=!1;case 9:case"end":return e.stop()}},e,this)}));function t(t){return e.apply(this,arguments)}return t}()}},N=K,Q=a("12b2"),U=a("2b5d"),W=Object(h["a"])(N,J,G,!1,null,null,null),X=W.exports;b()(W,{VBtn:x["a"],VCard:j["a"],VCardText:y["b"],VCardTitle:Q["a"],VCombobox:U["a"],VDialog:w["a"],VIcon:S["a"],VSpacer:R["a"]});var Y={name:"TableMessagesReject",components:{ItemAddMessage:X,ItemMessagesReject:F,BaseTable:i["a"]},props:{loadPage:{required:!1,type:Function,default:l["a"].loadPageReject},nameStatePagination:{required:!1,type:String,default:"paginationMessagesReject"},nameLocalStoragePagination:{required:!1,type:String,default:"pagination_messages_reject"},nameStateColumnsSelected:{required:!1,type:String,default:"array_columns_selected"}},computed:Object(s["a"])({},Object(o["e"])("moduleMessages",{arrayItems:"arrayItemsReject"}))},Z=Y,ee=Object(h["a"])(Z,n,r,!1,null,null,null);t["a"]=ee.exports},2696:function(e,t,a){"use strict";a.d(t,"a",function(){return g});a("386d"),a("96cf");var n=a("3b8d"),r=a("d225"),s=a("b0b4"),o=a("308d"),i=a("6bb5"),l=a("4e2b"),u=a("6449"),c=a("4aba"),d=a("07ba"),m=function(e){function t(){return Object(r["a"])(this,t),Object(o["a"])(this,Object(i["a"])(t).apply(this,arguments))}return Object(l["a"])(t,e),Object(s["a"])(t,[{key:"loadPageReject",value:function(){var e=Object(n["a"])(regeneratorRuntime.mark(function e(a,n){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",t.loadPage({pagination:a,filters:n,url:{path:c["a"].getters.get_url("urlApiProjectsMessagesReject","moduleMessages"),project:c["a"].getters["moduleProjects/get_project_current"]},callback:function(e){c["a"].commit("moduleMessages/setState",{objectState:e.data.data,nameState:"arrayItemsReject"})}}));case 1:case"end":return e.stop()}},e)}));function a(t,a){return e.apply(this,arguments)}return a}()},{key:"loadPageRejectAll",value:function(){var e=Object(n["a"])(regeneratorRuntime.mark(function e(a,n){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",t.loadPage({pagination:a,filters:n,url:{path:c["a"].getters.get_url("urlApiMessagesReject","moduleMessages")},callback:function(e){c["a"].commit("moduleMessages/setState",{objectState:e.data.data,nameState:"arrayItemsReject"})}}));case 1:case"end":return e.stop()}},e)}));function a(t,a){return e.apply(this,arguments)}return a}()},{key:"loadAll",value:function(){var e=Object(n["a"])(regeneratorRuntime.mark(function e(t){var a,n;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return a=t.search,e.next=3,u["a"].make_request({method:"get",url:{path:c["a"].getters.get_url("urlApiMessagesReject","moduleMessages")},params:{search:a,limit:10,sort_by:"count_usage",descending:!0}});case 3:return n=e.sent,e.abrupt("return",n.data.data);case 5:case"end":return e.stop()}},e)}));function t(t){return e.apply(this,arguments)}return t}()},{key:"save",value:function(){var e=Object(n["a"])(regeneratorRuntime.mark(function e(t){var a,n;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return a=t.message,e.next=3,u["a"].make_request({method:"post",url:{path:c["a"].getters.get_url("urlApiProjectsMessagesReject","moduleMessages"),project:c["a"].getters["moduleProjects/get_project_current"]},data:a});case 3:n=e.sent,console.warn("response",n);case 5:case"end":return e.stop()}},e)}));function t(t){return e.apply(this,arguments)}return t}()},{key:"setDefault",value:function(){var e=Object(n["a"])(regeneratorRuntime.mark(function e(t){var a,n;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return a=t.idMessage,e.next=3,u["a"].make_request({method:"put",url:{path:c["a"].getters.get_url("urlApiProjectsMessagesReject","moduleMessages"),project:c["a"].getters["moduleProjects/get_project_current"],value:a}});case 3:n=e.sent,console.warn("response",n);case 5:case"end":return e.stop()}},e)}));function t(t){return e.apply(this,arguments)}return t}()},{key:"delete",value:function(){var e=Object(n["a"])(regeneratorRuntime.mark(function e(t){var a,n;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return a=t.idMessage,e.next=3,u["a"].make_request({method:"delete",url:{path:c["a"].getters.get_url("urlApiProjectsMessagesReject","moduleMessages"),project:c["a"].getters["moduleProjects/get_project_current"],value:a}});case 3:n=e.sent,console.warn("response",n);case 5:case"end":return e.stop()}},e)}));function t(t){return e.apply(this,arguments)}return t}()}]),t}(d["a"]),g=new m},"386d":function(e,t,a){"use strict";var n=a("cb7c"),r=a("83a1"),s=a("5f1b");a("214f")("search",1,function(e,t,a,o){return[function(a){var n=e(this),r=void 0==a?void 0:a[t];return void 0!==r?r.call(a,n):new RegExp(a)[t](String(n))},function(e){var t=o(a,e,this);if(t.done)return t.value;var i=n(e),l=String(this),u=i.lastIndex;r(u,0)||(i.lastIndex=0);var c=s(i,l);return r(i.lastIndex,u)||(i.lastIndex=u),null===c?-1:c.index}]})},"49e4":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-container",{attrs:{"grid-list-md":"",fluid:""}},[a("v-layout",[a("v-flex",{attrs:{xs:""}},[a("h1",{staticClass:"headline"},[e._v("\n        Admin\n      ")])])],1),a("v-layout",[a("v-flex",{attrs:{xs:""}},[a("v-card",{staticClass:"pa-2"},[a("table-messages-reject",{attrs:{"load-page":e.loadPage,"name-state-pagination":"paginationMessagesRejectAdmin","name-local-storage-pagination":"pagination_messages_reject_admin","name-state-columns-selected":"arrayColumnsSelectedAdmin"}})],1)],1),a("v-flex",{attrs:{xs:""}},[a("v-card",{staticClass:"pa-2",attrs:{height:"100%"}},[a("info-size")],1)],1)],1)],1)},r=[],s=a("1ad5"),o=a("2696"),i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-layout",{attrs:{"fill-height":"",column:"","justify-center":""}},[void 0!==e.infoSize?a("v-flex",[a("v-layout",[a("v-flex",{attrs:{xs4:""}}),a("v-flex",{attrs:{xs4:""}},[e._v("Real")]),a("v-flex",{attrs:{xs4:""}},[e._v("Sandbox")])],1),a("v-layout",[a("v-flex",{attrs:{xs4:""}},[e._v("Batches")]),a("v-flex",{attrs:{xs4:""}},[e._v(e._s(e.infoSize[0].toLocaleString()))]),a("v-flex",{attrs:{xs4:""}},[e._v(e._s(e.infoSize[1].toLocaleString()))])],1),a("v-layout",[a("v-flex",{attrs:{xs4:""}},[e._v("HITs")]),a("v-flex",{attrs:{xs4:""}},[e._v(e._s(e.infoSize[2].toLocaleString()))]),a("v-flex",{attrs:{xs4:""}},[e._v(e._s(e.infoSize[3].toLocaleString()))])],1),a("v-layout",[a("v-flex",{attrs:{xs4:""}},[e._v("Assignments")]),a("v-flex",{attrs:{xs4:""}},[e._v(e._s(e.infoSize[4].toLocaleString()))]),a("v-flex",{attrs:{xs4:""}},[e._v(e._s(e.infoSize[5].toLocaleString()))])],1)],1):a("v-flex",{attrs:{shrink:""}},[a("v-layout",{attrs:{"justify-center":""}},[a("v-progress-circular",{attrs:{indeterminate:""}})],1)],1)],1)},l=[],u=(a("ac6a"),a("5df3"),a("96cf"),a("3b8d")),c=a("d225"),d=a("b0b4"),m=a("4aba"),g=a("07ba"),p=function(){function e(){Object(c["a"])(this,e)}return Object(d["a"])(e,[{key:"loadInfoSize",value:function(){var e=Object(u["a"])(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",Promise.all([g["a"].loadPage({pagination:{rowsPerPage:1},url:{path:m["a"].getters.get_url("url_api_batches","moduleBatches"),use_sandbox:!1}}),g["a"].loadPage({pagination:{rowsPerPage:1},url:{path:m["a"].getters.get_url("url_api_batches","moduleBatches"),use_sandbox:!0}}),g["a"].loadPage({pagination:{rowsPerPage:1},url:{path:m["a"].getters.get_url("url_api_hits","moduleHITs"),use_sandbox:!1}}),g["a"].loadPage({pagination:{rowsPerPage:1},url:{path:m["a"].getters.get_url("url_api_hits","moduleHITs"),use_sandbox:!0}}),g["a"].loadPage({pagination:{rowsPerPage:1},url:{path:m["a"].getters.get_url("url_api_assignments","moduleAssignments"),use_sandbox:!1}}),g["a"].loadPage({pagination:{rowsPerPage:1},url:{path:m["a"].getters.get_url("url_api_assignments","moduleAssignments"),use_sandbox:!0}})]));case 1:case"end":return e.stop()}},e)}));function t(){return e.apply(this,arguments)}return t}()}]),e}(),f=new p,v={name:"InfoSize",data:function(){return{infoSize:void 0}},created:function(){var e=this;f.loadInfoSize().then(function(t){e.infoSize=t})}},h=v,_=a("2877"),b=a("6544"),x=a.n(b),j=a("0e8f"),y=a("a722"),w=a("490a"),S=Object(_["a"])(h,i,l,!1,null,null,null),R=S.exports;x()(S,{VFlex:j["a"],VLayout:y["a"],VProgressCircular:w["a"]});var k={name:"AppAdmin",components:{InfoSize:R,TableMessagesReject:s["a"]},data:function(){return{loadPage:o["a"].loadPageRejectAll}},computed:{},methods:{}},P=k,M=a("b0af"),C=a("a523"),O=Object(_["a"])(P,n,r,!1,null,null,null);t["default"]=O.exports;x()(O,{VCard:M["a"],VContainer:C["a"],VFlex:j["a"],VLayout:y["a"]})},"83a1":function(e,t){e.exports=Object.is||function(e,t){return e===t?0!==e||1/e===1/t:e!=e&&t!=t}},"97c2":function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("td",{class:e.classesCell,style:e.stylesCell},[e._t("default",null,{item:e.item})],2)},r=[],s=(a("7f7f"),{name:"BaseTableCell",props:{name:{required:!0,type:String},item:{required:!0,type:Object},columnsSelected:{required:!0,type:Object},isCondensed:{required:!0,type:Boolean}},computed:{classesCell:function(){return{"hidden-sm-and-up":!this.show,"hidden-xs-only":!this.show}},stylesCell:function(){return this.isCondensed?{height:"unset !important",paddingLeft:"5px !important",paddingRight:"5px !important"}:{}},show:function(){return this.columnsSelected.hasOwnProperty(this.name)}}}),o=s,i=a("2877"),l=Object(i["a"])(o,n,r,!1,null,"31e56c01",null);t["a"]=l.exports}}]);
//# sourceMappingURL=admin.4c558549.js.map