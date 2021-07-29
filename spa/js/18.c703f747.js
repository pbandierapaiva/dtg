(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[18],{"710b":function(t,a,e){"use strict";e.r(a);var o=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("q-page",{staticClass:"flex flex-center",staticStyle:{"padding-bottom":"50%"}},[e("q-list",{staticClass:"full-width"},[e("q-expansion-item",{staticClass:"bg-info text-grey-1 text-center",attrs:{label:"Opções de consulta",group:"opcoes_consulta_paciente",dense:""}},[e("q-form",{staticClass:"bg-white flex-center full-width row",on:{submit:t.onSubmit,reset:t.onReset}},[e("q-input",{staticClass:"q-pa-xs col-12 col-sm-8 col-md-4 col-lg-4",attrs:{label:"Nome","max-length":"250",dense:""},model:{value:t.consultaUsuario.nome,callback:function(a){t.$set(t.consultaUsuario,"nome",a)},expression:"consultaUsuario.nome"}}),e("q-input",{staticClass:"q-pa-xs col-12 col-sm-4 col-md-2 col-lg-2",attrs:{label:"CPF",mask:"###.###.###-##","max-length":"11",rules:[function(t){return 0==t.length||11==t.length||"O CPF deve ter 11 dígitos"}],"unmasked-value":"",dense:""},model:{value:t.consultaUsuario.cpf,callback:function(a){t.$set(t.consultaUsuario,"cpf",a)},expression:"consultaUsuario.cpf"}}),e("q-input",{staticClass:"q-pa-xs col-12 col-sm-12 col-md-4 col-lg-4",attrs:{label:"Preceptor","max-length":"250",dense:""},model:{value:t.consultaUsuario.preceptor,callback:function(a){t.$set(t.consultaUsuario,"preceptor",a)},expression:"consultaUsuario.preceptor"}}),e("q-btn",{staticClass:"q-pa-xs q-ma-md col-xs-5 col-sm-3 col-md-1 col-lg-1",attrs:{label:"Consultar",type:"submit",color:"primary",dense:""}})],1)],1)],1),e("div",{staticClass:"q-pa-sm full-width"},[e("q-table",{staticClass:"q-mt-xs",attrs:{data:t.dados,columns:t.columns,"row-key":"name",pagination:t.pagination,"visible-columns":1==t.mostrarMais?t.visibleColumnsCompleto:t.visibleColumnsPadrao},on:{"update:pagination":function(a){t.pagination=a}},scopedSlots:t._u([{key:"top",fn:function(a){return[e("b",[t._v("Relatório Abandono Paciente")]),e("q-btn",{attrs:{icon:"help",color:"primary",flat:"",dense:""}},[e("q-tooltip",[t._v("\n            Este relatório apresenta pacientes que ficaram mais de 21 dias sem\n            responder as mensagens da equipe médica e sem enviar exames\n          ")])],1),e("q-toggle",{attrs:{val:"mostrarMais",label:"Expandir"},model:{value:t.mostrarMais,callback:function(a){t.mostrarMais=a},expression:"mostrarMais"}}),e("q-btn",{staticClass:"on-right",attrs:{color:"primary","icon-right":"archive",label:"Exportar para CSV","no-caps":""},on:{click:t.exportTable}}),e("q-btn",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],staticClass:"q-ml-md",attrs:{flat:"",round:"",dense:"",icon:a.inFullscreen?"fullscreen_exit":"fullscreen"},on:{click:a.toggleFullscreen}})]}},{key:"header",fn:function(a){return[e("q-tr",[e("q-th",{key:"id_paciente",attrs:{props:a}}),e("q-th",{key:"id_mola",attrs:{props:a}}),e("q-th",{key:"numero_mola",attrs:{props:a}},[t._v("Nº mola")]),e("q-th",{key:"nome_paciente",attrs:{props:a}},[t._v("Nome")]),e("q-th",{key:"cpf",attrs:{props:a}},[t._v("CPF")]),e("q-th",{key:"nome_preceptor",attrs:{props:a}},[t._v("Preceptor ")]),e("q-th",{key:"ultima_paciente",attrs:{props:a}},[t._v("UMP"),e("q-btn",{attrs:{icon:"help",color:"primary",flat:"",dense:""}},[e("q-tooltip",[t._v("\n                UMP - Última mensagem enviada pela paciente\n              ")])],1)],1),e("q-th",{key:"ultima_medico",attrs:{props:a}},[t._v("UMM"),e("q-btn",{attrs:{icon:"help",color:"primary",flat:"",dense:""}},[e("q-tooltip",[t._v("\n                UMM - Última mensagem enviada pelo médico\n              ")])],1)],1),e("q-th",{key:"tel_proprio",attrs:{props:a}},[t._v("Telefone Próprio")]),e("q-th",{key:"tel_contato",attrs:{props:a}},[t._v("Telefone Contato")]),e("q-th",{key:"nome_contato",attrs:{props:a}},[t._v("Nome Contato")]),e("q-th",{key:"email",attrs:{props:a}},[t._v("E-mail")]),e("q-th",{key:"dias_ult_msg",attrs:{props:a}},[t._v("Dias Última Mensagem")]),e("q-th",{key:"enviar_mensagem",attrs:{props:a}},[t._v("Enviar Mensagem")])],1)]}},{key:"body",fn:function(a){return[e("q-tr",{class:[t.tempoUltimaMsg(a.row.ultima_paciente)?"bg-warning":""],attrs:{props:a}},[e("q-td",{key:"id_paciente",attrs:{props:a}},[t._v("\n            "+t._s(a.row.id_paciente)+"\n          ")]),e("q-td",{key:"id_r_mola",attrs:{props:a}},[t._v("\n            "+t._s(a.row.id_r_mola)+"\n          ")]),e("q-td",{key:"numero_mola",attrs:{props:a}},[t._v("\n            "+t._s(a.row.numero_mola)+"\n          ")]),e("q-td",{key:"nome_paciente",attrs:{props:a}},[t.comparaDataMensagens(a.row.ultima_paciente,a.row.ultima_medico)?e("q-icon",{attrs:{name:"circle",color:"positive"}},[e("q-tooltip",[e("span",{directives:[{name:"show",rawName:"v-show",value:1==t.comparaDataMensagens(a.row.ultima_paciente,a.row.ultima_medico)&&null!=a.row.ultima_paciente,expression:"\n                    comparaDataMensagens(\n                      props.row.ultima_paciente,\n                      props.row.ultima_medico\n                    ) == true && props.row.ultima_paciente != null\n                  "}]},[t._v("\n                  Paciente está aguardando resposta")]),e("span",{directives:[{name:"show",rawName:"v-show",value:null==a.row.ultima_paciente,expression:"props.row.ultima_paciente == null"}]},[t._v("\n                  Paciente ainda não respondeu a mensagem dos médicos")])])],1):t._e(),t._v("\n            "+t._s(a.row.nome_paciente)+"\n          ")],1),e("q-td",{key:"cpf",attrs:{props:a}},[t._v("\n            "+t._s(a.row.cpf)+"\n          ")]),e("q-td",{key:"nome_preceptor",attrs:{props:a}},[t._v("\n            "+t._s(a.row.nome_preceptor)+"\n          ")]),e("q-td",{key:"ultima_paciente",attrs:{props:a}},[e("q-btn",{attrs:{icon:a.row.ultima_paciente>a.row.ultima_medico?"chat_bubble":"chat_bubble_outline",color:null==a.row.ultima_paciente?"white":a.row.ultima_paciente>a.row.ultima_medico?"primary":"dark",flat:""}},[e("q-tooltip",[t._v("\n                "+t._s(null!=a.row.ultima_paciente?a.row.ultima_paciente:"Não há mensagens")+"\n              ")])],1)],1),e("q-td",{key:"ultima_medico",attrs:{props:a}},[e("q-btn",{attrs:{icon:a.row.ultima_medico>a.row.ultima_paciente?"chat_bubble":"chat_bubble_outline",color:null==a.row.ultima_medico?"white":a.row.ultima_medico>a.row.ultima_paciente?"primary":"dark",flat:"",dense:""}},[e("q-tooltip",[t._v("\n                "+t._s(null!=a.row.ultima_medico?a.row.ultima_medico:"Não há mensagens")+"\n              ")])],1)],1),e("q-td",{key:"tel_proprio",attrs:{props:a}},[t._v("\n            "+t._s(null==a.row.tel_proprio?"Não cadastrado":a.row.tel_proprio)+"\n          ")]),e("q-td",{key:"tel_contato",attrs:{props:a}},[t._v("\n            "+t._s(null==a.row.tel_contato?"Não cadastrado":a.row.tel_contato)+"\n          ")]),e("q-td",{key:"nome_contato",attrs:{props:a}},[t._v("\n            "+t._s(null==a.row.nome_contato?"Não cadastrado":a.row.nome_contato)+"\n          ")]),e("q-td",{key:"email",attrs:{props:a}},[t._v("\n            "+t._s(null==a.row.email?"Não cadastrado":a.row.email)+"\n          ")]),e("q-td",{key:"dias_ult_msg",attrs:{props:a}},[t._v("\n            "+t._s(a.row.dias_ult_msg)+"\n          ")]),e("q-td",{key:"enviar_mensagem",attrs:{props:a}},[e("q-btn",{attrs:{id:"enviar_mensagem",to:{name:"cadastro_registro_mola",params:{id_paciente:a.row.id_paciente,id_mola:a.row.id_r_mola}},flat:"",dense:"",icon:"send"}})],1)],1)]}}])}),e("br")],1),e("q-list",{staticClass:"full-width"},[e("q-expansion-item",{staticClass:"bg-info text-grey-1 text-center",attrs:{label:"Legenda",group:"legenda",dense:""}},[e("q-card",{staticClass:"bg-white flex-center full-width row"},[e("p",{staticClass:"text-justify text-black col-12 q-mt-xs"},[e("span",{staticClass:"q-ml-sm"},[e("b",[t._v("UMP:      ")]),t._v("Última mensagem enviada\n            pela paciente")])]),e("p",{staticClass:"text-justify text-black col-12"},[e("span",{staticClass:"q-ml-sm"},[e("b",[t._v("UMM:     ")]),t._v("Última mensagem enviada pelo\n            médico")])]),e("p",{staticClass:"text-justify text-black col-12"},[e("q-btn",{attrs:{icon:"chat_bubble",color:"primary",flat:"",stack:""}}),t._v(" \n          "),e("span",[e("b",[t._v("UMP:  ")])]),e("span",[t._v("Paciente enviou a última mensagem depois da última resposta do\n            médico")])],1),e("p",{staticClass:"text-justify text-black col-12"},[e("q-btn",{attrs:{icon:"chat_bubble_outline",color:"dark",flat:"",stack:""}}),t._v(" \n          "),e("span",[e("b",[t._v("UMP:  ")])]),e("span",[t._v("Paciente enviou a última mensagem antes da última resposta do\n            médico")])],1),e("p",{staticClass:"text-justify text-black col-12"},[e("q-btn",{staticClass:"bg-warning",attrs:{flat:"",icon:"chat_bubble_outline",color:"white",stack:""}}),t._v(" \n          "),e("span",[e("b",[t._v("UMP:  ")])]),e("span",[t._v("Paciente não enviou nenhuma mensagem")])],1),e("p",{staticClass:"text-justify text-black col-12"},[e("q-btn",{attrs:{icon:"chat_bubble",color:"primary",flat:"",stack:""}}),t._v(" \n          "),e("span",[e("b",[t._v("UMM:  ")])]),e("span",[t._v("Médico enviou a última mensagem depois da última resposta da\n            paciente")])],1),e("p",{staticClass:"text-justify text-black col-12"},[e("q-btn",{attrs:{flat:"",icon:"chat_bubble_outline",color:"dark",stack:""}}),t._v(" \n          "),e("span",[e("b",[t._v("UMM:  ")])]),e("span",[t._v("Médico enviou a última mensagem antes da última resposta da\n            paciente")])],1),e("p",{staticClass:"text-justify text-black col-12"},[e("q-btn",{staticClass:"bg-warning",attrs:{flat:"",icon:"chat_bubble_outline",color:"white",stack:""}}),t._v(" \n          "),e("span",[e("b",[t._v("UMM:  ")])]),e("span",[t._v("Médico não enviou nenhuma mensagem")])],1)])],1)],1)],1)},s=[],n=e("ded3"),i=e.n(n),l=(e("e6cf"),e("4d90"),e("ddb0"),e("4e82"),e("2f62")),r=e("a357"),c={name:"PageIndex",data(){return{mostrarMais:!1,consultaUsuario:{nome:"",cpf:"",preceptor:"",usuario_logado:null},visibleColumnsCompleto:["numero_mola","nome_paciente","cpf","nome_preceptor","ultima_medico","ultima_paciente","tel_proprio","tel_contato","nome_contato","email","enviar_mensagem"],visibleColumnsPadrao:["numero_mola","nome_paciente","cpf","ultima_medico","ultima_paciente","tel_proprio","dias_ult_msg","enviar_mensagem"],pagination:{rowsPerPage:10},columns:[{name:"id_paciente",label:"Id Paciente",align:"left"},{name:"id_r_mola",label:"Id Mola",align:"left"},{name:"numero_mola",label:"Nº Mola",align:"left"},{name:"nome_paciente",label:"Nome",align:"left"},{name:"cpf",label:"CPF",align:"left"},{name:"nome_preceptor",label:"Preceptor",align:"left"},{name:"ultima_paciente",label:"UMP",align:"left"},{name:"ultima_medico",label:"UMM",align:"left"},{name:"tel_proprio",label:"Telefone Próprio",align:"left"},{name:"tel_contato",label:"Telefone de Contato",align:"left"},{name:"nome_contato",label:"Nome p/ Contato",align:"left"},{name:"email",label:"E-mail",align:"left"},{name:"dias_ult_msg",label:"Dias Última Mensagem",align:"center"},{name:"enviar_mensagem",label:"Enviar Mensagem",align:"center"}],dados:[],listaMolas:[]}},async mounted(){this.consultaUsuario.id_inst=this.dadosUsuarioLogado.id_inst,this.consultaUsuario.usuario_logado=this.dadosUsuarioLogado.id_usuario;let t=await this.consultarRelatorio(this.consultaUsuario);t=t.resultado.map((async t=>{await this.carregarRegistrosMola(t.id_paciente);let a="";for(let s=0;s<this.listaMolas.length;s++)t.id_r_mola==this.listaMolas[s].id_r_mola&&(a=a.concat(s+1),a=a.concat("ª"));let e=t.ultima_paciente;if(null!=t.ultima_paciente){let a=new Date(String(t.ultima_paciente));e=a.getDate()+"/"+(a.getMonth()+1).toString().padStart(2,0)+"/"+a.getFullYear()+" "+a.getHours()+":"+a.getMinutes()+":"+a.getSeconds().toString().padStart(2,0)}let o=t.ultima_medico;if(null!=t.ultima_medico){let a=new Date(String(t.ultima_medico));o=a.getDate()+"/"+(a.getMonth()+1).toString().padStart(2,0)+"/"+a.getFullYear()+" "+a.getHours()+":"+a.getMinutes()+":"+a.getSeconds().toString().padStart(2,0)}return t.id_usuario=t.id_usuario,t.id_r_mola=t.id_r_mola,t.numero_mola=a,t.nome_paciente=t.nome_paciente,t.cpf=t.cpf,t.nome_preceptor=t.nome_preceptor,t.ultima_paciente=e,t.ultima_medico=o,t.tel_proprio=t.tel_proprio,t.tel_contato=t.tel_contato,t.nome_contato=t.nome_contato,t.email=t.email,t.dias_ult_msg=t.dias_ult_msg,t})),Promise.all(t).then((t=>{this.dados=t,this.dados=this.dados.sort((function(t,a){return 0==t.nome_paciente.localeCompare(a.nome_paciente)?t.id_r_mola<a.id_r_mola?-1:1:t.nome_paciente.localeCompare(a.nome_paciente)}))})).catch((t=>{console.error(t)}))},methods:{wrapCsvValue(t,a){let e=void 0!==a?a(t):t;return e=void 0===e||null===e?"":String(e),e=e.split('"').join('""'),`"${e}"`},exportTable(){const t=[this.columns.map((t=>this.wrapCsvValue(t.label)))].concat(this.dados.map((t=>this.columns.map((a=>this.wrapCsvValue("function"===typeof a.field?a.field(t):t[void 0===a.field?a.name:a.field],a.format))).join(",")))).join("\r\n"),a=Object(r["a"])("relatorio-abandono-paciente.csv",t,"text/csv");!0!==a&&$q.notify({message:"Browser denied file download...",color:"negative",icon:"warning"})},carregarRegistrosMola(t){return new Promise(((a,e)=>{this.$axios.post("/dados_r_mola",{id_paciente:t}).then((t=>{this.listaMolas=[];for(let a=0;a<t.data.resultado.length;a++)this.listaMolas.unshift(t.data.resultado[a]);a(t.data.resultado)})).catch((t=>{this.$store.dispatch("principal/verificaErro",t),e(t)}))}))},delegarUsuario(t){this.$store.dispatch("principal/delegarUsuario",t).then((()=>{}))},async onSubmit(){let t=await this.consultarRelatorio(this.consultaUsuario);t=t.resultado.map((async t=>{await this.carregarRegistrosMola(t.id_usuario);let a="";for(let e=0;e<this.listaMolas.length;e++)t.id_r_mola==this.listaMolas[e].id_r_mola&&(a=a.concat(e+1),a=a.concat("ª"));return t.id_usuario=t.id_usuario,t.id_r_mola=t.id_r_mola,t.numero_mola=a,t.nome_paciente=t.nome_paciente,t.cpf=t.cpf,t.nome_preceptor=t.nome_preceptor,t.ultima_paciente=t.ultima_paciente,t.ultima_medico=t.ultima_medico,t.tel_proprio=t.tel_proprio,t.tel_contato=t.tel_contato,t.nome_contato=t.nome_contato,t.email=t.email,t.dias_ult_msg=t.dias_ult_msg,t})),Promise.all(t).then((t=>{this.dados=t,this.dados=this.dados.sort((function(t,a){return 0==t.nome_paciente.localeCompare(a.nome_paciente)?t.id_r_mola<a.id_r_mola?-1:1:t.nome_paciente.localeCompare(a.nome_paciente)}))})).catch((t=>{console.error(t)}))},onReset(){},async consultarRelatorio(t){return new Promise(((a,e)=>{this.$axios.post("/relatorio/abandono_paciente",t).then((t=>{a(t.data)})).catch((t=>{this.$store.dispatch("principal/verificaErro",t),e(t)}))}))},comparaDataMensagens(t,a){if(null!=t&&null!=a){let e=t.substr(0,2),o=t.substr(3,2),s=t.substr(6,4),n=t.substr(11,2),i=t.substr(14,2),l=t.substr(17,2),r=new Date(s,o,e,n,i,l).getTime(),c=a.substr(0,2),m=a.substr(3,2),p=a.substr(6,4),u=a.substr(11,2),_=a.substr(14,2),d=a.substr(17,2),b=new Date(p,m,c,u,_,d).getTime(),g=r>b;return g}return!0},tempoUltimaMsg(t){if(null!=t){let a=t.substr(0,2),e=t.substr(3,2),o=t.substr(6,4),s=t.substr(11,2),n=t.substr(14,2),i=t.substr(17,2),l=new Date(o,e,a,s,n,i).getTime(),r=(new Date).getTime(),c=r-l,m=c/864e5;return m>21}return!0}},computed:i()({},Object(l["c"])("principal",["usuarioLogado","dadosUsuarioLogado"]))},m=c,p=e("2877"),u=e("9989"),_=e("1c1c"),d=e("3b73"),b=e("0378"),g=e("27f9"),h=e("9c40"),f=e("eaac"),v=e("05c0"),w=e("9564"),q=e("bd08"),y=e("357e"),k=e("db86"),M=e("0016"),x=e("f09f"),C=e("eebe"),U=e.n(C),P=Object(p["a"])(m,o,s,!1,null,null,null);a["default"]=P.exports;U()(P,"components",{QPage:u["a"],QList:_["a"],QExpansionItem:d["a"],QForm:b["a"],QInput:g["a"],QBtn:h["a"],QTable:f["a"],QTooltip:v["a"],QToggle:w["a"],QTr:q["a"],QTh:y["a"],QTd:k["a"],QIcon:M["a"],QCard:x["a"]})}}]);