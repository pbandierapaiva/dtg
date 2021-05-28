(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[5],{"1a3f":function(a,t,e){"use strict";e.r(t);var o=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("q-page",{staticClass:"flex flex-center"},[e("h6",{staticStyle:{"font-size":"18px"}},[e("b",[a._v("Cadastro Paciente")])]),e("q-form",{staticClass:"q-gutter-md q-pa-xs q-gutter-y-xs",staticStyle:{width:"100%","padding-bottom":"135%"},on:{submit:function(t){return t.stopPropagation(),a.onSubmit(t)},reset:a.onReset}},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-12 col-lg-6"},[e("fieldset",{staticClass:"row"},[e("legend",[a._v("Dados Login")]),e("q-input",{staticClass:"q-pa-xs q-pb-lg col-xs-11 col-sm-6 col-md-6 col-lg-6",attrs:{label:"Login",maxlength:"50",rules:[function(a){return a.length>0||"Digite um login"},function(a){return a.length>3||"Digite um login com pelo menos 4 digitos"},function(a){return a.length<=50||"O login deve ter no máximo 50 caracteres"}]},on:{keyup:a.verificarDisponibilidadeLogin},model:{value:a.cadastroPaciente.login,callback:function(t){a.$set(a.cadastroPaciente,"login",t)},expression:"cadastroPaciente.login"}}),a.cadastroPaciente.login.length>3&&a.loginDisponivel?e("span",{staticClass:"text-positive q-pt-lg"},[e("q-icon",{staticStyle:{"font-size":"24px"},attrs:{name:"check_circle"}}),e("q-tooltip",[a._v("Disponível")])],1):a._e(),a.cadastroPaciente.login.length>3&&!a.loginDisponivel?e("span",{staticClass:"text-negative q-pt-lg"},[e("q-icon",{staticStyle:{"font-size":"24px"},attrs:{name:"cancel"}}),e("q-tooltip",[a._v("Indisponível")])],1):a._e(),""!=this.cadastroPaciente.id_usuario&&void 0!=this.cadastroPaciente.id_usuario?e("q-btn",{staticClass:"q-pa-xs q-ml-xs q-mt-md q-mb-md col-xs-12 col-sm-4 col-md-2 col-lg-5",attrs:{label:"Resetar Senha",color:"primary"},on:{click:function(t){a.popupResetarSenha=!0},keyup:a.verificarDisponibilidadeLogin}}):a._e()],1)]),e("div",{staticClass:"col-12 col-lg-6"},[e("fieldset",{staticClass:"row q-pb-lg"},[e("legend",[a._v("Dados Pessoais")]),e("q-input",{ref:"nome",staticClass:"q-pa-xs\n          col-12 col-sm-4 col-md-3 col-lg-3",attrs:{label:"Nome","max-length":"250",dense:"",rules:[function(a){return a.length>0||"Digite um Nome"},function(a){return a.length<=250||"O nome deve ter no máximo 250 caracteres"}],"reactive-rules":""},on:{input:function(t){return a.validarLetrasEspacos(a.cadastroPaciente.nome,"nome")}},model:{value:a.cadastroPaciente.nome,callback:function(t){a.$set(a.cadastroPaciente,"nome",t)},expression:"cadastroPaciente.nome"}}),e("q-input",{staticClass:"q-pa-xs col-12 col-sm-4 col-md-3 col-lg-3",attrs:{dense:"",rules:[function(a){return 10==a.length||"Selecione uma Data de Nascimento"}],label:"Data de Nascimento",mask:"##/##/####"},scopedSlots:a._u([{key:"append",fn:function(){return[e("q-icon",{staticClass:"cursor-pointer",attrs:{name:"calendar_today"},on:{click:function(t){a.popupAbrirCalendario=!0}}},[e("q-dialog",{model:{value:a.popupAbrirCalendario,callback:function(t){a.popupAbrirCalendario=t},expression:"popupAbrirCalendario"}},[e("q-date",{attrs:{"first-day-of-week":"1",mask:"DD/MM/YYYY"},on:{input:function(t){a.popupAbrirCalendario=!1}},model:{value:a.cadastroPaciente.data_nasc,callback:function(t){a.$set(a.cadastroPaciente,"data_nasc",t)},expression:"cadastroPaciente.data_nasc"}})],1)],1)]},proxy:!0}]),model:{value:a.cadastroPaciente.data_nasc,callback:function(t){a.$set(a.cadastroPaciente,"data_nasc",t)},expression:"cadastroPaciente.data_nasc"}}),e("q-input",{staticClass:"q-pa-xs col-12 col-sm-4 col-md-3 col-lg-3",attrs:{label:"CPF",mask:"###.###.###-##","unmasked-value":"",dense:"",rules:[function(a){return 11==a.length||"O CPF deve ter 11 dígitos"}]},model:{value:a.cadastroPaciente.cpf,callback:function(t){a.$set(a.cadastroPaciente,"cpf",t)},expression:"cadastroPaciente.cpf"}}),e("q-input",{ref:"nome_mae",staticClass:"q-pa-xs col-12 col-sm-3 col-md-3 col-lg-3",attrs:{label:"Nome da Mãe","max-length":"250",dense:"","reactive-rules":""},on:{input:function(t){return a.validarLetrasEspacos(a.cadastroPaciente.nome_mae,"mae")}},model:{value:a.cadastroPaciente.nome_mae,callback:function(t){a.$set(a.cadastroPaciente,"nome_mae",t)},expression:"cadastroPaciente.nome_mae"}}),e("q-radio",{ref:"radioRg",staticClass:"q-pa-xs",attrs:{val:"rg",label:"RG"},on:{input:function(t){return a.atualizarDados(a.utilizarRg)}},model:{value:a.utilizarRg,callback:function(t){a.utilizarRg=t},expression:"utilizarRg"}}),e("q-radio",{ref:"radioRne",staticClass:"q-pa-xs",attrs:{val:"rne",label:"RNE"},on:{input:function(t){return a.atualizarDados(a.utilizarRg)}},model:{value:a.utilizarRg,callback:function(t){a.utilizarRg=t},expression:"utilizarRg"}}),"rg"==a.utilizarRg||""!=a.cadastroPaciente.rg?e("q-input",{ref:"rg",staticClass:"q-pa-xs col-12 col-sm-3 col-md-5 col-lg-4",attrs:{label:"RG",mask:"##.###.###-XX","unmasked-value":"",dense:"",rules:[function(t){return 9==t.length||10==t.length||"rne"==a.utilizarRg||"O RG deve conter 9 ou 10 caracteres"}],"reactive-rules":""},model:{value:a.cadastroPaciente.rg,callback:function(t){a.$set(a.cadastroPaciente,"rg",t)},expression:"cadastroPaciente.rg"}}):a._e(),"rne"==a.utilizarRg||""!=a.cadastroPaciente.rne?e("q-input",{ref:"rne",staticClass:"q-pa-xs col-12 col-sm-3 col-md-5 col-lg-4",attrs:{label:"RNE",mask:"XXXXXXX-X","unmasked-value":"",dense:"",rules:[function(t){return 8==t.length||"rg"==a.utilizarRg||"O RNE deve conter 8 caracteres"}],"reactive-rules":""},model:{value:a.cadastroPaciente.rne,callback:function(t){a.$set(a.cadastroPaciente,"rne",t)},expression:"cadastroPaciente.rne"}}):a._e(),"rne"==a.utilizarRg||""!=a.cadastroPaciente.nacionalidade?e("q-input",{ref:"nacionalidade",staticClass:"q-pa-xs col-12 col-sm-3 col-md-5 col-lg-5",attrs:{label:"Nacionalidade","max-length":"250",dense:"",rules:[function(t){return 0!=t.length||"rg"==a.utilizarRg||"Nacionalidade não deve ser nula"}],"reactive-rules":""},on:{input:function(t){return a.validarLetrasEspacos(a.cadastroPaciente.nacionalidade,"nacionalidade")}},model:{value:a.cadastroPaciente.nacionalidade,callback:function(t){a.$set(a.cadastroPaciente,"nacionalidade",t)},expression:"cadastroPaciente.nacionalidade"}}):a._e()],1)]),e("div",{staticClass:"col-12 col-lg-6"},[e("fieldset",{staticClass:"row q-pb-lg"},[e("legend",[a._v("Endereço Residencial")]),e("q-input",{ref:"cep",staticClass:"q-pa-xs col-12 col-sm-4 col-md-1 col-lg-2",attrs:{label:"CEP",mask:"#####-###","unmasked-value":"",dense:"",rules:[function(t){return 0==t.length&&0==a.validaEndereco||8==t.length||"CEP deve ter 8 dígitos"}]},on:{input:a.validarEndereco},model:{value:a.cadastroPaciente.cep,callback:function(t){a.$set(a.cadastroPaciente,"cep",t)},expression:"cadastroPaciente.cep"}}),e("q-input",{ref:"logradouro",staticClass:"q-pa-xs col-12 col-sm-4 col-md-3 col-lg-3",attrs:{label:"Logradouro",maxlength:"250",dense:"",rules:[function(t){return 0!=t.length||0==a.validaEndereco||"Preencha o logradouro"}]},on:{input:function(t){return a.validarEndereco("logradouro")}},model:{value:a.cadastroPaciente.logradouro,callback:function(t){a.$set(a.cadastroPaciente,"logradouro",t)},expression:"cadastroPaciente.logradouro"}}),e("q-input",{ref:"numero",staticClass:"q-pa-xs col-12 col-sm-4 col-md-1 col-lg-1",attrs:{label:"Número",maxlength:"7",dense:"",rules:[function(t){return 0==a.validaEndereco||0!=t.length||"Preencha o número"}]},on:{input:a.validarEndereco},model:{value:a.cadastroPaciente.numero,callback:function(t){a.$set(a.cadastroPaciente,"numero",t)},expression:"cadastroPaciente.numero"}}),e("q-input",{ref:"complemento",staticClass:"q-pa-xs col-12 col-sm-2 col-md-2 col-lg-2",attrs:{label:"Complemento",maxlength:"250",dense:""},on:{input:a.validarEndereco},model:{value:a.cadastroPaciente.complemento,callback:function(t){a.$set(a.cadastroPaciente,"complemento",t)},expression:"cadastroPaciente.complemento"}}),e("q-select",{ref:"uf",staticClass:"q-pa-xs col-12 col-sm-2 col-md-1 col-lg-1",attrs:{options:a.optUf,label:"UF",dense:"",rules:[function(t){return 0!=t.length||0==a.validaEndereco||"Preencha a UF"}]},on:{input:a.validarEndereco},model:{value:a.cadastroPaciente.uf,callback:function(t){a.$set(a.cadastroPaciente,"uf",t)},expression:"cadastroPaciente.uf"}}),e("q-input",{ref:"cidade",staticClass:"q-pa-xs col-12 col-sm-4 col-md-2 col-lg-3",attrs:{label:"Cidade",maxlength:"28",dense:"",rules:[function(t){return 0!=t.length||0==a.validaEndereco||"Preencha a cidade"}]},on:{input:function(t){return a.validarEndereco("cidade")}},model:{value:a.cadastroPaciente.cidade,callback:function(t){a.$set(a.cadastroPaciente,"cidade",t)},expression:"cadastroPaciente.cidade"}}),e("q-input",{ref:"bairro",staticClass:"q-pa-xs col-12 col-sm-4 col-md-2 col-lg-3",attrs:{label:"Bairro",maxlength:"100",dense:"",rules:[function(t){return 0!=t.length||0==a.validaEndereco||"Preencha o bairro"}]},on:{input:a.validarEndereco},model:{value:a.cadastroPaciente.bairro,callback:function(t){a.$set(a.cadastroPaciente,"bairro",t)},expression:"cadastroPaciente.bairro"}})],1)]),e("div",{staticClass:"col-12 col-lg-6"},[e("fieldset",{staticClass:"row q-pb-lg"},[e("legend",[a._v("Dados Cadastrais")]),e("q-input",{staticClass:"q-pa-xs col-12 col-sm-3 col-md-2 col-lg-3",attrs:{label:"SUS",mask:"###############",rules:[function(a){return a.length>0||"O registro SUS não pode ser nulo"}],"unmasked-value":"",dense:""},model:{value:a.cadastroPaciente.sus,callback:function(t){a.$set(a.cadastroPaciente,"sus",t)},expression:"cadastroPaciente.sus"}}),e("q-input",{staticClass:"q-pa-xs col-12 col-sm-2 col-md-2 col-lg-3",attrs:{label:"RH",mask:"##########",rules:[function(a){return a.length>0||"Preencha o registro hospitalar"}],"unmasked-value":"",dense:""},model:{value:a.cadastroPaciente.rh,callback:function(t){a.$set(a.cadastroPaciente,"rh",t)},expression:"cadastroPaciente.rh"}}),e("q-input",{staticClass:"q-pa-xs col-12 col-sm-3 col-md-2 col-lg-3",attrs:{dense:"",readonly:""},model:{value:a.labelInstituicao,callback:function(t){a.labelInstituicao=t},expression:"labelInstituicao"}}),e("q-select",{staticClass:"q-pa-xs col-12 col-sm-4 col-md-2 col-lg-3",attrs:{options:a.optCor,label:"Cor",dense:"","emit-value":"","map-options":""},model:{value:a.cadastroPaciente.cor,callback:function(t){a.$set(a.cadastroPaciente,"cor",t)},expression:"cadastroPaciente.cor"}}),e("q-select",{staticClass:"q-pa-xs col-11 col-sm-5 col-md-3 col-lg-4",attrs:{options:a.optIndicacao,label:"Indicação",dense:"","emit-value":"","map-options":""},model:{value:a.cadastroPaciente.indicacao,callback:function(t){a.$set(a.cadastroPaciente,"indicacao",t)},expression:"cadastroPaciente.indicacao"}}),e("q-btn",{staticClass:"q-pa-xs col-xs-1 col-sm-1 col-md-1 col-lg-1",attrs:{id:"cadastrar_indicacao",icon:"add",flat:"",dense:"",color:"primary"},on:{click:function(t){a.popupCadastroInd=!0}}}),e("q-select",{staticClass:"q-pa-xs col-12 col-sm-4 col-md-3 col-lg-3",attrs:{options:a.optEstadoCivil,label:"Estado Civil",dense:"","emit-value":"","map-options":""},model:{value:a.cadastroPaciente.estado_civil,callback:function(t){a.$set(a.cadastroPaciente,"estado_civil",t)},expression:"cadastroPaciente.estado_civil"}}),e("q-select",{staticClass:"q-pa-xs col-12 col-sm-2 col-md-2 col-lg-2",attrs:{options:a.optTipoSanguineo,label:"Tipo Sanguíneo",dense:"","emit-value":"","map-options":""},model:{value:a.cadastroPaciente.tipo_sanguineo,callback:function(t){a.$set(a.cadastroPaciente,"tipo_sanguineo",t)},expression:"cadastroPaciente.tipo_sanguineo"}}),e("q-select",{staticClass:"q-pa-xs col-12 col-sm-1 col-md-1 col-lg-2",attrs:{options:a.optFatorRh,label:"Fator RH",dense:"","emit-value":"","map-options":""},model:{value:a.cadastroPaciente.fator_rh,callback:function(t){a.$set(a.cadastroPaciente,"fator_rh",t)},expression:"cadastroPaciente.fator_rh"}}),e("q-select",{staticClass:"q-pa-xs col-12 col-sm-8 col-md-6 col-lg-6",attrs:{options:a.optEscolaridade,label:"Escolaridade",dense:"","emit-value":"","map-options":""},model:{value:a.cadastroPaciente.escolaridade,callback:function(t){a.$set(a.cadastroPaciente,"escolaridade",t)},expression:"cadastroPaciente.escolaridade"}}),e("q-input",{staticClass:"q-pa-xs col-12 col-sm-3 col-md-2 col-lg-3",attrs:{label:"Telefone Próprio",mask:a.mascaraTelProprio,maxlength:"14",rules:[function(a){return 0==a.length||10==a.length||11==a.length||"O telefone deve ter pelo menos 8 dígitos, excluindo o DDD"}],"unmasked-value":"",dense:""},on:{input:function(t){return a.alteracaoTel()}},model:{value:a.cadastroPaciente.tel_proprio,callback:function(t){a.$set(a.cadastroPaciente,"tel_proprio",t)},expression:"cadastroPaciente.tel_proprio"}}),e("q-input",{staticClass:"q-pa-xs col-12 col-sm-4 col-md-2 col-lg-3",attrs:{label:"Telefone Contato",mask:a.mascaraTelContato,maxlength:"14",rules:[function(a){return 0==a.length||10==a.length||11==a.length||"O telefone deve ter pelo menos 8 dígitos, excluíndo o DDD"}],"unmasked-value":"",dense:""},on:{input:function(t){return a.alteracaoTel()}},model:{value:a.cadastroPaciente.tel_contato,callback:function(t){a.$set(a.cadastroPaciente,"tel_contato",t)},expression:"cadastroPaciente.tel_contato"}}),e("q-input",{ref:"nome_contato",staticClass:"q-pa-xs col-12 col-sm-4 col-md-4 col-lg-2",attrs:{label:"Nome Contato",maxlength:"250",dense:"","reactive-rules":""},on:{input:function(t){return a.validarLetrasEspacos(a.cadastroPaciente.nome_contato,"contato")}},model:{value:a.cadastroPaciente.nome_contato,callback:function(t){a.$set(a.cadastroPaciente,"nome_contato",t)},expression:"cadastroPaciente.nome_contato"}}),e("q-input",{staticClass:"q-pa-xs col-12 col-sm-4 col-md-4 col-lg-3",attrs:{type:"email",label:"E-mail",maxlength:"50",dense:""},model:{value:a.cadastroPaciente.email,callback:function(t){a.$set(a.cadastroPaciente,"email",t)},expression:"cadastroPaciente.email"}}),e("q-input",{staticClass:"q-pa-xs col-12 col-sm-6 col-md-6 col-lg-3",attrs:{label:"Reações Alérgicas a Medicamentos",maxlength:"250",dense:""},model:{value:a.cadastroPaciente.reacoes_alergicas,callback:function(t){a.$set(a.cadastroPaciente,"reacoes_alergicas",t)},expression:"cadastroPaciente.reacoes_alergicas"}}),e("q-select",{staticClass:"q-pa-xs col-12 col-sm-6 col-md-6 col-lg-4",attrs:{options:a.optPreceptor,placeholder:"Nome ou CRM",label:"Preceptor",dense:"","use-input":"","hide-selected":"","fill-input":"","input-debounce":"0",rules:[function(a){return""!=a&&void 0!=a||"O preceptor não pode ser nulo"}],"emit-value":"","map-options":""},on:{filter:a.filtroAutocomplete},model:{value:a.cadastroPaciente.preceptor,callback:function(t){a.$set(a.cadastroPaciente,"preceptor",t)},expression:"cadastroPaciente.preceptor"}})],1)])]),e("div",{staticClass:"flex flex-center"},[e("q-btn",{staticClass:"q-pa-xs q-ma-md col-1",staticStyle:{"margin-top":"2%"},attrs:{label:"Gravar Dados",type:"submit",color:"primary"}}),""==this.cadastroPaciente.id_usuario||void 0==this.cadastroPaciente.id_usuario?e("q-btn",{staticClass:"q-pa-xs q-ma-md col-1",staticStyle:{"margin-top":"2%"},attrs:{label:"Limpar",type:"reset",color:"primary"}}):a._e(),e("q-btn",{staticClass:"q-pa-xs q-ma-md col-1",staticStyle:{"margin-top":"2%"},attrs:{label:"Voltar",to:{name:"cadastro_registro_mola",params:{id_paciente:this.cadastroPaciente.id_usuario}},color:"primary"}})],1)]),e("q-dialog",{staticClass:"full-width",model:{value:a.popupCadastroInd,callback:function(t){a.popupCadastroInd=t},expression:"popupCadastroInd"}},[e("CadastroEdicaoIndicacao")],1),e("q-dialog",{staticClass:"full-width",model:{value:a.popupCadastroInst,callback:function(t){a.popupCadastroInst=t},expression:"popupCadastroInst"}},[e("CadastroEdicaoInstituicao")],1),e("q-dialog",{attrs:{persistent:""},model:{value:a.popupResetarSenha,callback:function(t){a.popupResetarSenha=t},expression:"popupResetarSenha"}},[e("q-card",[e("q-toolbar",{staticClass:"bg-primary text-white"},[e("q-toolbar-title",[a._v("Confirmar Reset de Senha")]),e("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",round:"",dense:"",icon:"close"}})],1),e("q-card-section",{staticClass:"row items-center"},[e("span",{staticClass:"q-ml-sm"},[a._v("Ao confirmar esta operação, sua senha será resetada para o valor\n          padrão, ou seja, o mesmo valor do seu login. Está ação é\n          irreversível. Deseja prosseguir?.")])]),e("q-card-actions",{attrs:{align:"right"}},[e("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",label:"Cancelar",color:"primary"}}),e("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",label:"Confirmar",color:"primary"},on:{click:a.resetarSenha}})],1)],1)],1)],1)},i=[],s=e("ded3"),c=e.n(s),r=(e("e6cf"),e("51e2")),n=e("5cbe"),l=e("2f62"),d={name:"Cadastro_Paciente",components:{CadastroEdicaoIndicacao:r["a"],CadastroEdicaoInstituicao:n["a"]},data(){return{popupCadastroInd:!1,popupCadastroInst:!1,popupResetarSenha:!1,loginDisponivel:!0,popupAbrirCalendario:!1,cadastroPacOrig:!1,utilizarRg:"",labelInstituicao:"",validaEndereco:!1,atualizarValidacoes:0,mascaraTelProprio:"(##)#####-####",mascaraTelContato:"(##)#####-####",cadastroPaciente:{nome:"",data_nasc:"",cpf:"",nome_mae:"",cep:"",logradouro:"",numero:"",complemento:"",uf:"",cidade:"",bairro:"",sus:"",rh:"",instituicao:"",cor:"",indicacao:"",estado_civil:"",tipo_sanguineo:"",fator_rh:"",tel_proprio:"",tel_contato:"",nome_contato:"",email:"",reacoes_alergicas:"",preceptor:"",rg:"",rne:"",nacionalidade:"",login:"",escolaridade:"",cadastrante:"",id_usuario:""},optUf:["","AC","AL","AP","AM","BA","CE","DF","ES","GO","MA","MT","MS","MG","PA","PB","PR","PE","PI","RJ","RN","RS","RO","RR","SC","SP","SE","TO"],optInstituicao:[],optPreceptor:[],optPrecepOriginal:[],optCor:[{label:"",value:""},{label:"Branca",value:1},{label:"Preta",value:2},{label:"Amarela",value:3},{label:"Parda",value:4},{label:"Indígena",value:5},{label:"Sem declaração",value:6}],optIndicacao:[],optEstadoCivil:[{label:"",value:""},{label:"Casada",value:1},{label:"Divorciada",value:2},{label:"Viúva",value:3},{label:"Solteira",value:4},{label:"Em união estável",value:5},{label:"Não desejo declarar",value:6}],optTipoSanguineo:[{label:"",value:""},{label:"O",value:1},{label:"A",value:2},{label:"B",value:3},{label:"AB",value:4}],optFatorRh:[{label:"",value:""},{label:"+",value:1},{label:"-",value:2}],optEscolaridade:[{label:"",value:""},{label:"Não informado",value:1},{label:"Sem instrução/Fundamental incompleto",value:2},{label:"Fundamental completo/Médio incompleto",value:3},{label:"Médio completo/Superior incompleto",value:4},{label:"Superior completo/Pós-graduação incompleto",value:5},{label:"Pós-graduação completo",value:6}],consultaUsuario:{nome:"",crm:"",uf_crm:"",tipo:"",situacao:"",categoria:"",id_inst:""}}},async mounted(){let a=this.$store.getters["principal/dadosUsuarioLogado"];this.cadastroPaciente.cadastrante=a.id_usuario;let t=await this.carregarInst(),e=t.resultado.filter((a=>a.id==this.dadosUsuarioLogado.id_inst)).map((a=>({value:a.id,label:a.nome_inst})));this.optInstituicao=e;let o=await this.carregarInd();console.log("ind ",o.resultado);let i=o.resultado.map((a=>({value:a.id,label:a.descricao})));this.optIndicacao=i,this.consultaUsuario.id_inst=this.dadosUsuarioLogado.id_inst;let s=await this.carregarPreceptores(this.consultaUsuario),c=s.resultado.filter((a=>{if("docente"==a.categoria||"contratado"==a.categoria||"outros"==a.categoria)return a}));this.optPreceptor=c.map((a=>({value:a.id_usuario,label:a.nome+" CRM "+a.crm+" "+a.uf_crm}))),this.optPrecepOriginal=this.optPreceptor,this.cadastroPaciente.id_usuario=this.$route.params.id,""!=this.cadastroPaciente.id_usuario&&void 0!=this.cadastroPaciente.id_usuario&&await this.carregarDadosPaciente(this.cadastroPaciente.id_usuario),this.labelInstituicao=this.optInstituicao[0].label,""!=this.cadastroPaciente.rg?this.utilizarRg="rg":""!=this.cadastroPaciente.rne&&(this.utilizarRg="rne")},methods:{async onSubmit(){if(""!=this.cadastroPaciente.id_usuario&&void 0!=this.cadastroPaciente.id_usuario){console.log("alteração");await this.alterarPaciente()}else{console.log("incluir");await this.incluirPaciente()}},onReset(){this.cadastroPaciente.nome="",this.cadastroPaciente.data_nasc="",this.cadastroPaciente.cpf="",this.cadastroPaciente.nome_mae="",this.cadastroPaciente.cep="",this.cadastroPaciente.logradouro="",this.cadastroPaciente.numero="",this.cadastroPaciente.complemento="",this.cadastroPaciente.uf="",this.cadastroPaciente.cidade="",this.cadastroPaciente.bairro="",this.cadastroPaciente.sus="",this.cadastroPaciente.rh="",this.cadastroPaciente.instituicao="",this.cadastroPaciente.cor="",this.cadastroPaciente.escolaridade="",this.cadastroPaciente.tipo_sanguineo="",this.cadastroPaciente.fator_rh="",this.cadastroPaciente.indicacao="",this.cadastroPaciente.estado_civil="",this.cadastroPaciente.outros="",this.cadastroPaciente.tel_proprio="",this.cadastroPaciente.tel_contato="",this.cadastroPaciente.nome_contato="",this.cadastroPaciente.email="",this.cadastroPaciente.reacoes_alergicas="",this.cadastroPaciente.preceptor="",this.cadastroPaciente.rg="",this.cadastroPaciente.rne="",this.cadastroPaciente.nacionalidade="",this.cadastroPaciente.login="",this.cadastroPaciente.senha="",this.utilizarRg="",this.validaEndereco=!1},carregarInst(){return new Promise(((a,t)=>{this.$axios.get("/combo_inst").then((t=>{console.log(t),a(t.data)})).catch((a=>{this.$store.dispatch("principal/verificaErro",a),t(a)}))}))},carregarInd(){let a={descricao:""};return new Promise(((t,e)=>{this.$axios.post("/consultar_indicacao",a).then((a=>{console.log(a),t(a.data)})).catch((a=>{this.$store.dispatch("principal/verificaErro",a),e(a)}))}))},carregarPreceptores(a){return new Promise(((t,e)=>{this.$axios.post("/consultar_medicos",a).then((a=>{console.log(a),t(a.data)})).catch((a=>{this.$store.dispatch("principal/verificaErro",a),e(a)}))}))},carregarDadosPaciente(a){return new Promise(((t,e)=>{this.$axios.post("/dados_paciente",{id_usuario:a}).then((a=>{console.log("response",a.data.resultado[0]),this.cadastroPaciente=a.data.resultado[0],this.cadastroPacOrig=a.data.resultado[0],this.cadastroPaciente.data_nasc=a.data.resultado[0].data_nasc.substring(0,10);var e=this.cadastroPaciente.data_nasc.split("-")[0],o=this.cadastroPaciente.data_nasc.split("-")[1],i=this.cadastroPaciente.data_nasc.split("-")[2];this.cadastroPaciente.data_nasc=("0"+i).slice(-2)+"/"+("0"+o).slice(-2)+"/"+e,console.log("R",this.cadastroPaciente),console.log("S",this.cadastroPacOrig),t(a.data)})).catch((a=>{this.$store.dispatch("principal/verificaErro",a),e(a)}))}))},incluirPaciente(){console.log(this.cadastroPaciente.data_nasc);var a=this.cadastroPaciente.data_nasc.split("/")[0],t=this.cadastroPaciente.data_nasc.split("/")[1],e=this.cadastroPaciente.data_nasc.split("/")[2];return this.cadastroPaciente.data_nasc=e+"-"+("0"+t).slice(-2)+"-"+("0"+a).slice(-2),console.log(this.cadastroPaciente.data_nasc),new Promise(((a,t)=>{let e=this.cadastroPaciente;console.log("dat 1",e),e.instituicao=this.optInstituicao[0].value,console.log("inst",e.instituicao),""==e.cor?e.cor=null:e.cor=e.cor,""==e.estado_civil?e.estado_civil=null:e.estado_civil=e.estado_civil,""==e.tipo_sanguineo?e.tipo_sanguineo=null:e.tipo_sanguineo=e.tipo_sanguineo,""==e.fator_rh?e.fator_rh=null:e.fator_rh=e.fator_rh,""==e.escolaridade?e.escolaridade=null:e.escolaridade=e.escolaridade,""==e.tel_proprio?e.tel_proprio=null:e.tel_proprio=e.tel_proprio,""==e.tel_contato?e.tel_contato=null:e.tel_contato=e.tel_contato,""==e.indicacao?e.indicacao=null:e.indicacao=e.indicacao,console.log("dados",e),this.$axios.post("/incluir_paciente",e).then((t=>{this.$router.push({name:"consulta_paciente"}),a(t.data)})).catch((a=>{this.$store.dispatch("principal/verificaErro",a),t(a)}))}))},alterarPaciente(){console.log(this.cadastroPaciente.data_nasc);var a=this.cadastroPaciente.data_nasc.split("/")[0],t=this.cadastroPaciente.data_nasc.split("/")[1],e=this.cadastroPaciente.data_nasc.split("/")[2];return this.cadastroPaciente.data_nasc=e+"-"+("0"+t).slice(-2)+"-"+("0"+a).slice(-2),console.log(this.cadastroPaciente.data_nasc),new Promise(((a,t)=>{let e=this.cadastroPaciente;console.log("dat 2",e),e.instituicao=this.optInstituicao[0].value,console.log("inst",e.instituicao),console.log(this.cadastroPacOrig),""==e.cor?e.cor=null:e.cor=e.cor,""==e.estado_civil?e.estado_civil=null:e.estado_civil=e.estado_civil,""==e.tipo_sanguineo?e.tipo_sanguineo=null:e.tipo_sanguineo=e.tipo_sanguineo,""==e.fator_rh?e.fator_rh=null:e.fator_rh=e.fator_rh,""==e.escolaridade?e.escolaridade=null:e.escolaridade=e.escolaridade,""==e.tel_proprio?e.tel_proprio=null:e.tel_proprio=e.tel_proprio,""==e.tel_contato?e.tel_contato=null:e.tel_contato=e.tel_contato,""==e.indicacao?e.indicacao=null:e.indicacao=e.indicacao,console.log("dados",e),this.$axios.post("/alterar_paciente",e).then((t=>{this.$router.push({name:"consulta_paciente"}),a(t.data)})).catch((a=>{this.$store.dispatch("principal/verificaErro",a),t(a)}))}))},async filtroAutocomplete(a,t,e){console.log("opt",this.optPreceptor),console.log(a),t((()=>{""!=a?(this.optPreceptor=this.optPreceptor.filter((t=>-1!=t.label.toLowerCase().indexOf(a.toLowerCase()))),console.log("opt2",this.optPreceptor)):this.optPreceptor=this.optPrecepOriginal}))},resetarSenha(){return new Promise(((a,t)=>{let e={id_usuario:this.cadastroPaciente.id_usuario,login:this.cadastroPaciente.login};this.$axios.post("/resetar_senha",e).then((t=>{console.log(t),alert(t.data.resultado),a(t.data)})).catch((a=>{this.$store.dispatch("principal/verificaErro",a),t(a)}))}))},verificarDisponibilidadeLogin(){let a={login:this.cadastroPaciente.login,id_usuario:this.cadastroPaciente.id_usuario};this.$axios.post("/login_disponivel",a).then((a=>{console.log("response",a),this.loginDisponivel=a.data.disponivel})).catch((a=>{this.$store.dispatch("principal/verificaErro",a)}))},atualizarDados(a){this.utilizarRg=a,"rg"==a?(this.cadastroPaciente.rne="",this.cadastroPaciente.nacionalidade=""):"rne"==a&&(this.cadastroPaciente.rg="")},atualizarMascaraData(){alert(this.cadastroPaciente.data_nasc),this.popupAbrirCalendario=!1},validarEndereco(a="nenhum"){"logradouro"==a?this.validarLetrasEspacos(this.cadastroPaciente.logradouro,"logradouro"):"cidade"==a&&this.validarLetrasEspacos(this.cadastroPaciente.cidade,"cidade"),8==this.cadastroPaciente.cep.length||""!=this.cadastroPaciente.logradouro||""!=this.cadastroPaciente.numero.length||""!=this.cadastroPaciente.complemento||""!=this.cadastroPaciente.uf.length||""!=this.cadastroPaciente.cidade||""!=this.cadastroPaciente.bairro?this.validaEndereco=!0:this.validaEndereco=!1,console.log("validaEndereco",this.validaEndereco),this.$refs.cep.validate(),this.$refs.logradouro.validate(),this.$refs.numero.validate(),this.$refs.complemento.validate(),this.$refs.uf.validate(),this.$refs.cidade.validate(),this.$refs.bairro.validate()},alteracaoTel(){10==this.cadastroPaciente.tel_proprio.length?this.mascaraTelProprio="(##)####-#####":11==this.cadastroPaciente.tel_proprio.length&&(this.mascaraTelProprio="(##)#####-####"),10==this.cadastroPaciente.tel_contato.length?this.mascaraTelContato="(##)####-#####":11==this.cadastroPaciente.tel_contato.length&&(this.mascaraTelContato="(##)#####-####")},validarLetrasEspacos(a,t){let e=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"," ","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","ã","õ","Ã","Õ","á","é","í","ó","ú","Á","É","Í","Ó","Ú"],o=a.substring(0,a.length-1);if(!e.includes(a.slice(-1)))switch(t){case"nome":this.cadastroPaciente.nome=o,this.$refs.nome.$forceUpdate();break;case"mae":this.cadastroPaciente.nome_mae=o,this.$refs.nome_mae.$forceUpdate();break;case"logradouro":this.cadastroPaciente.logradouro=o,this.$refs.logradouro.$forceUpdate();break;case"cidade":this.cadastroPaciente.cidade=o,this.$refs.cidade.$forceUpdate();break;case"contato":this.cadastroPaciente.nome_contato=o,this.$refs.nome_contato.$forceUpdate();break;case"nacionalidade":this.cadastroPaciente.nacionalidade=o,this.$refs.nacionalidade.$forceUpdate();break}}},computed:c()({},Object(l["c"])("principal",["usuarioLogado","dadosUsuarioLogado"]))},u=d,p=e("2877"),m=e("9989"),h=e("0378"),g=e("27f9"),P=e("0016"),f=e("05c0"),v=e("9c40"),b=e("24e8"),_=e("52ee"),x=e("3786"),q=e("ddd8"),C=e("f09f"),I=e("65c6"),$=e("6ac5"),k=e("a370"),E=e("4b7e"),R=e("7f67"),D=e("eebe"),w=e.n(D),y=Object(p["a"])(u,o,i,!1,null,null,null);t["default"]=y.exports;w()(y,"components",{QPage:m["a"],QForm:h["a"],QInput:g["a"],QIcon:P["a"],QTooltip:f["a"],QBtn:v["a"],QDialog:b["a"],QDate:_["a"],QRadio:x["a"],QSelect:q["a"],QCard:C["a"],QToolbar:I["a"],QToolbarTitle:$["a"],QCardSection:k["a"],QCardActions:E["a"]}),w()(y,"directives",{ClosePopup:R["a"]})},"51e2":function(a,t,e){"use strict";var o=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("q-card",[e("q-toolbar",{staticClass:"bg-primary text-white"},[e("q-toolbar-title",[a._v("Adicionar Indicação")]),e("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",round:"",dense:"",icon:"close"}})],1),e("q-card-section",{staticClass:"q-pt-none"},[e("q-form",{on:{submit:a.onSubmit,reset:a.onReset}},[e("q-input",{attrs:{type:"text",label:"Descrição",rules:[function(a){return a.length>0||"Digite uma indicação"},function(a){return a.length<=50||"A indicação deve ter no máximo 50 caracteres"}]},model:{value:a.cadastroIndicacao.descricao,callback:function(t){a.$set(a.cadastroIndicacao,"descricao",t)},expression:"cadastroIndicacao.descricao"}}),e("br"),e("div",{staticClass:"flex-center q-gutter-xl"},[e("q-btn",{attrs:{type:"submit",color:"primary",label:"Gravar"}})],1)],1)],1)],1)},i=[],s=(e("e6cf"),{name:"CadastroEdicaoIndicacao",data(){return{cadastroIndicacao:{descricao:""},modalCadastroInd:!0}},methods:{async onSubmit(){console.log("incluir");await this.incluirIndicacao()},onReset(){this.cadastroIndicacao.descricao=""},incluirIndicacao(){return new Promise(((a,t)=>{let e=this.cadastroIndicacao;this.$axios.post("/incluir_indicacao",e).then((t=>{this.$router.go(),a(t.data)})).catch((a=>{this.$store.dispatch("principal/verificaErro",a),t(a)}))}))}}}),c=s,r=e("2877"),n=e("f09f"),l=e("65c6"),d=e("6ac5"),u=e("9c40"),p=e("a370"),m=e("0378"),h=e("27f9"),g=e("7f67"),P=e("eebe"),f=e.n(P),v=Object(r["a"])(c,o,i,!1,null,null,null);t["a"]=v.exports;f()(v,"components",{QCard:n["a"],QToolbar:l["a"],QToolbarTitle:d["a"],QBtn:u["a"],QCardSection:p["a"],QForm:m["a"],QInput:h["a"]}),f()(v,"directives",{ClosePopup:g["a"]})},"5cbe":function(a,t,e){"use strict";var o=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("q-card",[e("q-toolbar",{staticClass:"bg-primary text-white"},[e("q-toolbar-title",[a._v("Adicionar Instituição")]),e("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",round:"",dense:"",icon:"close"}})],1),e("q-card-section",{staticClass:"q-pt-none"},[e("q-form",{on:{submit:a.onSubmit,reset:a.onReset}},[a.id_inst?e("span",[a._v(" ID: "+a._s(a.id_inst)+" ")]):a._e(),e("q-input",{attrs:{type:"text",label:"Nome",rules:[function(a){return a.length>0||"Digite uma instituição"},function(a){return a.length<=250||"A intituição deve ter no máximo 250 caracteres"}]},model:{value:a.cadastroInstituicao.nome,callback:function(t){a.$set(a.cadastroInstituicao,"nome",t)},expression:"cadastroInstituicao.nome"}}),e("q-input",{attrs:{type:"text",label:"CEP",rules:[function(a){return a.length>0||"Digite um CEP"},function(a){return a.length<=8||"O CEP deve ter no máximo 8 caracteres"}]},model:{value:a.cadastroInstituicao.cep,callback:function(t){a.$set(a.cadastroInstituicao,"cep",t)},expression:"cadastroInstituicao.cep"}}),e("q-input",{attrs:{type:"text",label:"Logradouro",rules:[function(a){return a.length>0||"Digite um logradouro"},function(a){return a.length<=250||"O logradouro deve ter no máximo 250 caracteres"}]},model:{value:a.cadastroInstituicao.logradouro,callback:function(t){a.$set(a.cadastroInstituicao,"logradouro",t)},expression:"cadastroInstituicao.logradouro"}}),e("q-input",{attrs:{type:"text",label:"Número",rules:[function(a){return a.length>0||"Digite um número"},function(a){return a.length<=7||"O número deve ter no máximo 7 caracteres"}]},model:{value:a.cadastroInstituicao.numero,callback:function(t){a.$set(a.cadastroInstituicao,"numero",t)},expression:"cadastroInstituicao.numero"}}),e("q-input",{attrs:{type:"text",label:"Complemento"},model:{value:a.cadastroInstituicao.complemento,callback:function(t){a.$set(a.cadastroInstituicao,"complemento",t)},expression:"cadastroInstituicao.complemento"}}),e("q-input",{attrs:{type:"text",label:"UF",rules:[function(a){return a.length>0||"Digite uma Unidade da Federação"},function(a){return a.length<=2||"A Unidade da Federação deve ter no máximo 2 caracteres"}]},model:{value:a.cadastroInstituicao.uf,callback:function(t){a.$set(a.cadastroInstituicao,"uf",t)},expression:"cadastroInstituicao.uf"}}),e("q-input",{attrs:{type:"text",label:"Cidade",rules:[function(a){return a.length>0||"Digite uma cidade"},function(a){return a.length<=28||"A cidade deve ter no máximo 28 caracteres"}]},model:{value:a.cadastroInstituicao.cidade,callback:function(t){a.$set(a.cadastroInstituicao,"cidade",t)},expression:"cadastroInstituicao.cidade"}}),e("q-input",{attrs:{type:"text",label:"Bairro",rules:[function(a){return a.length>0||"Digite um bairro"},function(a){return a.length<=100||"O bairro deve ter no máximo 100 caracteres"}]},model:{value:a.cadastroInstituicao.bairro,callback:function(t){a.$set(a.cadastroInstituicao,"bairro",t)},expression:"cadastroInstituicao.bairro"}}),e("br"),e("div",{staticClass:"flex-center q-gutter-xl"},[e("q-btn",{attrs:{type:"submit",color:"primary",label:"Gravar"}})],1)],1)],1)],1)},i=[],s=(e("e6cf"),{name:"cadastroInstituicao",data(){return{cadastroInstituicao:{id_inst:"",descricao:"",nome:"",cep:"",logradouro:"",numero:"",complemento:"",uf:"",cidade:"",bairro:""},modalCadastroInst:!0}},async mounted(){this.id_inst&&(console.log("alterar"),await this.carregarDadosInst(this.id_inst))},props:["id_inst"],methods:{async onSubmit(){this.id_inst?(console.log("alterar"),await this.alterarInstituicao(this.id_inst)):console.log("incluir")},onReset(){this.cadastroInstituicao.descricao=""},alterarInstituicao(a){return new Promise(((t,e)=>{let o=this.cadastroInstituicao;o.id_inst=a,this.$axios.post("/alterar_instituicao",o).then((a=>{this.$router.go(),t(a.data)})).catch((a=>{this.$store.dispatch("principal/verificaErro",a),e(a)}))}))},carregarDadosInst(a){return new Promise(((t,e)=>{this.$axios.post("/dados_instituicao",{id_inst:a}).then((a=>{console.log(a.data.resultado[0].nome),this.cadastroInstituicao.nome=a.data.resultado[0].nome,this.cadastroInstituicao.cep=a.data.resultado[0].cep,this.cadastroInstituicao.logradouro=a.data.resultado[0].logradouro,this.cadastroInstituicao.numero=a.data.resultado[0].numero,this.cadastroInstituicao.complemento=a.data.resultado[0].complemento,this.cadastroInstituicao.uf=a.data.resultado[0].uf,this.cadastroInstituicao.cidade=a.data.resultado[0].cidade,this.cadastroInstituicao.bairro=a.data.resultado[0].bairro,t(a.data)})).catch((a=>{this.$store.dispatch("principal/verificaErro",a),e(a)}))}))},incluirInstituicao(){return new Promise(((a,t)=>{let e=this.cadastroInstituicao;this.$axios.post("/incluir_instituicao",e).then((t=>{this.$router.go(),a(t.data)})).catch((a=>{this.$store.dispatch("principal/verificaErro",a),t(a)}))}))}}}),c=s,r=e("2877"),n=e("f09f"),l=e("65c6"),d=e("6ac5"),u=e("9c40"),p=e("a370"),m=e("0378"),h=e("27f9"),g=e("7f67"),P=e("eebe"),f=e.n(P),v=Object(r["a"])(c,o,i,!1,null,null,null);t["a"]=v.exports;f()(v,"components",{QCard:n["a"],QToolbar:l["a"],QToolbarTitle:d["a"],QBtn:u["a"],QCardSection:p["a"],QForm:m["a"],QInput:h["a"]}),f()(v,"directives",{ClosePopup:g["a"]})}}]);