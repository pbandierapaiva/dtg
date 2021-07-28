(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[18],{"710b":function(t,e,a){"use strict";a.r(e);var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-page",{staticClass:"flex flex-center",staticStyle:{"padding-bottom":"50%"}},[a("q-list",{staticClass:"full-width"},[a("q-expansion-item",{staticClass:"bg-info text-grey-1 text-center",attrs:{label:"Opções de consulta",group:"opcoes_consulta_paciente",dense:""}},[a("q-form",{staticClass:"bg-white flex-center full-width row",on:{submit:t.onSubmit,reset:t.onReset}},[a("q-input",{staticClass:"q-pa-xs col-12 col-sm-6 col-md-3 col-lg-3",attrs:{label:"Nome","max-length":"250",dense:""},model:{value:t.consultaUsuario.nome,callback:function(e){t.$set(t.consultaUsuario,"nome",e)},expression:"consultaUsuario.nome"}}),a("q-input",{staticClass:"q-pa-xs col-12 col-sm-6 col-md-2 col-lg-1",attrs:{label:"CPF",mask:"###.###.###-##","max-length":"11",rules:[function(t){return 0==t.length||11==t.length||"O CPF deve ter 11 dígitos"}],"unmasked-value":"",dense:""},model:{value:t.consultaUsuario.cpf,callback:function(e){t.$set(t.consultaUsuario,"cpf",e)},expression:"consultaUsuario.cpf"}}),a("q-input",{staticClass:"q-pa-xs col-12 col-sm-5 col-md-3 col-lg-3",attrs:{label:"Preceptor","max-length":"250",dense:""},model:{value:t.consultaUsuario.preceptor,callback:function(e){t.$set(t.consultaUsuario,"preceptor",e)},expression:"consultaUsuario.preceptor"}}),a("q-btn",{staticClass:"q-pa-xs q-ma-md col-xs-5 col-sm-3 col-md-2 col-lg-1",attrs:{label:"Consultar",type:"submit",color:"primary",dense:""}})],1)],1)],1),a("div",{staticClass:"q-pa-sm full-width"},[a("q-table",{staticClass:"q-mt-xs",attrs:{data:t.dados,columns:t.columns,"row-key":"name",pagination:t.pagination,"visible-columns":1==t.mostrarMais?t.visibleColumnsCompleto:t.visibleColumnsPadrao},on:{"update:pagination":function(e){t.pagination=e}},scopedSlots:t._u([{key:"top",fn:function(e){return[a("b",[t._v("Relatório Abandono Paciente")]),a("q-toggle",{attrs:{val:"mostrarMais",label:"Expandir"},model:{value:t.mostrarMais,callback:function(e){t.mostrarMais=e},expression:"mostrarMais"}}),a("q-btn",{staticClass:"on-right",attrs:{color:"primary","icon-right":"archive",label:"Exportar para CSV","no-caps":""},on:{click:t.exportTable}}),a("q-btn",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],staticClass:"q-ml-md",attrs:{flat:"",round:"",dense:"",icon:e.inFullscreen?"fullscreen_exit":"fullscreen"},on:{click:e.toggleFullscreen}})]}},{key:"header",fn:function(e){return[a("q-tr",[a("q-th",{key:"id_usuario",attrs:{props:e}}),a("q-th",{key:"id_mola",attrs:{props:e}}),a("q-th",{key:"numero_mola",attrs:{props:e}},[t._v("Nº mola")]),a("q-th",{key:"nome_paciente",attrs:{props:e}},[t._v("Nome")]),a("q-th",{key:"cpf",attrs:{props:e}},[t._v("CPF")]),a("q-th",{key:"nome_preceptor",attrs:{props:e}},[t._v("Preceptor ")]),a("q-th",{key:"ultima_paciente",attrs:{props:e}},[t._v("UMP"),a("q-btn",{attrs:{icon:"help",color:"primary",flat:"",dense:""}},[a("q-tooltip",[t._v("\n                UMP - Última mensagem enviada pela paciente\n              ")])],1)],1),a("q-th",{key:"ultima_medico",attrs:{props:e}},[t._v("UMM"),a("q-btn",{attrs:{icon:"help",color:"primary",flat:"",dense:""}},[a("q-tooltip",[t._v("\n                UMM - Última mensagem enviada pelo médico\n              ")])],1)],1),a("q-th",{key:"tel_proprio",attrs:{props:e}},[t._v("Telefone Próprio")]),a("q-th",{key:"tel_contato",attrs:{props:e}},[t._v("Telefone Contato")]),a("q-th",{key:"nome_contato",attrs:{props:e}},[t._v("Nome Contato")]),a("q-th",{key:"email",attrs:{props:e}},[t._v("E-mail")]),a("q-th",{key:"dias_ult_msg",attrs:{props:e}},[t._v("Dias Última Mensagem")]),a("q-th",{key:"enviar_mensagem",attrs:{props:e}},[t._v("Enviar Mensagem")])],1)]}},{key:"body",fn:function(e){return[a("q-tr",{class:[t.tempoUltimaMsg(e.row.ultima_paciente)?"bg-warning":""],attrs:{props:e}},[a("q-td",{key:"id_usuario",attrs:{props:e}},[t._v("\n            "+t._s(e.row.id_usuario)+"\n          ")]),a("q-td",{key:"id_r_mola",attrs:{props:e}},[t._v("\n            "+t._s(e.row.id_r_mola)+"\n          ")]),a("q-td",{key:"numero_mola",attrs:{props:e}},[t._v("\n            "+t._s(e.row.numero_mola)+"\n          ")]),a("q-td",{key:"nome_paciente",attrs:{props:e}},[t.comparaDataMensagens(e.row.ultima_paciente,e.row.ultima_medico)?a("q-icon",{attrs:{name:"circle",color:"positive"}},[a("q-tooltip",[a("span",{directives:[{name:"show",rawName:"v-show",value:1==t.comparaDataMensagens(e.row.ultima_paciente,e.row.ultima_medico)&&null!=e.row.ultima_paciente,expression:"\n                    comparaDataMensagens(\n                      props.row.ultima_paciente,\n                      props.row.ultima_medico\n                    ) == true && props.row.ultima_paciente != null\n                  "}]},[t._v("\n                  Paciente está aguardando resposta")]),a("span",{directives:[{name:"show",rawName:"v-show",value:null==e.row.ultima_paciente,expression:"props.row.ultima_paciente == null"}]},[t._v("\n                  Paciente ainda não respondeu a mensagem dos médicos")])])],1):t._e(),t._v("\n            "+t._s(e.row.nome_paciente)+"\n          ")],1),a("q-td",{key:"cpf",attrs:{props:e}},[t._v("\n            "+t._s(e.row.cpf)+"\n          ")]),a("q-td",{key:"nome_preceptor",attrs:{props:e}},[t._v("\n            "+t._s(e.row.nome_preceptor)+"\n          ")]),a("q-td",{key:"ultima_paciente",attrs:{props:e}},[a("q-btn",{attrs:{icon:e.row.ultima_paciente>e.row.ultima_medico?"chat_bubble":"chat_bubble_outline",color:null==e.row.ultima_paciente?"white":e.row.ultima_paciente>e.row.ultima_medico?"primary":"dark",flat:""}},[a("q-tooltip",[t._v("\n                "+t._s(null!=e.row.ultima_paciente?e.row.ultima_paciente:"Não há mensagens")+"\n              ")])],1)],1),a("q-td",{key:"ultima_medico",attrs:{props:e}},[a("q-btn",{attrs:{icon:e.row.ultima_medico>e.row.ultima_paciente?"chat_bubble":"chat_bubble_outline",color:null==e.row.ultima_medico?"white":e.row.ultima_medico>e.row.ultima_paciente?"primary":"dark",flat:"",dense:""}},[a("q-tooltip",[t._v("\n                "+t._s(null!=e.row.ultima_medico?e.row.ultima_medico:"Não há mensagens")+"\n              ")])],1)],1),a("q-td",{key:"tel_proprio",attrs:{props:e}},[t._v("\n            "+t._s(null==e.row.tel_proprio?"Não cadastrado":e.row.tel_proprio)+"\n          ")]),a("q-td",{key:"tel_contato",attrs:{props:e}},[t._v("\n            "+t._s(null==e.row.tel_contato?"Não cadastrado":e.row.tel_contato)+"\n          ")]),a("q-td",{key:"nome_contato",attrs:{props:e}},[t._v("\n            "+t._s(null==e.row.nome_contato?"Não cadastrado":e.row.nome_contato)+"\n          ")]),a("q-td",{key:"email",attrs:{props:e}},[t._v("\n            "+t._s(null==e.row.email?"Não cadastrado":e.row.email)+"\n          ")]),a("q-td",{key:"dias_ult_msg",attrs:{props:e}},[t._v("\n            "+t._s(e.row.dias_ult_msg)+"\n          ")]),a("q-td",{key:"enviar_mensagem",attrs:{props:e}},[a("q-btn",{attrs:{id:"enviar_mensagem",to:{name:"cadastro_registro_mola",params:{id_paciente:e.row.id_paciente,id_mola:e.row.id_r_mola}},flat:"",dense:"",icon:"send"}})],1)],1)]}}])}),a("br")],1)],1)},n=[],s=a("ded3"),i=a.n(s),l=(a("e6cf"),a("4d90"),a("ddb0"),a("4e82"),a("2f62")),r=a("a357"),c={name:"PageIndex",data(){return{mostrarMais:!1,consultaUsuario:{nome:"",cpf:"",preceptor:"",usuario_logado:null},visibleColumnsCompleto:["numero_mola","nome_paciente","cpf","nome_preceptor","ultima_medico","ultima_paciente","tel_proprio","tel_contato","nome_contato","email","enviar_mensagem"],visibleColumnsPadrao:["numero_mola","nome_paciente","cpf","ultima_medico","ultima_paciente","tel_contato","dias_ult_msg","enviar_mensagem"],pagination:{rowsPerPage:10},columns:[{name:"id_usuario",label:"Id Paciente",align:"left"},{name:"id_r_mola",label:"Id Mola",align:"left"},{name:"numero_mola",label:"Nº Mola",align:"left"},{name:"nome_paciente",label:"Nome",align:"left"},{name:"cpf",label:"CPF",align:"left"},{name:"nome_preceptor",label:"Preceptor",align:"left"},{name:"ultima_paciente",label:"UMP",align:"left"},{name:"ultima_medico",label:"UMM",align:"left"},{name:"tel_proprio",label:"Telefone Próprio",align:"left"},{name:"tel_contato",label:"Telefone de Contato",align:"left"},{name:"nome_contato",label:"Nome p/ Contato",align:"left"},{name:"email",label:"E-mail",align:"left"},{name:"dias_ult_msg",label:"Dias Última Mensagem",align:"center"},{name:"enviar_mensagem",label:"Enviar Mensagem",align:"center"}],dados:[],listaMolas:[]}},async mounted(){this.consultaUsuario.id_inst=this.dadosUsuarioLogado.id_inst,this.consultaUsuario.usuario_logado=this.dadosUsuarioLogado.id_usuario;let t=await this.consultarRelatorio(this.consultaUsuario);t=t.resultado.map((async t=>{await this.carregarRegistrosMola(t.id_paciente);let e="";for(let n=0;n<this.listaMolas.length;n++)t.id_r_mola==this.listaMolas[n].id_r_mola&&(e=e.concat(n+1),e=e.concat("ª"));let a=t.ultima_paciente;if(null!=t.ultima_paciente){let e=new Date(String(t.ultima_paciente));a=e.getDate()+"/"+(e.getMonth()+1).toString().padStart(2,0)+"/"+e.getFullYear()+" "+e.getHours()+":"+e.getMinutes()+":"+e.getSeconds().toString().padStart(2,0)}let o=t.ultima_medico;if(null!=t.ultima_medico){let e=new Date(String(t.ultima_medico));o=e.getDate()+"/"+(e.getMonth()+1).toString().padStart(2,0)+"/"+e.getFullYear()+" "+e.getHours()+":"+e.getMinutes()+":"+e.getSeconds().toString().padStart(2,0)}return t.id_usuario=t.id_usuario,t.id_r_mola=t.id_r_mola,t.numero_mola=e,t.nome_paciente=t.nome_paciente,t.cpf=t.cpf,t.nome_preceptor=t.nome_preceptor,t.ultima_paciente=a,t.ultima_medico=o,t.tel_proprio=t.tel_proprio,t.tel_contato=t.tel_contato,t.nome_contato=t.tel_proprio,t.email=t.email,t.dias_ult_msg=t.dias_ult_msg,t})),Promise.all(t).then((t=>{this.dados=t,this.dados=this.dados.sort((function(t,e){return 0==t.nome_paciente.localeCompare(e.nome_paciente)?t.id_r_mola<e.id_r_mola?-1:1:t.nome_paciente.localeCompare(e.nome_paciente)}))})).catch((t=>{console.error(t)}))},methods:{wrapCsvValue(t,e){let a=void 0!==e?e(t):t;return a=void 0===a||null===a?"":String(a),a=a.split('"').join('""'),`"${a}"`},exportTable(){const t=[this.columns.map((t=>this.wrapCsvValue(t.label)))].concat(this.dados.map((t=>this.columns.map((e=>this.wrapCsvValue("function"===typeof e.field?e.field(t):t[void 0===e.field?e.name:e.field],e.format))).join(",")))).join("\r\n"),e=Object(r["a"])("relatorio-abandono-paciente.csv",t,"text/csv");!0!==e&&$q.notify({message:"Browser denied file download...",color:"negative",icon:"warning"})},carregarRegistrosMola(t){return new Promise(((e,a)=>{this.$axios.post("/dados_r_mola",{id_paciente:t}).then((t=>{this.listaMolas=[];for(let e=0;e<t.data.resultado.length;e++)this.listaMolas.unshift(t.data.resultado[e]);e(t.data.resultado)})).catch((t=>{this.$store.dispatch("principal/verificaErro",t),a(t)}))}))},delegarUsuario(t){this.$store.dispatch("principal/delegarUsuario",t).then((()=>{}))},async onSubmit(){let t=await this.consultarRelatorio(this.consultaUsuario);t=t.resultado.map((async t=>{await this.carregarRegistrosMola(t.id_usuario);let e="";for(let a=0;a<this.listaMolas.length;a++)t.id_r_mola==this.listaMolas[a].id_r_mola&&(e=e.concat(a+1),e=e.concat("ª"));return t.id_usuario=t.id_usuario,t.id_r_mola=t.id_r_mola,t.numero_mola=e,t.nome_paciente=t.nome_paciente,t.cpf=t.cpf,t.nome_preceptor=t.nome_preceptor,t.ultima_paciente=t.ultima_paciente,t.ultima_medico=t.ultima_medico,t.tel_proprio=t.tel_proprio,t.tel_contato=t.tel_contato,t.nome_contato=t.tel_proprio,t.email=t.email,t.dias_ult_msg=t.dias_ult_msg,t})),Promise.all(t).then((t=>{this.dados=t,this.dados=this.dados.sort((function(t,e){return 0==t.nome_paciente.localeCompare(e.nome_paciente)?t.id_r_mola<e.id_r_mola?-1:1:t.nome_paciente.localeCompare(e.nome_paciente)}))})).catch((t=>{console.error(t)}))},onReset(){},async consultarRelatorio(t){return new Promise(((e,a)=>{this.$axios.post("/relatorio/abandono_paciente",t).then((t=>{console.log("DADOS RELATÓRIO ",t.data),e(t.data)})).catch((t=>{this.$store.dispatch("principal/verificaErro",t),a(t)}))}))},comparaDataMensagens(t,e){if(null!=t&&null!=e){let a=t.substr(0,2),o=t.substr(3,2),n=t.substr(6,4),s=t.substr(11,2),i=t.substr(14,2),l=t.substr(17,2),r=new Date(n,o,a,s,i,l).getTime(),c=e.substr(0,2),m=e.substr(3,2),p=e.substr(6,4),u=e.substr(11,2),_=e.substr(14,2),d=e.substr(17,2),g=new Date(p,m,c,u,_,d).getTime(),b=r>g;return b}return!0},tempoUltimaMsg(t){if(null!=t){let e=t.substr(0,2),a=t.substr(3,2),o=t.substr(6,4),n=t.substr(11,2),s=t.substr(14,2),i=t.substr(17,2),l=new Date(o,a,e,n,s,i).getTime(),r=(new Date).getTime(),c=r-l,m=c/864e5;return m>21}return!0}},computed:i()({},Object(l["c"])("principal",["usuarioLogado","dadosUsuarioLogado"]))},m=c,p=a("2877"),u=a("9989"),_=a("1c1c"),d=a("3b73"),g=a("0378"),b=a("27f9"),h=a("9c40"),f=a("eaac"),w=a("9564"),v=a("bd08"),q=a("357e"),y=a("05c0"),k=a("db86"),M=a("0016"),C=a("eebe"),x=a.n(C),U=Object(p["a"])(m,o,n,!1,null,null,null);e["default"]=U.exports;x()(U,"components",{QPage:u["a"],QList:_["a"],QExpansionItem:d["a"],QForm:g["a"],QInput:b["a"],QBtn:h["a"],QTable:f["a"],QToggle:w["a"],QTr:v["a"],QTh:q["a"],QTooltip:y["a"],QTd:k["a"],QIcon:M["a"]})}}]);