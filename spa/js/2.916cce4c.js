(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[2],{"25f8":function(t,a,s){"use strict";s("567b")},"567b":function(t,a,s){},"713b":function(t,a,s){"use strict";s.r(a);var e=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("q-layout",{attrs:{view:"lHh Lpr lFf"}},[e("q-header",{staticClass:"bg-primary text-white",attrs:{reveal:"",bordered:""}},[e("q-toolbar",[e("q-toolbar-title",{staticClass:"row full-width"},[t.usuarioLogado&&t.dadosUsuarioLogado.aceite?e("q-btn",{staticClass:"col-xs-1 col-sm-1 lt-md q-mb-xs",attrs:{flat:"",icon:"menu",id:"btnHamburger"},on:{click:function(a){t.drawerLeft=!0}}}):t._e(),t.usuarioLogado&&t.dadosUsuarioLogado.aceite?e("q-drawer",{directives:[{name:"show",rawName:"v-show",value:t.drawerLeft,expression:"drawerLeft"}],attrs:{"show-if-above":"",width:200,breakpoint:1e4,elevated:"",side:"left"},model:{value:t.drawerLeft,callback:function(a){t.drawerLeft=a},expression:"drawerLeft"}},[e("q-list",{staticClass:"rounded-borders text-primary",staticStyle:{"font-size":"12px"},attrs:{bordered:"",padding:""}},[e("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{clickable:"",exact:"","active-class":"my-menu-link",to:"/consulta_paciente"}},[e("q-item-section",{attrs:{avatar:""}},[e("q-icon",{attrs:{name:"home"}})],1),e("q-item-section",[t._v("Paciente")])],1),t.usuarioLogado&&"coordenador"==t.dadosUsuarioLogado.tipo?e("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{clickable:"",exact:"","active-class":"my-menu-link",to:"/area_acesso"}},[e("q-item-section",{attrs:{avatar:""}},[e("q-icon",{attrs:{name:"manage_accounts"}})],1),e("q-item-section",[t._v("Área Acesso")])],1):t._e(),"coordenador"==t.dadosUsuarioLogado.tipo?e("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{clickable:"",exact:"","active-class":"my-menu-link"}},[e("q-item-section",{attrs:{avatar:""}},[e("q-icon",{attrs:{name:"table_chart"}})],1),e("q-item-section",[t._v("Tabelas Auxiliares\n                "),e("q-menu",[e("q-list",["coordenador"==t.dadosUsuarioLogado.tipo?e("q-item",{staticStyle:{color:"#007c3d"},attrs:{"active-class":"my-menu-link"}},[e("q-btn",{attrs:{stretch:"",flat:"",to:"/resultado_ap",label:"Resultado AP"}},[e("router-link",{staticClass:"nav-link",attrs:{to:"/resultado_ap"}})],1)],1):t._e(),"coordenador"==t.dadosUsuarioLogado.tipo?e("q-item",{attrs:{"active-class":"my-menu-link"}},[e("q-btn",{staticStyle:{color:"#007c3d"},attrs:{stretch:"",flat:"",to:"/indicacao",label:"Indicação"}},[e("router-link",{staticClass:"nav-link",attrs:{to:"/indicacao"}})],1)],1):t._e(),"coordenador"==t.dadosUsuarioLogado.tipo?e("q-item",{attrs:{"active-class":"my-menu-link"}},[e("q-btn",{staticStyle:{color:"#007c3d"},attrs:{stretch:"",flat:"",to:"/instituicao",label:"Instituição"}},[e("router-link",{staticClass:"nav-link",attrs:{to:"/instituicao"}})],1)],1):t._e(),"coordenador"==t.dadosUsuarioLogado.tipo?e("q-item",{attrs:{"active-class":"my-menu-link"}},[e("q-btn",{staticStyle:{color:"#007c3d"},attrs:{stretch:"",flat:"",to:"/mac",label:"MAC"}},[e("router-link",{staticClass:"nav-link",attrs:{to:"/mac"}})],1)],1):t._e(),"coordenador"==t.dadosUsuarioLogado.tipo?e("q-item",{attrs:{"active-class":"my-menu-link"}},[e("q-btn",{staticStyle:{color:"#007c3d"},attrs:{stretch:"",flat:"",to:"/cid",label:"CID"}},[e("router-link",{staticClass:"nav-link",attrs:{to:"/cid"}})],1)],1):t._e()],1)],1)],1)],1):t._e(),"coordenador"==t.dadosUsuarioLogado.tipo?e("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{clickable:"",exact:"","active-class":"my-menu-link",to:"/revisao"}},[e("q-item-section",{attrs:{avatar:""}},[e("q-icon",{attrs:{name:"search"}})],1),e("q-item-section",[t._v("Revisão")])],1):t._e(),e("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{clickable:"",exact:"","active-class":"my-menu-link"},on:{click:t.efetuarLogout}},[e("q-item-section",{attrs:{avatar:""}},[e("q-icon",{attrs:{name:"logout"}})],1),e("q-item-section",[t._v("Sair")])],1)],1)],1):t._e(),e("div",{staticClass:"col-xs-2 col-sm-2 col-md-2 col-lg-1 col-xl-1 q-mt-sm q-mb-xs"},[e("img",{staticClass:"gt-md",staticStyle:{display:"block"},attrs:{width:"100px",src:s("fa6d"),id:"logoUnifesp"}}),e("img",{staticClass:"gt-sm lt-lg q-ml-lg q-mt-xs",staticStyle:{display:"block"},attrs:{width:"100px",src:s("fa6d"),id:"logoUnifesp"}}),e("img",{staticClass:"gt-xs lt-md",staticStyle:{display:"block"},attrs:{width:"80px",src:s("fa6d"),id:"logoUnifesp"}}),e("img",{staticClass:"lt-sm q-mt-sm q-ml-xs",staticStyle:{display:"block"},attrs:{width:"65px",src:s("fa6d"),id:"logoUnifesp"}})]),e("div",{staticClass:"col-xs-3 col-sm-2 col-md-4 col-lg-5 col-xl-3"},[e("span",{staticClass:"lt-sm q-mt-lg q-ml-lg",staticStyle:{"font-size":"12px",display:"block"}},[t._v("Mola"),e("i",[t._v("App")])]),e("span",{staticClass:"gt-xs lt-md q-mt-md",staticStyle:{"font-size":"16px",display:"block"}},[t._v("Mola"),e("i",[t._v("App")])]),e("span",{directives:[{name:"show",rawName:"v-show",value:t.$q.screen.gt.sm,expression:"$q.screen.gt.sm"}],staticClass:"gt-sm",staticStyle:{"font-size":"15px",display:"block"}},[t._v("Mola"),e("i",[t._v("App")])]),e("span",{directives:[{name:"show",rawName:"v-show",value:t.$q.screen.gt.sm,expression:"$q.screen.gt.sm"}],staticClass:"gt-sm",staticStyle:{"font-size":"15px",display:"block"}},[t._v("Ambulatório de DTG")]),e("span",{directives:[{name:"show",rawName:"v-show",value:t.$q.screen.gt.sm,expression:"$q.screen.gt.sm"}],staticClass:"gt-sm",staticStyle:{"font-size":"15px",display:"block"}},[t._v("Departamento de Obstetricia - HUHSP")])]),e("div",{directives:[{name:"show",rawName:"v-show",value:t.usuarioLogado,expression:"usuarioLogado"}],staticClass:"col-xs-6 col-sm-7 col-md-6 col-lg-6 col-xl-7"},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.$q.screen.gt.md,expression:"$q.screen.gt.md"}],staticClass:"gt-md fixed top-right q-ml-xl"},[e("span",{staticStyle:{"font-size":"13px"}},[e("b",[t._v("Nome:")]),t._v(" "+t._s(t.dadosUsuarioLogado.nome)+"   -")]),t._v(" \n            "),e("span",{staticStyle:{"font-size":"13px"}},[e("b",[t._v("Tipo: ")]),t._v(" "+t._s(t.dadosUsuarioLogado.tipo)+"   -")]),t._v(" \n            "),e("span",{staticStyle:{"font-size":"13px"}},[e("b",[t._v("Categoria: ")]),t._v(" "+t._s(t.dadosUsuarioLogado.categoria)+"   - ")]),t._v(" \n            "),e("span",{staticStyle:{"font-size":"13px"}},[e("b",[t._v("CRM: ")]),t._v(" "+t._s(t.dadosUsuarioLogado.crm)+"\n            ")])]),e("div",{directives:[{name:"show",rawName:"v-show",value:t.$q.screen.gt.sm&&t.$q.screen.lt.lg,expression:"$q.screen.gt.sm && $q.screen.lt.lg"}],staticClass:"gt-sm lt-lg row"},[e("div",{staticClass:"col-md-7 q-mt-sm"},[e("span",{staticStyle:{"font-size":"13px",display:"block"}},[e("b",[t._v("Nome:")]),t._v(" "+t._s(t.dadosUsuarioLogado.nome))]),e("span",{staticStyle:{"font-size":"13px"}},[e("b",[t._v("CRM:")]),t._v(" "+t._s(t.dadosUsuarioLogado.crm))])]),e("div",{staticClass:"col-md-4 q-mt-sm"},[e("span",{staticStyle:{"font-size":"13px",display:"block"}},[e("b",[t._v("Categoria: ")]),t._v(" "+t._s(t.dadosUsuarioLogado.categoria))]),e("span",{staticStyle:{"font-size":"13px"}},[e("b",[t._v("Tipo: ")]),t._v(" "+t._s(t.dadosUsuarioLogado.tipo)+"\n              ")])]),e("div",{staticClass:"col-md-1 q-mt-md"},[t.usuarioLogado&&t.dadosUsuarioLogado.aceite?e("q-btn",{staticClass:"lt-lg gt-sm q-mt-xs",staticStyle:{float:"right"},attrs:{icon:"info",to:"/sobre",flat:"",id:"btnSobre"}}):t._e()],1)]),e("div",{directives:[{name:"show",rawName:"v-show",value:t.$q.screen.gt.xs&&t.$q.screen.lt.md,expression:"$q.screen.gt.xs && $q.screen.lt.md"}],staticClass:"gt-xs lt-md row"},[e("div",{staticClass:"col-sm-7 q-mt-sm"},[e("span",{staticStyle:{"font-size":"11px",display:"block"}},[e("b",[t._v("Nome:")]),t._v(" "+t._s(t.dadosUsuarioLogado.nome))]),e("span",{staticStyle:{"font-size":"11px"}},[e("b",[t._v("CRM:")]),t._v(" "+t._s(t.dadosUsuarioLogado.crm))])]),e("div",{staticClass:"col-sm-4 q-mt-sm"},[e("span",{staticStyle:{"font-size":"11px",display:"block"}},[e("b",[t._v("Categoria: ")]),t._v(" "+t._s(t.dadosUsuarioLogado.categoria))]),e("span",{staticStyle:{"font-size":"11px"}},[e("b",[t._v("Tipo: ")]),t._v(" "+t._s(t.dadosUsuarioLogado.tipo)+"\n              ")])]),e("div",{staticClass:"col-sm-1 q-mt-md"},[t.usuarioLogado&&t.dadosUsuarioLogado.aceite?e("q-btn",{staticClass:"lt-md gt-xs q-mt-xs",staticStyle:{float:"right"},attrs:{icon:"info",to:"/sobre",flat:"",id:"btnSobre"}}):t._e()],1)]),e("div",{directives:[{name:"show",rawName:"v-show",value:t.$q.screen.lt.sm,expression:"$q.screen.lt.sm"}],staticClass:"lt-sm q-ml-xs",staticStyle:{"margin-top":"-3%"}},[e("span",{staticStyle:{"font-size":"10px",diplay:"block"}},[e("b",[t._v("Nome:")]),t._v(" "+t._s(t.dadosUsuarioLogado.nome))]),e("br"),e("span",{staticStyle:{"font-size":"10px"}},[e("b",[t._v("CRM:")]),t._v(" "+t._s(t.dadosUsuarioLogado.crm))]),t.usuarioLogado&&t.dadosUsuarioLogado.aceite?e("q-btn",{staticClass:"lt-sm q-mb-sm",staticStyle:{float:"right"},attrs:{icon:"info",to:"/sobre",flat:"",id:"btnSobre"}}):t._e()],1),t.usuarioLogado&&t.dadosUsuarioLogado.aceite?e("q-btn",{staticClass:"gt-md q-mt-lg",staticStyle:{float:"right"},attrs:{icon:"info",to:"/sobre",flat:"",id:"btnSobre"}}):t._e()],1)],1)],1),t.getUsuarioSenhaIguais&&t.usuarioLogado?e("BarraLoginSenhaIguais"):t._e(),t.usuarioLogado&&t.dadosUsuarioLogado.aceite?e("BarraNavegacaoDesktop",{staticClass:"gt-sm"}):t._e()],1),e("q-footer",{attrs:{elevated:""}},[e("q-toolbar",[e("q-toolbar-title",[e("div",{staticClass:"text-caption desktop-only gt-sm",staticStyle:{float:"right"}},[t._v("\n          Desenvolvido pelo Departamento de Informática em Saúde\n        ")]),e("span",{staticClass:"text-caption flex flex-center lt-md"},[t._v("\n          Desenvolvido pelo DIS\n        ")])])],1)],1),e("q-page-container",[e("router-view",{attrs:{teste:3}})],1),e("q-dialog",{model:{value:t.getDialogErro,callback:function(a){t.getDialogErro=a},expression:"getDialogErro"}},[e("q-card",[e("q-card-section",[e("div",{staticClass:"text-h6 text-center text-negative"},[e("q-icon",{attrs:{name:"error"}}),t._v("\n          Erro\n        ")],1)]),e("q-card-section",{staticClass:"q-pt-none"},[e("p",{staticClass:"text-justify"},[t._v("\n          "+t._s(t.getDialogMsg)+"\n        ")])]),e("q-card-actions",{attrs:{align:"right"}},[e("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",label:"OK",color:"primary"},on:{click:function(a){return t.escondeMsgErro()}}})],1)],1)],1)],1)},o=[],i=s("ded3"),r=s.n(i),l=(s("e6cf"),function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("q-toolbar",{staticClass:"bg-secondary"},[s("q-btn",{ref:"consultaPaciente",staticClass:"bg-accent",attrs:{stretch:"",flat:"",to:"/consulta_paciente",label:"Paciente"},on:{click:function(a){return t.isBtnActive("consultaPaciente")}}},[s("router-link",{staticClass:"nav-link",attrs:{to:"/consulta_paciente"}})],1),t.usuarioLogado&&"coordenador"==t.dadosUsuarioLogado.tipo?s("q-btn",{ref:"areaAcesso",attrs:{stretch:"",flat:"",to:"/area_acesso",label:"Área de Acesso"},on:{click:function(a){return t.isBtnActive("areaAcesso")}}},[s("router-link",{staticClass:"nav-link",attrs:{to:"/area_acesso"}})],1):t._e(),"coordenador"==t.dadosUsuarioLogado.tipo?s("q-btn-dropdown",{ref:"tabelasAuxiliares",attrs:{stretch:"",flat:"",label:"Tabelas Auxiliares"},on:{click:function(a){return t.isBtnActive("tabelasAuxiliares")}}},[s("q-list",{staticClass:"bg-secondary"},["coordenador"==t.dadosUsuarioLogado.tipo?s("q-item",[s("q-btn",{staticStyle:{color:"white"},attrs:{stretch:"",flat:"",to:"/resultado_ap",label:"Resultado Anatomia Patológica"}},[s("router-link",{staticClass:"nav-link",attrs:{to:"/resultado_ap"}})],1)],1):t._e(),"coordenador"==t.dadosUsuarioLogado.tipo?s("q-item",[s("q-btn",{staticStyle:{color:"white"},attrs:{stretch:"",flat:"",to:"/indicacao",label:"Indicação"}},[s("router-link",{staticClass:"nav-link",attrs:{to:"/indicacao"}})],1)],1):t._e(),"coordenador"==t.dadosUsuarioLogado.tipo?s("q-item",[s("q-btn",{staticStyle:{color:"white"},attrs:{stretch:"",flat:"",to:"/instituicao",label:"Instituição"}},[s("router-link",{staticClass:"nav-link",attrs:{to:"/instituicao"}})],1)],1):t._e(),"coordenador"==t.dadosUsuarioLogado.tipo?s("q-item",[s("q-btn",{staticStyle:{color:"white"},attrs:{stretch:"",flat:"",to:"/mac",label:"MAC"}},[s("router-link",{staticClass:"nav-link",attrs:{to:"/mac"}})],1)],1):t._e(),"coordenador"==t.dadosUsuarioLogado.tipo?s("q-item",{attrs:{"active-class":"my-menu-link"}},[s("q-btn",{staticStyle:{color:"white"},attrs:{stretch:"",flat:"",to:"/cid",label:"CID"}},[s("router-link",{staticClass:"nav-link",attrs:{to:"/cid"}})],1)],1):t._e()],1)],1):t._e(),"coordenador"==t.dadosUsuarioLogado.tipo?s("q-btn",{ref:"revisao",attrs:{stretch:"",flat:"",to:"/revisao",label:"Revisão"},on:{click:function(a){return t.isBtnActive("revisao")}}},[s("router-link",{staticClass:"nav-link",attrs:{to:"/revisao"}})],1):t._e(),s("q-btn",{attrs:{stretch:"",flat:"",label:"Sair"},on:{click:t.efetuarLogout}})],1)}),c=[],n=s("2f62"),d={name:"BarraNavDesktop",computed:r()({},Object(n["c"])("principal",["usuarioLogado","dadosUsuarioLogado","getDialogErro","getDialogMsg","getUsuarioSenhaIguais"])),methods:{efetuarLogout(){this.$store.commit("principal/DESLOGAR_USUARIO"),this.$router.push({name:"login"})},isBtnActive(t){let a=Object.keys(this.$refs);for(let s=0;s<a.length;s++)a[s]==t?(this.$refs[t].$el.classList.remove("bg-secondary"),this.$refs[t].$el.classList.add("bg-accent")):(this.$refs[a[s]].$el.classList.remove("bg-accent"),this.$refs[a[s]].$el.classList.add("bg-secondary"))}}},m=d,u=s("2877"),p=s("65c6"),g=s("9c40"),v=s("f20b"),b=s("1c1c"),f=s("66e5"),q=s("eebe"),_=s.n(q),h=Object(u["a"])(m,l,c,!1,null,null,null),x=h.exports;_()(h,"components",{QToolbar:p["a"],QBtn:g["a"],QBtnDropdown:v["a"],QList:b["a"],QItem:f["a"]});var y=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("q-toolbar",{staticClass:"bg-negative text-white text-caption "},[t._v("\n  Sua senha e login estão iguais, sugerimos que troque a senha \n\n  "),s("q-btn",{staticClass:"text-center text-caption q-my-auto",staticStyle:{border:"1px solid white",height:"30px"},attrs:{stretch:"",flat:"",dense:"",to:"/trocar_senha",label:"Trocar Senha"}})],1)},L=[],k={},w=Object(u["a"])(k,y,L,!1,null,null,null),C=w.exports;_()(w,"components",{QToolbar:p["a"],QBtn:g["a"]});s("09f9");var S={name:"MainLayout",components:{BarraNavegacaoDesktop:x,BarraLoginSenhaIguais:C},computed:r()({},Object(n["c"])("principal",["usuarioLogado","dadosUsuarioLogado","getDialogErro","getDialogMsg","getUsuarioSenhaIguais"])),data(){return{drawerLeft:!1,abrirDropdownMobile:!1,nomeSplitado:""}},async mounted(){await this.verificaUsuarioSenhaIguais()},methods:r()({efetuarLogout(){this.$store.commit("principal/DESLOGAR_USUARIO"),this.$router.push({name:"login"})}},Object(n["b"])("principal",["escondeMsgErro","verificaUsuarioSenhaIguais"]))},U=S,$=(s("25f8"),s("4d5a")),A=s("e359"),D=s("6ac5"),Q=s("9404"),N=s("4074"),I=s("0016"),z=s("4e73"),M=s("7ff0"),B=s("09e3"),E=s("24e8"),O=s("f09f"),R=s("a370"),T=s("4b7e"),P=s("714f"),j=s("7f67"),H=Object(u["a"])(U,e,o,!1,null,"7811d624",null);a["default"]=H.exports;_()(H,"components",{QLayout:$["a"],QHeader:A["a"],QToolbar:p["a"],QToolbarTitle:D["a"],QBtn:g["a"],QDrawer:Q["a"],QList:b["a"],QItem:f["a"],QItemSection:N["a"],QIcon:I["a"],QMenu:z["a"],QFooter:M["a"],QPageContainer:B["a"],QDialog:E["a"],QCard:O["a"],QCardSection:R["a"],QCardActions:T["a"]}),_()(H,"directives",{Ripple:P["a"],ClosePopup:j["a"]})},fa6d:function(t,a,s){t.exports=s.p+"img/logo_unifesp.a3c1ec51.png"}}]);