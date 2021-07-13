(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[13],{ee32:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-page",{staticClass:"flex flex-center",staticStyle:{"padding-bottom":"135%"}},[a("q-list",{staticClass:"full-width"},[a("q-expansion-item",{staticClass:"bg-info text-grey-1 text-center",attrs:{label:"Opções de consulta",group:"opcoes_consulta_paciente",dense:""}},[a("q-form",{staticClass:"bg-white flex-center full-width row",on:{submit:t.onSubmit,reset:t.onReset}},[a("q-input",{staticClass:"q-pa-xs col-12 col-sm-5 col-md-3 col-lg-3",attrs:{label:"Nome",dense:""},model:{value:t.consultaChat.nome,callback:function(e){t.$set(t.consultaChat,"nome",e)},expression:"consultaChat.nome"}}),a("q-input",{staticClass:"q-pa-xs col-12 col-sm-5 col-md-2 col-lg-3",attrs:{label:"CPF",mask:"###.###.###-##",dense:""},model:{value:t.consultaChat.cpf,callback:function(e){t.$set(t.consultaChat,"cpf",e)},expression:"consultaChat.cpf"}}),a("q-input",{staticClass:"q-pa-xs col-12 col-sm-5 col-md-3 col-lg-3",attrs:{label:"Preceptor",dense:""},model:{value:t.consultaChat.preceptor,callback:function(e){t.$set(t.consultaChat,"preceptor",e)},expression:"consultaChat.preceptor"}}),a("q-btn",{staticClass:"q-pa-xs q-ma-md col-12 col-sm-3 col-md-2 col-lg-1",attrs:{label:"Consultar",type:"submit",color:"primary",dense:""}})],1)],1)],1),a("div",{staticClass:"row full-width"},[a("q-table",{staticClass:"col-5 on-right",staticStyle:{"margin-top":"4%"},attrs:{data:t.data,columns:t.columns,"row-key":"name",title:"Lista de Destinatários",pagination:t.pagination},on:{"update:pagination":function(e){t.pagination=e}},scopedSlots:t._u([{key:"body",fn:function(e){return[a("q-tr",{class:[t.tempoUltimaMsg(e.row.ultima_paciente)?"bg-warning":""],attrs:{props:e}},[a("q-td",{key:"id",attrs:{props:e}},[t._v("\n            "+t._s(e.row.id)+"\n          ")]),a("q-td",{key:"nome",attrs:{props:e}},[t._v("\n            "+t._s(e.row.nome)+"\n          ")]),a("q-td",{key:"cpf",attrs:{props:e}},[t._v("\n            "+t._s(e.row.cpf)+"\n          ")]),a("q-td",{key:"preceptor",attrs:{props:e}},[t._v("\n            "+t._s(e.row.preceptor)+"\n          ")]),a("q-td",{key:"ultima_paciente",attrs:{props:e}},[t.comparaDataMensagens(e.row.ultima_paciente,e.row.ultima_medico)?a("q-icon",{attrs:{name:"circle",color:"positive"}}):t._e(),t._v("\n            "+t._s(e.row.ultima_paciente)+"\n          ")],1),a("q-td",{key:"ultima_medico",attrs:{props:e}},[t._v("\n            "+t._s(e.row.ultima_medico)+"\n          ")]),a("q-td",{key:"acessar",attrs:{props:e}},[a("q-btn",{attrs:{flat:"",id:"btnAcessar",icon:"arrow_forward"},on:{click:function(a){t.carregarMensagens(e.row.id)}}})],1)],1)]}}])}),a("div",{staticClass:"col-6"},[a("MensagensChat",{attrs:{id_paciente:t.id_paciente}})],1)],1)],1)},o=[],n=a("ded3"),l=a.n(n),i=(a("e6cf"),a("5319"),a("29fe")),r=a("2f62"),c={name:"Chat",components:{MensagensChat:i["a"]},data(){return{id_paciente:null,pagination:{rowsPerPage:7},columns:[{name:"id",label:"Id",align:"left",field:t=>t.id,format:t=>`${t}`},{name:"nome",label:"Nome",align:"left",field:t=>t.nome,format:t=>`${t}`},{name:"cpf",label:"CPF",align:"left",field:t=>t.cpf,format:t=>`${t}`},{name:"preceptor",label:"Preceptor",align:"left",field:t=>t.preceptor,format:t=>`${t}`},{name:"ultima_paciente",label:"MSG Paciente",align:"left",field:t=>t.ultima_paciente,format:t=>`${t}`},{name:"ultima_medico",label:"MSG Médico",align:"left",field:t=>t.ultima_medico,format:t=>`${t}`},{name:"acessar",label:"Acessar",align:"left"}],data:[],consultaChat:{nome:"",cpf:"",preceptor:""}}},mounted(){this.carregarDestinatarios()},computed:l()({},Object(r["c"])("principal",["dadosUsuarioLogado"])),methods:{onSubmit(){this.carregarDestinatarios()},onReset(){},carregarDestinatarios(){return new Promise(((t,e)=>{let a=this.consultaChat;a.id_med_coord=this.dadosUsuarioLogado.id_usuario,a.cpf=a.cpf.replace(/[^0-9]+/g,""),this.$axios.post("/consultar_destinatarios",a).then((e=>{console.log("chat",e.data);let a=e.data.resultado.map((t=>({id:t.id_usuario,nome:t.nome,cpf:t.cpf,preceptor:t.nome_preceptor,ultima_paciente:t.ultima_paciente,ultima_medico:t.ultima_medico})));this.data=a,t(a)})).catch((t=>{this.$store.dispatch("principal/verificaErro",t),e(t)}))}))},carregarMensagens(t){console.log("id",t),this.id_paciente=t},comparaDataMensagens(t,e){if(null!=t&&null!=e){let a=t.substr(0,2),s=t.substr(3,2),o=t.substr(6,4),n=t.substr(11,2),l=t.substr(14,2),i=t.substr(17,2),r=new Date(o,s,a,n,l,i).getTime(),c=e.substr(0,2),p=e.substr(3,2),u=e.substr(6,4),m=e.substr(11,2),d=e.substr(14,2),f=e.substr(17,2),b=new Date(u,p,c,m,d,f).getTime(),g=r>b;return g}return!0},tempoUltimaMsg(t){if(null!=t){let e=t.substr(0,2),a=t.substr(3,2),s=t.substr(6,4),o=t.substr(11,2),n=t.substr(14,2),l=t.substr(17,2),i=new Date(s,a,e,o,n,l).getTime();console.log("ultima_paciente",i);let r=(new Date).getTime();console.log("hoje",r);let c=r-i;console.log("diferencaTimestamp",c);let p=c/864e5;return console.log("diferencaDias",p),p>15}return!0}}},p=c,u=a("2877"),m=a("9989"),d=a("1c1c"),f=a("3b73"),b=a("0378"),g=a("27f9"),_=a("9c40"),h=a("eaac"),w=a("bd08"),C=a("db86"),q=a("0016"),k=a("eebe"),x=a.n(k),v=Object(u["a"])(p,s,o,!1,null,null,null);e["default"]=v.exports;x()(v,"components",{QPage:m["a"],QList:d["a"],QExpansionItem:f["a"],QForm:b["a"],QInput:g["a"],QBtn:_["a"],QTable:h["a"],QTr:w["a"],QTd:C["a"],QIcon:q["a"]})}}]);