(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[2],{"713b":function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("q-layout",{attrs:{view:"lHh Lpr lFf"}},[s("q-header",{staticClass:"bg-primary text-white",attrs:{reveal:"",bordered:""}},[s("q-toolbar",[s("q-toolbar-title",{staticClass:"lt-md"},[s("div",{staticClass:"row full-width q-pa-xs"},[t.usuarioLogado&&t.dadosUsuarioLogado.aceite?s("q-btn",{staticClass:"col-xs-1 col-sm-1 col-md-1 col-lg-1 col-xl-1 on-left",staticStyle:{"margin-left":"-11px"},attrs:{flat:"",icon:"menu",id:"btnHamburger"},on:{click:function(a){t.drawerLeft=!0}}}):t._e(),t.usuarioLogado&&t.dadosUsuarioLogado.aceite&&t.$q.platform.is.mobile?s("q-drawer",{attrs:{"show-if-above":"",width:200,breakpoint:3100,elevated:"",side:"left"},model:{value:t.drawerLeft,callback:function(a){t.drawerLeft=a},expression:"drawerLeft"}},[s("q-list",{staticClass:"rounded-borders text-primary",staticStyle:{"font-size":"12px"},attrs:{bordered:"",padding:""}},[s("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{clickable:"",exact:"","active-class":"my-menu-link",to:"/consulta_paciente"}},[s("q-item-section",{attrs:{avatar:""}},[s("q-icon",{attrs:{name:"home"}})],1),s("q-item-section",[t._v("Paciente")])],1),s("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{clickable:"",exact:"","active-class":"my-menu-link",to:"/chat"}},[s("q-item-section",{attrs:{avatar:""}},[s("q-icon",{attrs:{name:"question_answer"}})],1),s("q-item-section",[t._v("Chat")])],1),t.usuarioLogado&&"coordenador"==t.dadosUsuarioLogado.tipo?s("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{clickable:"",exact:"","active-class":"my-menu-link",to:"/area_acesso"}},[s("q-item-section",{attrs:{avatar:""}},[s("q-icon",{attrs:{name:"manage_accounts"}})],1),s("q-item-section",[t._v("Área Acesso")])],1):t._e(),s("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{clickable:"",exact:"","active-class":"my-menu-link"}},[s("q-item-section",{attrs:{avatar:""}},[s("q-icon",{attrs:{name:"table_chart"}})],1),s("q-item-section",[t._v("Tabelas Auxiliares\n                  "),s("q-menu",[s("q-list",[s("q-item",{staticStyle:{color:"#007c3d"},attrs:{"active-class":"my-menu-link"}},[s("q-btn",{attrs:{stretch:"",flat:"",to:"/resultado_ap",label:"Resultado AP"}},[s("router-link",{staticClass:"nav-link",attrs:{to:"/resultado_ap"}})],1)],1),s("q-item",{attrs:{"active-class":"my-menu-link"}},[s("q-btn",{staticStyle:{color:"#007c3d"},attrs:{stretch:"",flat:"",to:"/indicacao",label:"Indicação"}},[s("router-link",{staticClass:"nav-link",attrs:{to:"/indicacao"}})],1)],1),s("q-item",{attrs:{"active-class":"my-menu-link"}},[s("q-btn",{staticStyle:{color:"#007c3d"},attrs:{stretch:"",flat:"",to:"/instituicao",label:"Instituição"}},[s("router-link",{staticClass:"nav-link",attrs:{to:"/instituicao"}})],1)],1),s("q-item",{attrs:{"active-class":"my-menu-link"}},[s("q-btn",{staticStyle:{color:"#007c3d"},attrs:{stretch:"",flat:"",to:"/mac",label:"MAC"}},[s("router-link",{staticClass:"nav-link",attrs:{to:"/mac"}})],1)],1)],1)],1)],1)],1),s("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{clickable:"",exact:"","active-class":"my-menu-link",to:"/revisao"}},[s("q-item-section",{attrs:{avatar:""}},[s("q-icon",{attrs:{name:"search"}})],1),s("q-item-section",[t._v("Revisão")])],1),s("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{clickable:"",exact:"","active-class":"my-menu-link"},on:{click:t.efetuarLogout}},[s("q-item-section",{attrs:{avatar:""}},[s("q-icon",{attrs:{name:"logout"}})],1),s("q-item-section",[t._v("Sair")])],1)],1)],1):t._e(),s("img",{staticClass:"col-xs-3 col-sm-2 col-md-3 col-lg-4 col-xl-4",staticStyle:{"margin-top":"auto","margin-bottom":"auto",float:"left"},attrs:{src:e("fa6d"),id:"logoUnifesp"}}),s("span",{staticClass:"col-xs-2 col-sm-1 col-md-1 col-lg-1 col-xl-1",attrs:{id:"tituloMolaApp"}},[t._v("MolaApp")]),t.usuarioLogado?s("div",{staticClass:"col-xs-3 col-sm-3 col-md-2 col-lg-2 col-xl-2",attrs:{id:"dadosUsuTitulo"}},[s("span",{attrs:{id:"spanNome"}},[s("b",[t._v("Nome:")]),t._v(" "+t._s(t.dadosUsuarioLogado.nome))]),s("span",{attrs:{id:"spanCrm"}},[s("b",[t._v("CRM:")]),t._v(" "+t._s(t.dadosUsuarioLogado.crm))])]):t._e(),t.usuarioLogado?s("div",{staticClass:"gt-xs col-xs-3 col-sm-2 col-md-2 col-lg-2 col-xl-2",attrs:{id:"dadosUsuTituloDois"}},[s("span",{staticStyle:{display:"block","font-size":"13px"}},[s("b",[t._v("Categoria: ")]),t._v(" "+t._s(t.dadosUsuarioLogado.categoria))]),s("span",{staticStyle:{"font-size":"13px"}},[s("b",[t._v("Tipo: ")]),t._v(" "+t._s(t.dadosUsuarioLogado.tipo)+"\n            ")])]):t._e(),t.usuarioLogado&&t.dadosUsuarioLogado.aceite?s("q-btn",{staticClass:"col-xs-1 col-sm-1 col-md-1 col-lg-1 col-xl-1",attrs:{icon:"info",to:"/sobre",flat:"",id:"btnSobre"}}):t._e()],1)]),s("q-toolbar-title",{directives:[{name:"ripple",rawName:"v-ripple"}],staticClass:"gt-sm",attrs:{clickable:"","active-class":"my-menu-link"}},[s("div",{staticStyle:{width:"130px",float:"left"}},[s("img",{staticStyle:{display:"block","margin-top":"8px","margin-left":"-12px"},attrs:{width:"130px",src:e("fa6d")}})]),s("div",{staticStyle:{"margin-left":"-5px","margin-top":"2px"}},[s("span",{staticStyle:{"font-size":"15px",display:"block"}},[t._v("MolaApp")]),s("span",{staticStyle:{"font-size":"15px",display:"block"}},[t._v("Ambulatório de DTG")]),s("span",{staticStyle:{"font-size":"15px",display:"block"}},[t._v("\n            Departamento de Obstetricia - HUHSP\n          ")])]),s("div",{directives:[{name:"show",rawName:"v-show",value:t.usuarioLogado,expression:"usuarioLogado"}],staticClass:"fixed-top-right",staticStyle:{float:"right","margin-right":"10px"}},[s("span",{staticStyle:{"font-size":"12px"}},[s("b",[t._v("Nome:")]),t._v(" "+t._s(t.dadosUsuarioLogado.nome)+"   -")]),t._v(" \n          "),s("span",{staticStyle:{"font-size":"12px"}},[s("b",[t._v("Tipo: ")]),t._v(" "+t._s(t.dadosUsuarioLogado.tipo)+"   -")]),t._v(" \n          "),s("span",{staticStyle:{"font-size":"12px"}},[s("b",[t._v("Categoria: ")]),t._v(" "+t._s(t.dadosUsuarioLogado.categoria)+"   - ")]),t._v(" \n          "),s("span",{staticStyle:{"font-size":"12px"}},[s("b",[t._v("CRM: ")]),t._v(" "+t._s(t.dadosUsuarioLogado.crm)+"\n          ")])]),t.usuarioLogado&&t.dadosUsuarioLogado.aceite?s("q-btn",{staticStyle:{"margin-top":"-25px",float:"right"},attrs:{icon:"info",to:"/sobre",flat:""}}):t._e()],1),s("br")],1),t.getUsuarioSenhaIguais&&t.usuarioLogado?s("BarraLoginSenhaIguais"):t._e(),t.usuarioLogado&&t.dadosUsuarioLogado.aceite?s("BarraNavegacaoDesktop",{staticClass:"gt-sm"}):t._e()],1),s("q-footer",{attrs:{elevated:""}},[s("q-toolbar",[s("q-toolbar-title",[s("div",{staticClass:"text-caption desktop-only gt-sm",staticStyle:{float:"right"}},[t._v("\n          Desenvolvido pelo Departamento de Informática em Saúde\n        ")]),s("span",{staticClass:"text-caption flex flex-center lt-md"},[t._v("\n          Desenvolvido pelo DIS\n        ")])])],1)],1),s("q-page-container",[s("router-view",{attrs:{teste:3}})],1),s("q-dialog",{model:{value:t.getDialogErro,callback:function(a){t.getDialogErro=a},expression:"getDialogErro"}},[s("q-card",[s("q-card-section",[s("div",{staticClass:"text-h6 text-center text-negative"},[s("q-icon",{attrs:{name:"error"}}),t._v("\n          Erro\n        ")],1)]),s("q-card-section",{staticClass:"q-pt-none"},[s("p",{staticClass:"text-justify"},[t._v("\n          "+t._s(t.getDialogMsg)+"\n        ")])]),s("q-card-actions",{attrs:{align:"right"}},[s("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",label:"OK",color:"primary"},on:{click:function(a){return t.escondeMsgErro()}}})],1)],1)],1)],1)},o=[],i=e("ded3"),r=e.n(i),l=(e("e6cf"),function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("q-toolbar",{staticClass:"bg-secondary"},[e("q-btn",{ref:"consultaPaciente",staticClass:"bg-accent",attrs:{stretch:"",flat:"",to:"/consulta_paciente",label:"Paciente"},on:{click:function(a){return t.isBtnActive("consultaPaciente")}}},[e("router-link",{staticClass:"nav-link",attrs:{to:"/consulta_paciente"}})],1),e("q-btn",{ref:"chat",attrs:{stretch:"",flat:"",to:"/chat",label:"Chat"},on:{click:function(a){return t.isBtnActive("chat")}}},[e("router-link",{staticClass:"nav-link",attrs:{to:"/chat"}})],1),t.usuarioLogado&&"coordenador"==t.dadosUsuarioLogado.tipo?e("q-btn",{ref:"areaAcesso",attrs:{stretch:"",flat:"",to:"/area_acesso",label:"Área de Acesso"},on:{click:function(a){return t.isBtnActive("areaAcesso")}}},[e("router-link",{staticClass:"nav-link",attrs:{to:"/area_acesso"}})],1):t._e(),e("q-btn-dropdown",{attrs:{stretch:"",flat:"",label:"Tabelas Auxiliares"}},[e("q-list",{staticClass:"bg-secondary"},[e("q-item",[e("q-btn",{staticStyle:{color:"white"},attrs:{stretch:"",flat:"",to:"/resultado_ap",label:"Resultado Anatomia Patológica"}},[e("router-link",{staticClass:"nav-link",attrs:{to:"/resultado_ap"}})],1)],1),e("q-item",[e("q-btn",{staticStyle:{color:"white"},attrs:{stretch:"",flat:"",to:"/indicacao",label:"Indicação"}},[e("router-link",{staticClass:"nav-link",attrs:{to:"/indicacao"}})],1)],1),e("q-item",[e("q-btn",{staticStyle:{color:"white"},attrs:{stretch:"",flat:"",to:"/instituicao",label:"Instituição"}},[e("router-link",{staticClass:"nav-link",attrs:{to:"/instituicao"}})],1)],1),e("q-item",[e("q-btn",{staticStyle:{color:"white"},attrs:{stretch:"",flat:"",to:"/mac",label:"MAC"}},[e("router-link",{staticClass:"nav-link",attrs:{to:"/mac"}})],1)],1)],1)],1),e("q-btn",{ref:"revisao",attrs:{stretch:"",flat:"",to:"/revisao",label:"Revisão"},on:{click:function(a){return t.isBtnActive("revisao")}}},[e("router-link",{staticClass:"nav-link",attrs:{to:"/revisao"}})],1),e("q-btn",{attrs:{stretch:"",flat:"",label:"Sair"},on:{click:t.efetuarLogout}})],1)}),c=[],n=e("2f62"),d={name:"BarraNavDesktop",computed:r()({},Object(n["c"])("principal",["usuarioLogado","dadosUsuarioLogado","getDialogErro","getDialogMsg","getUsuarioSenhaIguais"])),methods:{efetuarLogout(){this.$store.commit("principal/DESLOGAR_USUARIO"),this.$router.push({name:"login"})},isBtnActive(t){let a=Object.keys(this.$refs);for(let e=0;e<a.length;e++)a[e]==t?(this.$refs[t].$el.classList.remove("bg-secondary"),this.$refs[t].$el.classList.add("bg-accent")):(this.$refs[a[e]].$el.classList.remove("bg-accent"),this.$refs[a[e]].$el.classList.add("bg-secondary"));console.log(this.$refs[t])}}},u=d,p=e("2877"),m=e("65c6"),g=e("9c40"),v=e("f20b"),b=e("1c1c"),f=e("66e5"),h=e("eebe"),q=e.n(h),_=Object(p["a"])(u,l,c,!1,null,null,null),k=_.exports;q()(_,"components",{QToolbar:m["a"],QBtn:g["a"],QBtnDropdown:v["a"],QList:b["a"],QItem:f["a"]});var x=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("q-toolbar",{staticClass:"bg-negative text-white text-caption "},[t._v("\n  Sua senha e login estão iguais, sugerimos que troque a senha \n\n  "),e("q-btn",{staticClass:"text-center text-caption q-my-auto",staticStyle:{border:"1px solid white",height:"30px"},attrs:{stretch:"",flat:"",dense:"",to:"/trocar_senha",label:"Trocar Senha"}})],1)},y=[],L={},C=Object(p["a"])(L,x,y,!1,null,null,null),S=C.exports;q()(C,"components",{QToolbar:m["a"],QBtn:g["a"]});e("09f9");var w={name:"MainLayout",components:{BarraNavegacaoDesktop:k,BarraLoginSenhaIguais:S},computed:r()({},Object(n["c"])("principal",["usuarioLogado","dadosUsuarioLogado","getDialogErro","getDialogMsg","getUsuarioSenhaIguais"])),data(){return{drawerLeft:!1,abrirDropdownMobile:!1,nomeSplitado:""}},async mounted(){await this.verificaUsuarioSenhaIguais()},methods:r()({efetuarLogout(){this.$store.commit("principal/DESLOGAR_USUARIO"),this.$router.push({name:"login"})}},Object(n["b"])("principal",["escondeMsgErro","verificaUsuarioSenhaIguais"]))},U=w,A=(e("a68b"),e("4d5a")),D=e("e359"),Q=e("6ac5"),I=e("9404"),$=e("4074"),M=e("0016"),N=e("4e73"),B=e("7ff0"),E=e("09e3"),O=e("24e8"),T=e("f09f"),R=e("a370"),z=e("4b7e"),P=e("714f"),j=e("7f67"),H=Object(p["a"])(U,s,o,!1,null,"2be3b51b",null);a["default"]=H.exports;q()(H,"components",{QLayout:A["a"],QHeader:D["a"],QToolbar:m["a"],QToolbarTitle:Q["a"],QBtn:g["a"],QDrawer:I["a"],QList:b["a"],QItem:f["a"],QItemSection:$["a"],QIcon:M["a"],QMenu:N["a"],QFooter:B["a"],QPageContainer:E["a"],QDialog:O["a"],QCard:T["a"],QCardSection:R["a"],QCardActions:z["a"]}),q()(H,"directives",{Ripple:P["a"],ClosePopup:j["a"]})},a68b:function(t,a,e){"use strict";e("f73f")},f73f:function(t,a,e){},fa6d:function(t,a,e){t.exports=e.p+"img/logo_unifesp.a3c1ec51.png"}}]);