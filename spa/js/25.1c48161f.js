(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[25],{5605:function(a,e,n){"use strict";n.r(e);var t=function(){var a=this,e=a.$createElement,n=a._self._c||e;return n("q-page",{staticClass:"flex flex-center row"},[n("p",{staticClass:"full-width text-center",staticStyle:{"font-size":"20px","margin-top":"16px","margin-right":"auto","margin-left":"auto"}},[n("b",[a._v("Trocar Senha")])]),n("q-form",{staticClass:"row q-px-md col-12 col-xs-12 col-sm-8 col-md-5 col-lg-4",staticStyle:{"padding-bottom":"135%"},on:{submit:function(e){return e.stopPropagation(),a.onSubmit(e)},reset:a.onReset}},[n("q-input",{staticClass:"q-pa-xs col-12",attrs:{label:"Login",rules:[function(a){return a.length>0||"Digite um login"},function(a){return a.length<=50||"O login deve ter no máximo 50 caracteres"}],maxlength:"50",dense:""},model:{value:a.trocarSenha.login,callback:function(e){a.$set(a.trocarSenha,"login",e)},expression:"trocarSenha.login"}}),n("q-input",{staticClass:"q-pa-xs col-12",attrs:{type:a.esconderSenhaAtual?"password":"text",label:"Senha Atual",rules:[function(a){return a.length>0||"Digite uma senha"},function(a){return a.length<=100||"A senha deve ter no máximo 100 caracteres"}],maxlength:"100",dense:""},scopedSlots:a._u([{key:"append",fn:function(){return[n("q-icon",{staticClass:"cursor-pointer",attrs:{name:a.esconderSenhaAtual?"visibility_off":"visibility"},on:{click:function(e){a.esconderSenhaAtual=!a.esconderSenhaAtual}}})]},proxy:!0}]),model:{value:a.trocarSenha.senhaAtual,callback:function(e){a.$set(a.trocarSenha,"senhaAtual",e)},expression:"trocarSenha.senhaAtual"}}),n("q-input",{staticClass:"q-pa-xs col-12",attrs:{type:a.esconderNovaSenha?"password":"text",label:"Nova Senha",rules:[function(a){return a.length>0||"Digite uma senha"},function(a){return a.length<=100||"A senha deve ter no máximo 100 caracteres"}],maxlength:"100",dense:""},scopedSlots:a._u([{key:"append",fn:function(){return[n("q-icon",{staticClass:"cursor-pointer",attrs:{name:a.esconderNovaSenha?"visibility_off":"visibility"},on:{click:function(e){a.esconderNovaSenha=!a.esconderNovaSenha}}})]},proxy:!0}]),model:{value:a.trocarSenha.novaSenha,callback:function(e){a.$set(a.trocarSenha,"novaSenha",e)},expression:"trocarSenha.novaSenha"}}),n("q-input",{staticClass:"q-pa-xs col-12",attrs:{type:a.esconderConfirmacaoNovaSenha?"password":"text",label:"Confirmar Nova Senha",rules:[function(e){return e&&e==a.trocarSenha.novaSenha||"A confirmação da nova senha não corresponde"}],maxlength:"100",dense:""},scopedSlots:a._u([{key:"append",fn:function(){return[n("q-icon",{staticClass:"cursor-pointer",attrs:{name:a.esconderConfirmacaoNovaSenha?"visibility_off":"visibility"},on:{click:function(e){a.esconderConfirmacaoNovaSenha=!a.esconderConfirmacaoNovaSenha}}})]},proxy:!0}]),model:{value:a.trocarSenha.confirmarNovaSenha,callback:function(e){a.$set(a.trocarSenha,"confirmarNovaSenha",e)},expression:"trocarSenha.confirmarNovaSenha"}}),n("div",{staticClass:"q-gutter-md",staticStyle:{"margin-right":"auto","margin-left":"auto","margin-top":"auto"}},[n("q-btn",{attrs:{label:"Alterar",type:"submit",color:"primary"}}),n("q-btn",{attrs:{label:"Limpar",type:"reset",color:"primary"}}),n("q-btn",{attrs:{label:"Voltar",to:"/sobre",color:"primary"}})],1)],1)],1)},o=[],r=n("2a19"),s={name:"TrocarSenha",data(){return{trocarSenha:{login:"",senhaAtual:"",novaSenha:"",confirmarNovaSenha:""},esconderSenhaAtual:!0,esconderNovaSenha:!0,esconderConfirmacaoNovaSenha:!0}},methods:{onSubmit(){var a={login:this.trocarSenha.login,senha:this.trocarSenha.senhaAtual,nova_senha:this.trocarSenha.novaSenha};this.$store.dispatch("principal/trocarSenha",a).then((a=>{r["a"].create({message:"Senha alterada com sucesso.",color:"positive"}),this.$store.dispatch("principal/verificaUsuarioSenhaIguais"),this.$router.push({name:"sobre"})})).catch((a=>{console.log(a)}))},onReset(){this.trocarSenha.login="",this.trocarSenha.senhaAtual="",this.trocarSenha.novaSenha="",this.trocarSenha.confirmarNovaSenha=""}}},i=s,c=n("2877"),l=n("9989"),h=n("0378"),u=n("27f9"),p=n("0016"),S=n("9c40"),m=n("24e8"),d=n("f09f"),f=n("a370"),v=n("4b7e"),g=n("7f67"),b=n("eebe"),x=n.n(b),y=Object(c["a"])(i,t,o,!1,null,null,null);e["default"]=y.exports;x()(y,"components",{QPage:l["a"],QForm:h["a"],QInput:u["a"],QIcon:p["a"],QBtn:S["a"],QDialog:m["a"],QCard:d["a"],QCardSection:f["a"],QCardActions:v["a"]}),x()(y,"directives",{ClosePopup:g["a"]})}}]);