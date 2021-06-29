(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[8],{"1a3f":function(a,e,t){"use strict";t.r(e);var i=function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("q-page",{staticClass:"flex flex-center"},[t("h6",{staticStyle:{"font-size":"18px"}},[t("b",[a._v("Cadastro Paciente")])]),t("q-form",{staticClass:"q-gutter-md q-pa-xs q-gutter-y-xs",staticStyle:{width:"100%","padding-bottom":"135%"},on:{submit:function(e){return e.stopPropagation(),a.onSubmit(e)},reset:a.onReset}},[t("div",{staticClass:"row"},[t("div",{staticClass:"col-12 col-lg-6"},[t("fieldset",{staticClass:"row",staticStyle:{"border-radius":"8px"}},[t("legend",[a._v("Dados Login")]),t("q-input",{staticClass:"q-pa-xs q-pb-lg col-xs-11 col-sm-6 col-md-6 col-lg-6",attrs:{label:"Login",maxlength:"50",rules:[function(a){return a.length>0||"Digite um login"},function(a){return a.length>3||"Digite um login com pelo menos 4 digitos"},function(a){return a.length<=50||"O login deve ter no máximo 50 caracteres"}]},on:{keyup:a.verificarDisponibilidadeLogin},model:{value:a.cadastroPaciente.login,callback:function(e){a.$set(a.cadastroPaciente,"login",e)},expression:"cadastroPaciente.login"}}),a.cadastroPaciente.login.length>3&&a.loginDisponivel?t("span",{staticClass:"text-positive q-pt-lg"},[t("q-icon",{staticStyle:{"font-size":"24px"},attrs:{name:"check_circle"}}),t("q-tooltip",[a._v("Disponível")])],1):a._e(),a.cadastroPaciente.login.length>3&&!a.loginDisponivel?t("span",{staticClass:"text-negative q-pt-lg"},[t("q-icon",{staticStyle:{"font-size":"24px"},attrs:{name:"cancel"}}),t("q-tooltip",[a._v("Indisponível")])],1):a._e(),""!=this.cadastroPaciente.id_usuario&&void 0!=this.cadastroPaciente.id_usuario?t("q-btn",{staticClass:"q-pa-xs q-ml-xs q-mt-md q-mb-md col-xs-12 col-sm-4 col-md-2 col-lg-5",attrs:{label:"Resetar Senha",color:"primary"},on:{click:function(e){a.popupResetarSenha=!0},keyup:a.verificarDisponibilidadeLogin}}):a._e()],1)]),t("div",{staticClass:"col-12 col-lg-6"},[t("fieldset",{staticClass:"row q-pb-lg",staticStyle:{"border-radius":"8px"}},[t("legend",[a._v("Dados Pessoais")]),t("q-input",{ref:"nome",staticClass:"q-pa-xs col-12 col-sm-4 col-md-3 col-lg-3",attrs:{label:"Nome","max-length":"250",dense:"",rules:[function(a){return a.length>0||"Digite um Nome"},function(a){return a.length<=250||"O nome deve ter no máximo 250 caracteres"}],"reactive-rules":""},on:{input:function(e){return a.validarLetrasEspacos(a.cadastroPaciente.nome,"nome")}},model:{value:a.cadastroPaciente.nome,callback:function(e){a.$set(a.cadastroPaciente,"nome",e)},expression:"cadastroPaciente.nome"}}),t("q-input",{staticClass:"q-pa-xs col-12 col-sm-4 col-md-3 col-lg-3",attrs:{dense:"",rules:[function(e){return 10==e.length&&1==a.validaDataNasc||"Digite uma data válida"}],label:"Data Nascimento",mask:"##/##/####"},on:{input:function(e){return a.validarDataNasc("input")}},scopedSlots:a._u([{key:"append",fn:function(){return[t("q-icon",{staticClass:"cursor-pointer",attrs:{name:"calendar_today"},on:{click:function(e){a.popupAbrirCalendario=!0}}},[t("q-dialog",{model:{value:a.popupAbrirCalendario,callback:function(e){a.popupAbrirCalendario=e},expression:"popupAbrirCalendario"}},[t("q-date",{attrs:{"first-day-of-week":"1",mask:"DD/MM/YYYY"},on:{input:function(e){return a.validarDataNasc("calendario")}},model:{value:a.dataCalendario,callback:function(e){a.dataCalendario=e},expression:"dataCalendario"}})],1)],1)]},proxy:!0}]),model:{value:a.cadastroPaciente.data_nasc,callback:function(e){a.$set(a.cadastroPaciente,"data_nasc",e)},expression:"cadastroPaciente.data_nasc"}}),t("q-input",{staticClass:"q-pa-xs col-12 col-sm-4 col-md-3 col-lg-3",attrs:{label:"CPF",mask:"###.###.###-##","unmasked-value":"",dense:"",rules:[function(e){return 11==e.length&&1==a.validaCpf||"CPF deve ter 11 dígitos"}]},on:{input:a.validarCpf},model:{value:a.cadastroPaciente.cpf,callback:function(e){a.$set(a.cadastroPaciente,"cpf",e)},expression:"cadastroPaciente.cpf"}}),t("q-input",{ref:"nome_mae",staticClass:"q-pa-xs col-12 col-sm-3 col-md-3 col-lg-3",attrs:{label:"Nome da Mãe","max-length":"250",dense:"","reactive-rules":""},on:{input:function(e){return a.validarLetrasEspacos(a.cadastroPaciente.nome_mae,"mae")}},model:{value:a.cadastroPaciente.nome_mae,callback:function(e){a.$set(a.cadastroPaciente,"nome_mae",e)},expression:"cadastroPaciente.nome_mae"}}),t("q-radio",{ref:"radioRg",staticClass:"q-pa-xs",attrs:{val:"rg",label:"RG"},on:{input:function(e){return a.atualizarDados(a.utilizarRg)}},model:{value:a.utilizarRg,callback:function(e){a.utilizarRg=e},expression:"utilizarRg"}}),t("q-radio",{ref:"radioRne",staticClass:"q-pa-xs",attrs:{val:"rne",label:"RNE"},on:{input:function(e){return a.atualizarDados(a.utilizarRg)}},model:{value:a.utilizarRg,callback:function(e){a.utilizarRg=e},expression:"utilizarRg"}}),t("q-input",{directives:[{name:"show",rawName:"v-show",value:"rg"==a.utilizarRg,expression:"utilizarRg == 'rg'"}],ref:"rg",staticClass:"q-pa-xs col-12 col-sm-3 col-md-5 col-lg-4",attrs:{label:"RG",mask:"##.###.###-XX","unmasked-value":"",dense:"",rules:[function(e){return 9==e.length||10==e.length||"rne"==a.utilizarRg||"O RG deve conter 9 ou 10 caracteres"}],"reactive-rules":""},model:{value:a.cadastroPaciente.rg,callback:function(e){a.$set(a.cadastroPaciente,"rg",e)},expression:"cadastroPaciente.rg"}}),t("q-input",{directives:[{name:"show",rawName:"v-show",value:"rne"==a.utilizarRg,expression:"utilizarRg == 'rne'"}],ref:"rne",staticClass:"q-pa-xs col-12 col-sm-3 col-md-5 col-lg-4",attrs:{label:"RNE",mask:"XXXXXXX-X","unmasked-value":"",dense:"",rules:[function(e){return 8==e.length||"rg"==a.utilizarRg||"O RNE deve conter 8 caracteres"}],"reactive-rules":""},model:{value:a.cadastroPaciente.rne,callback:function(e){a.$set(a.cadastroPaciente,"rne",e)},expression:"cadastroPaciente.rne"}}),t("q-input",{directives:[{name:"show",rawName:"v-show",value:"rne"==a.utilizarRg,expression:"utilizarRg == 'rne'"}],ref:"nacionalidade",staticClass:"q-pa-xs col-12 col-sm-3 col-md-5 col-lg-5",attrs:{label:"Nacionalidade","max-length":"250",dense:"",rules:[function(e){return 0!=e.length||"rg"==a.utilizarRg||"Nacionalidade não deve ser nula"}],"reactive-rules":""},on:{input:function(e){return a.validarLetrasEspacos(a.cadastroPaciente.nacionalidade,"nacionalidade")}},model:{value:a.cadastroPaciente.nacionalidade,callback:function(e){a.$set(a.cadastroPaciente,"nacionalidade",e)},expression:"cadastroPaciente.nacionalidade"}})],1)]),t("div",{staticClass:"col-12 col-lg-6"},[t("fieldset",{staticClass:"row q-pb-lg",staticStyle:{"border-radius":"8px"}},[t("legend",[a._v("Endereço Residencial")]),t("q-input",{ref:"cep",staticClass:"q-pa-xs col-12 col-sm-2 col-md-1 col-lg-2",attrs:{label:"CEP",mask:"#####-###","unmasked-value":"",dense:"",rules:[function(e){return 0==e.length&&0==a.validaEndereco||8==e.length||"CEP deve ter 8 dígitos"}]},on:{input:a.validarEndereco},model:{value:a.cadastroPaciente.cep,callback:function(e){a.$set(a.cadastroPaciente,"cep",e)},expression:"cadastroPaciente.cep"}}),t("q-input",{ref:"logradouro",staticClass:"q-pa-xs col-12 col-sm-5 col-md-3 col-lg-4",attrs:{label:"Logradouro",maxlength:"250",dense:"",rules:[function(e){return 0!=e.length||0==a.validaEndereco||"Preencha o logradouro"}]},on:{input:function(e){return a.validarEndereco("logradouro")}},model:{value:a.cadastroPaciente.logradouro,callback:function(e){a.$set(a.cadastroPaciente,"logradouro",e)},expression:"cadastroPaciente.logradouro"}}),t("q-input",{ref:"numero",staticClass:"q-pa-xs col-12 col-sm-2 col-md-1 col-lg-2",attrs:{label:"Número",maxlength:"7",dense:"",rules:[function(e){return 0==a.validaEndereco||0!=e.length||"Preencha o número"}]},on:{input:a.validarEndereco},model:{value:a.cadastroPaciente.numero,callback:function(e){a.$set(a.cadastroPaciente,"numero",e)},expression:"cadastroPaciente.numero"}}),t("q-input",{ref:"complemento",staticClass:"q-pa-xs col-12 col-sm-3 col-md-2 col-lg-4",attrs:{label:"Complemento",maxlength:"250",dense:""},on:{input:a.validarEndereco},model:{value:a.cadastroPaciente.complemento,callback:function(e){a.$set(a.cadastroPaciente,"complemento",e)},expression:"cadastroPaciente.complemento"}}),t("q-input",{ref:"bairro",staticClass:"q-pa-xs col-12 col-sm-5 col-md-2 col-lg-5",attrs:{label:"Bairro",maxlength:"100",dense:"",rules:[function(e){return 0!=e.length||0==a.validaEndereco||"Preencha o bairro"}]},on:{input:a.validarEndereco},model:{value:a.cadastroPaciente.bairro,callback:function(e){a.$set(a.cadastroPaciente,"bairro",e)},expression:"cadastroPaciente.bairro"}}),t("q-input",{ref:"cidade",staticClass:"q-pa-xs col-12 col-sm-5 col-md-2 col-lg-5",attrs:{label:"Cidade",maxlength:"28",dense:"",rules:[function(e){return 0!=e.length||0==a.validaEndereco||"Preencha a cidade"}]},on:{input:function(e){return a.validarEndereco("cidade")}},model:{value:a.cadastroPaciente.cidade,callback:function(e){a.$set(a.cadastroPaciente,"cidade",e)},expression:"cadastroPaciente.cidade"}}),t("q-select",{ref:"uf",staticClass:"q-pa-xs col-12 col-sm-2 col-md-1 col-lg-2",attrs:{options:a.optUf,label:"UF",dense:"",rules:[function(e){return 0!=e.length||0==a.validaEndereco||"Preencha a UF"}]},on:{input:a.validarEndereco},model:{value:a.cadastroPaciente.uf,callback:function(e){a.$set(a.cadastroPaciente,"uf",e)},expression:"cadastroPaciente.uf"}})],1)]),t("div",{staticClass:"col-12 col-lg-6"},[t("fieldset",{staticClass:"row q-pb-lg",staticStyle:{"border-radius":"8px"}},[t("legend",[a._v("Dados Cadastrais")]),t("q-input",{staticClass:"q-pa-xs col-12 col-sm-3 col-md-2 col-lg-3",attrs:{label:"SUS",mask:"###############",rules:[function(a){return a.length>0||"O registro SUS não pode ser nulo"}],"unmasked-value":"",dense:""},model:{value:a.cadastroPaciente.sus,callback:function(e){a.$set(a.cadastroPaciente,"sus",e)},expression:"cadastroPaciente.sus"}}),t("q-input",{staticClass:"q-pa-xs col-12 col-sm-2 col-md-2 col-lg-3",attrs:{label:"RH",mask:"##########",rules:[function(a){return a.length>0||"Preencha o registro hospitalar"}],"unmasked-value":"",dense:""},model:{value:a.cadastroPaciente.rh,callback:function(e){a.$set(a.cadastroPaciente,"rh",e)},expression:"cadastroPaciente.rh"}}),t("q-input",{staticClass:"q-pa-xs col-12 col-sm-3 col-md-2 col-lg-3",attrs:{dense:"",readonly:""},model:{value:a.labelInstituicao,callback:function(e){a.labelInstituicao=e},expression:"labelInstituicao"}}),t("q-select",{staticClass:"q-pa-xs col-12 col-sm-4 col-md-2 col-lg-3",attrs:{options:a.optCor,label:"Cor",dense:"","emit-value":"","map-options":""},model:{value:a.cadastroPaciente.cor,callback:function(e){a.$set(a.cadastroPaciente,"cor",e)},expression:"cadastroPaciente.cor"}}),t("q-select",{staticClass:"q-pa-xs col-12 col-sm-6 col-md-4 col-lg-5",attrs:{options:a.optIndicacao,label:"Indicação",dense:"","emit-value":"","map-options":""},scopedSlots:a._u([{key:"append",fn:function(){return[t("q-btn",{attrs:{id:"cadastrar_indicacao",icon:"add",flat:"",dense:"",color:"primary"},on:{click:function(e){e.stopPropagation(),a.popupCadastroInd=!0}}})]},proxy:!0}]),model:{value:a.cadastroPaciente.indicacao,callback:function(e){a.$set(a.cadastroPaciente,"indicacao",e)},expression:"cadastroPaciente.indicacao"}}),t("q-select",{staticClass:"q-pa-xs col-12 col-sm-4 col-md-3 col-lg-3",attrs:{options:a.optEstadoCivil,label:"Estado Civil",dense:"","emit-value":"","map-options":""},model:{value:a.cadastroPaciente.estado_civil,callback:function(e){a.$set(a.cadastroPaciente,"estado_civil",e)},expression:"cadastroPaciente.estado_civil"}}),t("q-select",{staticClass:"q-pa-xs col-12 col-sm-2 col-md-2 col-lg-2",attrs:{options:a.optTipoSanguineo,label:"Tipo Sanguíneo",dense:"","emit-value":"","map-options":""},model:{value:a.cadastroPaciente.tipo_sanguineo,callback:function(e){a.$set(a.cadastroPaciente,"tipo_sanguineo",e)},expression:"cadastroPaciente.tipo_sanguineo"}}),t("q-select",{staticClass:"q-pa-xs col-12 col-sm-1 col-md-1 col-lg-2",attrs:{options:a.optFatorRh,label:"Fator RH",dense:"","emit-value":"","map-options":""},model:{value:a.cadastroPaciente.fator_rh,callback:function(e){a.$set(a.cadastroPaciente,"fator_rh",e)},expression:"cadastroPaciente.fator_rh"}}),t("q-select",{staticClass:"q-pa-xs col-12 col-sm-8 col-md-6 col-lg-6",attrs:{options:a.optEscolaridade,label:"Escolaridade",dense:"","emit-value":"","map-options":""},model:{value:a.cadastroPaciente.escolaridade,callback:function(e){a.$set(a.cadastroPaciente,"escolaridade",e)},expression:"cadastroPaciente.escolaridade"}}),t("q-input",{staticClass:"q-pa-xs col-12 col-sm-3 col-md-2 col-lg-3",attrs:{label:"Telefone Próprio",mask:a.mascaraTelProprio,maxlength:"14",rules:[function(a){return 0==a.length||10==a.length||11==a.length||"Telefone inválido"}],"unmasked-value":"",dense:""},on:{input:function(e){return a.alteracaoTel()}},model:{value:a.cadastroPaciente.tel_proprio,callback:function(e){a.$set(a.cadastroPaciente,"tel_proprio",e)},expression:"cadastroPaciente.tel_proprio"}}),t("q-input",{staticClass:"q-pa-xs col-12 col-sm-4 col-md-2 col-lg-3",attrs:{label:"Telefone Contato",mask:a.mascaraTelContato,maxlength:"14",rules:[function(a){return 0==a.length||10==a.length||11==a.length||"Telefone inválido"}],"unmasked-value":"",dense:""},on:{input:function(e){return a.alteracaoTel()}},model:{value:a.cadastroPaciente.tel_contato,callback:function(e){a.$set(a.cadastroPaciente,"tel_contato",e)},expression:"cadastroPaciente.tel_contato"}}),t("q-input",{ref:"nome_contato",staticClass:"q-pa-xs col-12 col-sm-4 col-md-4 col-lg-2",attrs:{label:"Nome Contato",maxlength:"250",dense:"","reactive-rules":""},on:{input:function(e){return a.validarLetrasEspacos(a.cadastroPaciente.nome_contato,"contato")}},model:{value:a.cadastroPaciente.nome_contato,callback:function(e){a.$set(a.cadastroPaciente,"nome_contato",e)},expression:"cadastroPaciente.nome_contato"}}),t("q-input",{staticClass:"q-pa-xs col-12 col-sm-4 col-md-4 col-lg-3",attrs:{type:"email",label:"E-mail",maxlength:"50",dense:""},model:{value:a.cadastroPaciente.email,callback:function(e){a.$set(a.cadastroPaciente,"email",e)},expression:"cadastroPaciente.email"}}),t("q-input",{staticClass:"q-pa-xs col-12 col-sm-6 col-md-6 col-lg-3",attrs:{label:"Reações Alérgicas a Medicamentos",maxlength:"250",dense:""},model:{value:a.cadastroPaciente.reacoes_alergicas,callback:function(e){a.$set(a.cadastroPaciente,"reacoes_alergicas",e)},expression:"cadastroPaciente.reacoes_alergicas"}}),t("q-select",{staticClass:"q-pa-xs col-12 col-sm-6 col-md-6 col-lg-4",attrs:{options:a.optPreceptor,placeholder:"Nome ou CRM",label:"Preceptor",dense:"","use-input":"","hide-selected":"","fill-input":"","input-debounce":"0",rules:[function(a){return""!=a&&void 0!=a||"O preceptor não pode ser nulo"}],"emit-value":"","map-options":""},on:{filter:a.filtroAutocomplete},model:{value:a.cadastroPaciente.preceptor,callback:function(e){a.$set(a.cadastroPaciente,"preceptor",e)},expression:"cadastroPaciente.preceptor"}})],1)])]),t("div",{staticClass:"flex flex-center"},[t("q-btn",{staticClass:"q-pa-xs q-ma-md col-1",staticStyle:{"margin-top":"2%"},attrs:{label:"Gravar Dados",type:"submit",color:"primary"}}),""==this.cadastroPaciente.id_usuario||void 0==this.cadastroPaciente.id_usuario?t("q-btn",{staticClass:"q-pa-xs q-ma-md col-1",staticStyle:{"margin-top":"2%"},attrs:{label:"Limpar",type:"reset",color:"primary"}}):a._e(),t("q-btn",{staticClass:"q-pa-xs q-ma-md col-1",staticStyle:{"margin-top":"2%"},attrs:{label:"Voltar",to:{name:"cadastro_registro_mola",params:{id_paciente:this.cadastroPaciente.id_usuario,id_mola:this.id_mola}},color:"primary"}})],1)]),t("q-dialog",{staticClass:"full-width",model:{value:a.popupCadastroInd,callback:function(e){a.popupCadastroInd=e},expression:"popupCadastroInd"}},[t("CadastroEdicaoIndicacao",{on:{acionarCarregarInd:a.carregarIndicacao,fecharPopup:function(e){a.popupCadastroInd=!1}}})],1),t("q-dialog",{attrs:{persistent:""},model:{value:a.popupResetarSenha,callback:function(e){a.popupResetarSenha=e},expression:"popupResetarSenha"}},[t("q-card",[t("q-toolbar",{staticClass:"bg-primary text-white"},[t("q-toolbar-title",[a._v("Confirmar Reset de Senha")]),t("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",round:"",dense:"",icon:"close"}})],1),t("q-card-section",{staticClass:"row items-center"},[t("span",{staticClass:"q-ml-sm"},[a._v("Ao confirmar esta operação, a senha do paciente será resetada para\n          o valor padrão, ou seja, o mesmo valor do login. Está ação é\n          irreversível. Deseja prosseguir?.")])]),t("q-card-actions",{attrs:{align:"right"}},[t("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",label:"Cancelar",color:"primary"}}),t("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",label:"Confirmar",color:"primary"},on:{click:a.resetarSenha}})],1)],1)],1)],1)},o=[],s=t("ded3"),c=t.n(s),r=(t("e6cf"),t("51e2")),n=t("2f62"),l=t("2a19"),d={name:"Cadastro_Paciente",components:{CadastroEdicaoIndicacao:r["a"]},data(){return{id_mola:"",dataCalendario:"",popupCadastroInd:!1,popupResetarSenha:!1,loginDisponivel:!0,popupAbrirCalendario:!1,utilizarRg:"",labelInstituicao:"",validaEndereco:!1,validaCpf:!0,validaDataNasc:!0,atualizarValidacoes:"",mascaraTelProprio:"(##)#####-####",mascaraTelContato:"(##)#####-####",cadastroPaciente:{nome:"",data_nasc:"",cpf:"",nome_mae:"",cep:"",logradouro:"",numero:"",complemento:"",uf:"",cidade:"",bairro:"",sus:"",rh:"",instituicao:"",cor:"",indicacao:"",estado_civil:"",tipo_sanguineo:"",fator_rh:"",tel_proprio:"",tel_contato:"",nome_contato:"",email:"",reacoes_alergicas:"",preceptor:"",rg:"",rne:"",nacionalidade:"",login:"",escolaridade:"",cadastrante:"",id_usuario:""},optUf:["","AC","AL","AP","AM","BA","CE","DF","ES","GO","MA","MT","MS","MG","PA","PB","PR","PE","PI","RJ","RN","RS","RO","RR","SC","SP","SE","TO"],optInstituicao:[],optPreceptor:[],optPrecepOriginal:[],optCor:[{label:"",value:""},{label:"Branca",value:1},{label:"Preta",value:2},{label:"Amarela",value:3},{label:"Parda",value:4},{label:"Indígena",value:5},{label:"Sem declaração",value:6}],optIndicacao:[],optEstadoCivil:[{label:"",value:""},{label:"Casada",value:1},{label:"Divorciada",value:2},{label:"Viúva",value:3},{label:"Solteira",value:4},{label:"Em união estável",value:5},{label:"Não desejo declarar",value:6}],optTipoSanguineo:[{label:"",value:""},{label:"O",value:1},{label:"A",value:2},{label:"B",value:3},{label:"AB",value:4}],optFatorRh:[{label:"",value:""},{label:"+",value:1},{label:"-",value:2}],optEscolaridade:[{label:"",value:""},{label:"Não informado",value:1},{label:"Sem instrução/Fundamental incompleto",value:2},{label:"Fundamental completo/Médio incompleto",value:3},{label:"Médio completo/Superior incompleto",value:4},{label:"Superior completo/Pós-graduação incompleto",value:5},{label:"Pós-graduação completo",value:6}],consultaUsuario:{nome:"",crm:"",uf_crm:"",tipo:"",situacao:"",categoria:"",id_inst:""}}},async mounted(){this.dataCalendario=this.atribuirDataCalendario();let a=this.$store.getters["principal/dadosUsuarioLogado"];this.cadastroPaciente.cadastrante=a.id_usuario,this.id_mola=this.$route.params.id_mola,await this.carregarInstituicao(),this.labelInstituicao=this.optInstituicao[0].label,await this.carregarIndicacao(),this.consultaUsuario.id_inst=this.dadosUsuarioLogado.id_inst,await this.carregarPreceptores(this.consultaUsuario),this.optPrecepOriginal=this.optPreceptor,this.cadastroPaciente.id_usuario=this.$route.params.id,""!=this.cadastroPaciente.id_usuario&&void 0!=this.cadastroPaciente.id_usuario&&await this.carregarDadosPaciente(this.cadastroPaciente.id_usuario),""!=this.cadastroPaciente.rg?this.utilizarRg="rg":""!=this.cadastroPaciente.rne&&(this.utilizarRg="rne")},methods:{async onSubmit(){""!=this.cadastroPaciente.id_usuario&&void 0!=this.cadastroPaciente.id_usuario?await this.alterarPaciente():await this.incluirPaciente()},onReset(){this.cadastroPaciente.nome="",this.cadastroPaciente.data_nasc="",this.cadastroPaciente.cpf="",this.cadastroPaciente.nome_mae="",this.cadastroPaciente.cep="",this.cadastroPaciente.logradouro="",this.cadastroPaciente.numero="",this.cadastroPaciente.complemento="",this.cadastroPaciente.uf="",this.cadastroPaciente.cidade="",this.cadastroPaciente.bairro="",this.cadastroPaciente.sus="",this.cadastroPaciente.rh="",this.cadastroPaciente.instituicao="",this.cadastroPaciente.cor="",this.cadastroPaciente.escolaridade="",this.cadastroPaciente.tipo_sanguineo="",this.cadastroPaciente.fator_rh="",this.cadastroPaciente.indicacao="",this.cadastroPaciente.estado_civil="",this.cadastroPaciente.outros="",this.cadastroPaciente.tel_proprio="",this.cadastroPaciente.tel_contato="",this.cadastroPaciente.nome_contato="",this.cadastroPaciente.email="",this.cadastroPaciente.reacoes_alergicas="",this.cadastroPaciente.preceptor="",this.cadastroPaciente.rg="",this.cadastroPaciente.rne="",this.cadastroPaciente.nacionalidade="",this.cadastroPaciente.login="",this.cadastroPaciente.senha="",this.utilizarRg="",this.validaEndereco=!1,this.dataCalendario=this.atribuirDataCalendario()},carregarInstituicao(){return new Promise(((a,e)=>{this.$axios.get("/combo_inst").then((e=>{this.optInstituicao=e.data.resultado.filter((a=>a.id==this.dadosUsuarioLogado.id_inst)).map((a=>({value:a.id,label:a.nome_inst}))),a(e.data)})).catch((a=>{this.$store.dispatch("principal/verificaErro",a),e(a)}))}))},carregarIndicacao(){let a={descricao:""};return new Promise(((e,t)=>{this.$axios.post("/consultar_indicacao",a).then((a=>{this.optIndicacao=a.data.resultado.map((a=>({value:a.id,label:a.descricao})));let t={label:"",value:""};this.optIndicacao.unshift(t),e(a.data)})).catch((a=>{this.$store.dispatch("principal/verificaErro",a),t(a)}))}))},carregarPreceptores(a){return new Promise(((e,t)=>{this.$axios.post("/consultar_medicos",a).then((a=>{this.optPreceptor=a.data.resultado.filter((a=>{if("docente"==a.categoria||"contratado"==a.categoria||"outros"==a.categoria)return a})),this.optPreceptor=this.optPreceptor.map((a=>({value:a.id_usuario,label:a.nome+" CRM "+a.crm+" "+a.uf_crm}))),e(a.data)})).catch((a=>{this.$store.dispatch("principal/verificaErro",a),t(a)}))}))},carregarDadosPaciente(a){return new Promise(((e,t)=>{this.$axios.post("/dados_paciente",{id_usuario:a}).then((a=>{if(this.cadastroPaciente=a.data.resultado[0],""!=this.cadastroPaciente.data_nasc){this.cadastroPaciente.data_nasc=a.data.resultado[0].data_nasc.substring(0,10);var t=this.cadastroPaciente.data_nasc.split("-")[0],i=this.cadastroPaciente.data_nasc.split("-")[1],o=this.cadastroPaciente.data_nasc.split("-")[2];this.cadastroPaciente.data_nasc=("0"+o).slice(-2)+"/"+("0"+i).slice(-2)+"/"+t,this.dataCalendario=this.cadastroPaciente.data_nasc}else this.dataCalendario=this.atribuirDataCalendario();""!=this.cadastroPaciente.rg?this.atualizarValidacoes="rg":""!=this.cadastroPaciente.rne&&(this.atualizarValidacoes="rne"),e(a.data)})).catch((a=>{this.$store.dispatch("principal/verificaErro",a),t(a)}))}))},incluirPaciente(){return new Promise(((a,e)=>{let t=this.cadastroPaciente;var i=t.data_nasc.substring(0,2),o=t.data_nasc.substring(3,5),s=t.data_nasc.substring(6,10);t.data_nasc=s+"-"+("0"+o).slice(-2)+"-"+("0"+i).slice(-2),t.instituicao=this.optInstituicao[0].value,""==t.cor?t.cor=null:t.cor=t.cor,""==t.estado_civil?t.estado_civil=null:t.estado_civil=t.estado_civil,""==t.tipo_sanguineo?t.tipo_sanguineo=null:t.tipo_sanguineo=t.tipo_sanguineo,""==t.fator_rh?t.fator_rh=null:t.fator_rh=t.fator_rh,""==t.escolaridade?t.escolaridade=null:t.escolaridade=t.escolaridade,""==t.tel_proprio?t.tel_proprio=null:t.tel_proprio=t.tel_proprio,""==t.tel_contato?t.tel_contato=null:t.tel_contato=t.tel_contato,""==t.indicacao?t.indicacao=null:t.indicacao=t.indicacao,this.$axios.post("/incluir_paciente",t).then((e=>{l["a"].create({message:"Paciente incluído com sucesso.",color:"positive"}),this.$router.push({name:"consulta_paciente"}),a(e.data)})).catch((a=>{this.$store.dispatch("principal/verificaErro",a),e(a)}))}))},alterarPaciente(){return new Promise(((a,e)=>{let t=this.cadastroPaciente;var i=t.data_nasc.substring(0,2),o=t.data_nasc.substring(3,5),s=t.data_nasc.substring(6,10);t.data_nasc=s+"-"+("0"+o).slice(-2)+"-"+("0"+i).slice(-2),t.instituicao=this.optInstituicao[0].value,""==t.cor?t.cor=null:t.cor=t.cor,""==t.estado_civil?t.estado_civil=null:t.estado_civil=t.estado_civil,""==t.tipo_sanguineo?t.tipo_sanguineo=null:t.tipo_sanguineo=t.tipo_sanguineo,""==t.fator_rh?t.fator_rh=null:t.fator_rh=t.fator_rh,""==t.escolaridade?t.escolaridade=null:t.escolaridade=t.escolaridade,""==t.tel_proprio?t.tel_proprio=null:t.tel_proprio=t.tel_proprio,""==t.tel_contato?t.tel_contato=null:t.tel_contato=t.tel_contato,""==t.indicacao?t.indicacao=null:t.indicacao=t.indicacao,"rne"==this.atualizarValidacoes&&""!=t.rg?(t.rne="",t.nacionalidade=""):"rg"==this.atualizarValidacoes&&""!=t.rne&&(t.rg=""),this.$axios.post("/alterar_paciente",t).then((e=>{l["a"].create({message:"Paciente alterado com sucesso.",color:"positive"}),this.$router.push({name:"consulta_paciente"}),a(e.data)})).catch((a=>{this.$store.dispatch("principal/verificaErro",a),e(a)}))}))},async filtroAutocomplete(a,e,t){e((()=>{this.optPreceptor=""!=a?this.optPreceptor.filter((e=>-1!=e.label.toLowerCase().indexOf(a.toLowerCase()))):this.optPrecepOriginal}))},resetarSenha(){return new Promise(((a,e)=>{let t={id_usuario:this.cadastroPaciente.id_usuario,login:this.cadastroPaciente.login};this.$axios.post("/resetar_senha",t).then((e=>{l["a"].create({message:"Senha resetada com sucesso.",color:"positive"}),a(e.data)})).catch((a=>{this.$store.dispatch("principal/verificaErro",a),e(a)}))}))},verificarDisponibilidadeLogin(){let a={login:this.cadastroPaciente.login,id_usuario:this.cadastroPaciente.id_usuario};this.$axios.post("/login_disponivel",a).then((a=>{this.loginDisponivel=a.data.disponivel})).catch((a=>{this.$store.dispatch("principal/verificaErro",a)}))},atualizarDados(a){this.utilizarRg=a,"rg"==a?""==this.atualizarValidacoes?(this.cadastroPaciente.rne="",this.cadastroPaciente.nacionalidade=""):this.cadastroPaciente.rg=this.cadastroPaciente.rg:"rne"==a&&(""==this.atualizarValidacoes?this.cadastroPaciente.rg="":(this.cadastroPaciente.rne=this.cadastroPaciente.rne,this.cadastroPaciente.nacionalidade=this.cadastroPaciente.nacionalidade))},validarEndereco(a="nenhum"){"logradouro"==a?this.validarLetrasEspacos(this.cadastroPaciente.logradouro,"logradouro"):"cidade"==a&&this.validarLetrasEspacos(this.cadastroPaciente.cidade,"cidade"),8==this.cadastroPaciente.cep.length||""!=this.cadastroPaciente.logradouro||""!=this.cadastroPaciente.numero.length||""!=this.cadastroPaciente.complemento||""!=this.cadastroPaciente.uf.length||""!=this.cadastroPaciente.cidade||""!=this.cadastroPaciente.bairro?this.validaEndereco=!0:this.validaEndereco=!1,this.$refs.cep.validate(),this.$refs.logradouro.validate(),this.$refs.numero.validate(),this.$refs.complemento.validate(),this.$refs.uf.validate(),this.$refs.cidade.validate(),this.$refs.bairro.validate()},alteracaoTel(){void 0==this.cadastroPaciente.tel_proprio&&null==this.cadastroPaciente.tel_proprio||(10==this.cadastroPaciente.tel_proprio.length?this.mascaraTelProprio="(##)####-#####":11==this.cadastroPaciente.tel_proprio.length&&(this.mascaraTelProprio="(##)#####-####")),void 0==this.cadastroPaciente.tel_contato&&null==this.cadastroPaciente.tel_contato||(10==this.cadastroPaciente.tel_contato.length?this.mascaraTelContato="(##)####-#####":11==this.cadastroPaciente.tel_contato.length&&(this.mascaraTelContato="(##)#####-####"))},validarLetrasEspacos(a,e){let t=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"," ","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","ã","õ","Ã","Õ","á","é","í","ó","ú","Á","É","Í","Ó","Ú","ç","Ç","â","ê","ô","Â","Ê","Ô","'","à","À","-"],i=a.substring(0,a.length-1);if(!t.includes(a.slice(-1)))switch(e){case"nome":this.cadastroPaciente.nome=i,this.$refs.nome.$forceUpdate();break;case"mae":this.cadastroPaciente.nome_mae=i,this.$refs.nome_mae.$forceUpdate();break;case"logradouro":this.cadastroPaciente.logradouro=i,this.$refs.logradouro.$forceUpdate();break;case"cidade":this.cadastroPaciente.cidade=i,this.$refs.cidade.$forceUpdate();break;case"contato":this.cadastroPaciente.nome_contato=i,this.$refs.nome_contato.$forceUpdate();break;case"nacionalidade":this.cadastroPaciente.nacionalidade=i,this.$refs.nacionalidade.$forceUpdate();break}},validarExpressaoRegular(a,e){var t=/^[a-zA-Z0-9\s]*$/;let i=a.substring(0,a.length-1);t.test(a.slice(-1))||(this.cadastroPaciente.email=i)},validarDataNasc(a){this.popupAbrirCalendario=!1;let e="",t="",i="";if(this.validaDataNasc=!0,"calendario"==a?(null==this.dataCalendario&&(this.dataCalendario=this.atribuirDataCalendario()),this.cadastroPaciente.data_nasc=this.dataCalendario):"input"==a&&(""!=this.cadastroPaciente.data_nasc?this.dataCalendario=this.cadastroPaciente.data_nasc:this.dataCalendario=this.atribuirDataCalendario()),this.cadastroPaciente.data_nasc.length>=2&&(e=this.cadastroPaciente.data_nasc.substring(0,2),e=Number(e),(0==e||e>31)&&(this.validaDataNasc=!1),this.cadastroPaciente.data_nasc.length>=5&&(t=this.cadastroPaciente.data_nasc.substring(3,5),t=Number(t),(0==t||t>12)&&(this.validaDataNasc=!1),30!=e&&31!=e||2!=t||(this.validaDataNasc=!1),31!=e||4!=t&&6!=t&&9!=t&&11!=t||(this.validaDataNasc=!1)),10==this.cadastroPaciente.data_nasc.length)){i=this.cadastroPaciente.data_nasc.substring(6,10),i=Number(i);let a=!1;(i%4==0&&i%100!=0||i%400==0)&&(a=!0),29==e&&2==t&&0==a&&(this.validaDataNasc=!1);let o=new Date;i>o.getFullYear()&&(this.validaDataNasc=!1);let s=new Date(i,t-1,e);s>o&&(this.validaDataNasc=!1)}},atribuirDataCalendario(){let a=new Date;var e=a.getDate(),t=a.getMonth(),i=a.getFullYear();return("0"+e).slice(-2)+"/"+("0"+(t+1)).slice(-2)+"/"+i},validarCpf(){if(11==this.cadastroPaciente.cpf.length){var a;0,this.validaCpf=!0,"00000000000"!=this.cadastroPaciente.cpf&&"11111111111"!=this.cadastroPaciente.cpf&&"22222222222"!=this.cadastroPaciente.cpf&&"33333333333"!=this.cadastroPaciente.cpf&&"44444444444"!=this.cadastroPaciente.cpf&&"55555555555"!=this.cadastroPaciente.cpf&&"66666666666"!=this.cadastroPaciente.cpf&&"77777777777"!=this.cadastroPaciente.cpf&&"88888888888"!=this.cadastroPaciente.cpf&&"99999999999"!=this.cadastroPaciente.cpf||(this.validaCpf=!1);for(let e=1;e<=9;e++)parseInt(this.cadastroPaciente.cpf.substring(e-1,e))*(11-e),a=10*Soma%11;10!=a&&11!=Resto||(a=0),a!=parseInt(this.cadastroPaciente.cpf.substring(9,10))&&(this.validaCpf=!1),0;for(let e=1;e<=10;e++)parseInt(this.cadastroPaciente.cpf.substring(e-1,e))*(12-e),a=10*Soma%11;10!=a&&11!=a||(a=0),a!=parseInt(this.cadastroPaciente.cpf.substring(10,11))&&(this.validaCpf=!1)}}},computed:c()({},Object(n["c"])("principal",["usuarioLogado","dadosUsuarioLogado"]))},u=d,p=t("2877"),m=t("9989"),h=t("0378"),g=t("27f9"),P=t("0016"),v=t("05c0"),f=t("9c40"),b=t("24e8"),_=t("52ee"),C=t("3786"),x=t("ddd8"),q=t("f09f"),$=t("65c6"),k=t("6ac5"),E=t("a370"),R=t("4b7e"),D=t("7f67"),w=t("eebe"),I=t.n(w),S=Object(p["a"])(u,i,o,!1,null,null,null);e["default"]=S.exports;I()(S,"components",{QPage:m["a"],QForm:h["a"],QInput:g["a"],QIcon:P["a"],QTooltip:v["a"],QBtn:f["a"],QDialog:b["a"],QDate:_["a"],QRadio:C["a"],QSelect:x["a"],QCard:q["a"],QToolbar:$["a"],QToolbarTitle:k["a"],QCardSection:E["a"],QCardActions:R["a"]}),I()(S,"directives",{ClosePopup:D["a"]})},"51e2":function(a,e,t){"use strict";var i=function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("q-card",[t("q-toolbar",{staticClass:"bg-primary text-white"},[t("q-toolbar-title",[a._v("Adicionar Indicação")]),t("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",round:"",dense:"",icon:"close"}})],1),t("q-card-section",{staticClass:"q-pt-none"},[t("q-form",{on:{submit:a.onSubmit,reset:a.onReset}},[t("q-input",{attrs:{type:"text",label:"Descrição",rules:[function(a){return a.length>0||"Digite uma indicação"},function(a){return a.length<=50||"A indicação deve ter no máximo 50 caracteres"}]},model:{value:a.cadastroIndicacao.descricao,callback:function(e){a.$set(a.cadastroIndicacao,"descricao",e)},expression:"cadastroIndicacao.descricao"}}),t("br"),t("div",{staticClass:"flex-center q-gutter-xl"},[t("q-btn",{ref:"btnGravar",attrs:{type:"submit",color:"primary",label:"Gravar"}})],1)],1)],1)],1)},o=[],s=(t("e6cf"),{name:"CadastroEdicaoIndicacao",data(){return{cadastroIndicacao:{descricao:""},modalCadastroInd:!0}},mounted(){},methods:{async onSubmit(){console.log("incluir");await this.incluirIndicacao();this.$emit("acionarCarregarInd"),this.$emit("fecharPopup")},onReset(){this.cadastroIndicacao.descricao=""},incluirIndicacao(){return new Promise(((a,e)=>{let t=this.cadastroIndicacao;this.$axios.post("/incluir_indicacao",t).then((e=>{a(e.data)})).catch((a=>{this.$store.dispatch("principal/verificaErro",a),e(a)}))}))}}}),c=s,r=t("2877"),n=t("f09f"),l=t("65c6"),d=t("6ac5"),u=t("9c40"),p=t("a370"),m=t("0378"),h=t("27f9"),g=t("7f67"),P=t("eebe"),v=t.n(P),f=Object(r["a"])(c,i,o,!1,null,null,null);e["a"]=f.exports;v()(f,"components",{QCard:n["a"],QToolbar:l["a"],QToolbarTitle:d["a"],QBtn:u["a"],QCardSection:p["a"],QForm:m["a"],QInput:h["a"]}),v()(f,"directives",{ClosePopup:g["a"]})}}]);