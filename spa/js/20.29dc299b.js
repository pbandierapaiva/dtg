(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[20],{cd24:function(a,t,o){"use strict";o.r(t);var e=function(){var a=this,t=a.$createElement,o=a._self._c||t;return o("q-page",{staticClass:"flex flex-center"},[o("q-form",{staticClass:"q-gutter-md q-pa-xs full-width row flex-center",on:{submit:a.onSubmit,reset:a.onReset}},[o("q-input",{staticClass:"q-pa-xs col-3",attrs:{label:"Descrição"},model:{value:a.consultaHistopatologia.descricao,callback:function(t){a.$set(a.consultaHistopatologia,"descricao",t)},expression:"consultaHistopatologia.descricao"}}),o("q-btn",{staticClass:"q-pa-xs q-ma-md col-1",staticStyle:{"margin-top":"2%"},attrs:{label:"Consultar",type:"submit",color:"primary"}})],1),o("div",{staticClass:"q-pa-lg",staticStyle:{"padding-bottom":"10%"}},[o("b",[a._v("Resultado AP")]),o("q-btn",{attrs:{id:"btnCadastrarHist",icon:"add",flat:"",dense:"",color:"primary"},on:{click:function(){a.popupCadastro=!0}}}),o("q-table",{attrs:{data:a.dados,columns:a.columns,"row-key":"name",pagination:a.pagination},on:{"update:pagination":function(t){a.pagination=t}},scopedSlots:a._u([{key:"body",fn:function(t){return[o("q-tr",{attrs:{props:t}},[o("q-td",{key:"id",attrs:{props:t}},[a._v("\n            "+a._s(t.row.id)+"\n          ")]),o("q-td",{key:"descricao",attrs:{props:t}},[a._v("\n            "+a._s(t.row.descricao)+"\n          ")]),o("q-td",{key:"excluir",attrs:{props:t}},[o("q-btn",{attrs:{id:"excluir",flat:"",dense:"",icon:"delete"},on:{click:function(o){a.excluirResultadoAp(t.row.id)}}})],1)],1)]}}])})],1),o("q-dialog",{staticClass:"full-width",model:{value:a.popupCadastro,callback:function(t){a.popupCadastro=t},expression:"popupCadastro"}},[o("CadastroEdicaoResultadoAp")],1)],1)},s=[],i=(o("e6cf"),function(){var a=this,t=a.$createElement,o=a._self._c||t;return o("q-card",[o("q-toolbar",{staticClass:"bg-primary text-white"},[o("q-toolbar-title",[a._v("Adicionar Resultado da Anatomia Patológica")]),o("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",round:"",dense:"",icon:"close"}})],1),o("q-card-section",{staticClass:"q-pt-none"},[o("q-form",{on:{submit:a.onSubmit,reset:a.onReset}},[o("q-input",{attrs:{type:"text",label:"Descrição",rules:[function(a){return a.length>0||"Digite o resultado da análise patológica "},function(a){return a.length<=250||"O resultado da análise patológica deve ter no máximo 250 caracteres"}]},model:{value:a.cadastroResultadoAp.descricao,callback:function(t){a.$set(a.cadastroResultadoAp,"descricao",t)},expression:"cadastroResultadoAp.descricao"}}),o("br"),o("div",{staticClass:"flex-center q-gutter-xl"},[o("q-btn",{attrs:{type:"submit",color:"primary",label:"Gravar"}})],1)],1)],1)],1)}),r=[],l={name:"CadastroResultadoAp",data(){return{cadastroResultadoAp:{descricao:""}}},methods:{async onSubmit(){await this.incluirResultadoAp()},onReset(){this.cadastroResultadoAp.descricao=""},incluirResultadoAp(){return new Promise(((a,t)=>{let o=this.cadastroResultadoAp;this.$axios.post("/incluir_resultado_ap",o).then((t=>{this.$router.go(),a(t.data)})).catch((a=>{this.$store.dispatch("principal/verificaErro",a),t(a)}))}))}}},n=l,c=o("2877"),d=o("f09f"),u=o("65c6"),p=o("6ac5"),m=o("9c40"),b=o("a370"),f=o("0378"),g=o("27f9"),h=o("7f67"),q=o("eebe"),x=o.n(q),w=Object(c["a"])(n,i,r,!1,null,null,null),C=w.exports;x()(w,"components",{QCard:d["a"],QToolbar:u["a"],QToolbarTitle:p["a"],QBtn:m["a"],QCardSection:b["a"],QForm:f["a"],QInput:g["a"]}),x()(w,"directives",{ClosePopup:h["a"]});var v={name:"PageIndex",components:{CadastroEdicaoResultadoAp:C},data(){return{popupCadastro:!1,modalCadastroHist:!1,filter:"",pagination:{rowsPerPage:7},consultaHistopatologia:{descricao:""},cadastroHist:{descricao:""},columns:[{name:"id",label:"Id",align:"left",field:a=>a.id,format:a=>`${a}`},{name:"descricao",label:"Descrição",align:"left",field:a=>a.descricao,format:a=>`${a}`},{name:"excluir",label:"Excluir",align:"center"}],dados:[]}},async mounted(){this.onSubmit()},methods:{async onSubmit(){let a=await this.consultarHistopatologia(this.consultaHistopatologia);this.dados=a.resultado},onReset(){},async consultarHistopatologia(a){return new Promise(((t,o)=>{this.$axios.post("/consultar_resultado_ap",a).then((a=>{t(a.data)})).catch((a=>{this.$store.dispatch("principal/verificaErro",a),o(a)}))}))},excluirResultadoAp(a){return new Promise(((t,o)=>{window.confirm("Gostaria mesmo de excluir Resultado da Anatomia Patológica?")&&this.$axios.post("/excluir_resultado_ap",{id:Number(a)}).then((a=>{this.onSubmit(),t(a.data)})).catch((a=>{this.$store.dispatch("principal/verificaErro",a),o(a)}))}))}}},R=v,y=o("9989"),A=o("eaac"),_=o("bd08"),Q=o("db86"),$=o("24e8"),k=Object(c["a"])(R,e,s,!1,null,null,null);t["default"]=k.exports;x()(k,"components",{QPage:y["a"],QForm:f["a"],QInput:g["a"],QBtn:m["a"],QTable:A["a"],QTr:_["a"],QTd:Q["a"],QDialog:$["a"]})}}]);