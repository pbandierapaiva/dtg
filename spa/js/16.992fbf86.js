(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[16],{b312:function(a,t,e){"use strict";e.r(t);var o=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("q-page",{staticClass:"flex flex-center"},[e("q-form",{staticClass:"q-gutter-md q-pa-xs full-width row flex-center",on:{submit:a.onSubmit,reset:a.onReset}},[e("q-input",{staticClass:"q-pa-xs col-3",attrs:{dense:"",label:"Descrição"},model:{value:a.consultaMac.descricao,callback:function(t){a.$set(a.consultaMac,"descricao",t)},expression:"consultaMac.descricao"}}),e("q-btn",{staticClass:"q-pa-xs q-ma-md col-1",attrs:{label:"Consultar",type:"submit",dense:"",color:"primary"}})],1),e("div",{staticClass:"q-pa-lg",staticStyle:{"padding-bottom":"135%"}},[e("b",[a._v("MAC")]),e("q-btn",{attrs:{id:"btnCadastrarHist",icon:"add",flat:"",dense:"",color:"primary"},on:{click:function(){a.popupCadastro=!0}}}),e("q-table",{attrs:{data:a.dados,columns:a.columns,"row-key":"id",pagination:a.pagination},on:{"update:pagination":function(t){a.pagination=t}},scopedSlots:a._u([{key:"body",fn:function(t){return[e("q-tr",{attrs:{props:t}},[e("q-td",{key:"id",attrs:{props:t}},[a._v("\n            "+a._s(t.row.id)+"\n          ")]),e("q-td",{key:"descricao",attrs:{props:t}},[a._v("\n            "+a._s(t.row.descricao)+"\n          ")]),e("q-td",{key:"excluir",attrs:{props:t}},[e("q-btn",{attrs:{id:"excluir",flat:"",dense:"",icon:"delete"},on:{click:function(e){a.excluirMac(t.row.id)}}})],1)],1)]}}])})],1),e("q-dialog",{staticClass:"full-width",model:{value:a.popupCadastro,callback:function(t){a.popupCadastro=t},expression:"popupCadastro"}},[e("CadastroEdicaoMac")],1)],1)},s=[],c=(e("e6cf"),function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("q-card",[e("q-toolbar",{staticClass:"bg-primary text-white"},[e("q-toolbar-title",[a._v("Adicionar MAC")]),e("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",round:"",dense:"",icon:"close"}})],1),e("q-card-section",{staticClass:"q-pt-none"},[e("q-form",{on:{submit:a.onSubmit,reset:a.onReset}},[e("q-input",{attrs:{type:"text",label:"Descrição",rules:[function(a){return a.length>0||"Digite um método anticoncepcional "},function(a){return a.length<=250||"O método anticoncepcional deve ter no máximo 250 caracteres"}]},model:{value:a.cadastroMac.descricao,callback:function(t){a.$set(a.cadastroMac,"descricao",t)},expression:"cadastroMac.descricao"}}),e("br"),e("div",{staticClass:"flex-center q-gutter-xl"},[e("q-btn",{attrs:{type:"submit",color:"primary",label:"Gravar"}})],1)],1)],1)],1)}),i=[],r={name:"CadastroEdicaoMac",data(){return{cadastroMac:{descricao:""}}},methods:{async onSubmit(){await this.incluirMac()},onReset(){this.cadastroMac.descricao=""},incluirMac(){return new Promise(((a,t)=>{let e=this.cadastroMac;this.$axios.post("/incluir_mac",e).then((t=>{this.$router.go(),a(t.data)})).catch((a=>{this.$store.dispatch("principal/verificaErro",a),t(a)}))}))}}},n=r,l=e("2877"),d=e("f09f"),u=e("65c6"),p=e("6ac5"),m=e("9c40"),b=e("a370"),f=e("0378"),h=e("27f9"),q=e("7f67"),x=e("eebe"),C=e.n(x),g=Object(l["a"])(n,c,i,!1,null,null,null),w=g.exports;C()(g,"components",{QCard:d["a"],QToolbar:u["a"],QToolbarTitle:p["a"],QBtn:m["a"],QCardSection:b["a"],QForm:f["a"],QInput:h["a"]}),C()(g,"directives",{ClosePopup:q["a"]});var M={name:"PageIndex",components:{CadastroEdicaoMac:w},data(){return{popupCadastro:!1,consultaMac:{descricao:""},filter:"",pagination:{rowsPerPage:7},columns:[{name:"id",label:"Id",align:"left",field:a=>a.id,format:a=>`${a}`},{name:"descricao",label:"Descrição",align:"left",field:a=>a.descricao,format:a=>`${a}`},{name:"excluir",label:"Excluir",align:"center"}],dados:[]}},async mounted(){this.onSubmit()},methods:{async onSubmit(){let a=await this.consultarMac(this.consultaMac);this.dados=a.resultado},onReset(){},async consultarMac(a){return new Promise(((t,e)=>{this.$axios.post("/consultar_mac",a).then((a=>{t(a.data)})).catch((a=>{this.$store.dispatch("principal/verificaErro",a),e(a)}))}))},excluirMac(a){return new Promise(((t,e)=>{window.confirm("Gostaria mesmo de excluir MAC?")&&this.$axios.post("/excluir_mac",{id:Number(a)}).then((a=>{this.onSubmit(),t(a.data)})).catch((a=>{this.$store.dispatch("principal/verificaErro",a),e(a)}))}))}}},v=M,y=e("9989"),Q=e("eaac"),_=e("bd08"),$=e("db86"),k=e("24e8"),E=Object(l["a"])(v,o,s,!1,null,null,null);t["default"]=E.exports;C()(E,"components",{QPage:y["a"],QForm:f["a"],QInput:h["a"],QBtn:m["a"],QTable:Q["a"],QTr:_["a"],QTd:$["a"],QDialog:k["a"]})}}]);