(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[27],{ac8d:function(e,a,o){"use strict";o.r(a);var i=function(){var e=this,a=e.$createElement,o=e._self._c||a;return o("q-page",{staticClass:"flex flex-center"},[o("div",{staticClass:"full-width",staticStyle:{"padding-bottom":"135%"}},[o("fieldset",{staticStyle:{border:"1px solid",width:"99%","margin-left":"0.5%"}},[o("legend",{attrs:{align:"center"}},[o("h5",{staticStyle:{}},[e._v("Termo de Aceite")])]),o("p",{staticClass:"text-justify",staticStyle:{width:"99%","margin-left":"0.5%"}},[e._v("\n        Em face do direito à preservação da intimidade e do direito à\n        indenização por eventual dano moral ou material, não é permitido a\n        quebra do sigilo profissional existente entre o médico e o paciente,\n        salvo as exceções previstas em Lei, sob pena de incidir em sanções\n        civis e penais:\n        "),o("b",[e._v('"Art. 73. Revelar fato de que tenha conhecimento em virtude do\n          exercício de sua profissão, salvo por motivo justo, dever legal ou\n          consentimento, por escrito, do paciente".')])]),o("p",{staticClass:"text-justify",staticStyle:{width:"99%","margin-left":"0.5%"}},[e._v("\n        Documentos e informações adquiridos pelo médico, que pertence ao\n        paciente, é um documento amparado pelo sigilo profissional (art. 5º,\n        XIV da CF/88). O CFM dispõe que o conteúdo do prontuário médico poderá\n        ser revelado a terceiros se houver a autorização do paciente, conforme\n        estabelece o artigo 5º da Resolução CFM n.º 1605/2000, se houver a\n        anuência do Conselho Regional de Medicina da jurisdição ou autorização\n        judicial:\n        "),o("b",[e._v('"Art. 85. Permitir o manuseio e o conhecimento dos prontuários por\n          pessoas não obrigadas ao sigilo profissional quando sob sua\n          responsabilidade".')])]),o("p",{staticClass:"text-justify",staticStyle:{width:"99%","margin-left":"0.5%"}},[o("b",[e._v("Por analogia aplica-se as mesmas regras jurídicas na telemedicina e\n          suas modalidades: TELEORIENTAÇÃO\n        ")]),e._v("\n        para que médicos realizem orientação à distância e com possibilidade\n        de encaminhamentos. "),o("b",[e._v("TELEMONITORAMENTO ")]),e._v(" médico, ato para\n        monitoramento ou vigilância à distância de parâmetros de saúde ou da\n        doença. "),o("b",[e._v("TELEINTERCONSULTA ")]),e._v(" entre médicos, exclusivamente para\n        troca de informações (clínicas, laboratoriais e de imagens) e,\n        opiniões para auxílio diagnóstico e procedimentos terapêuticos e\n        "),o("b",[e._v("TELECONSULTA ")]),e._v(", realizada entre médico e paciente, sem exame\n        presencial, com a possibilidade de prescrição de tratamento,\n        solicitação de exames e outros procedimentos, bem como emissão de\n        atestado e relatório. Ainda, facultado ao médico decidir sobre\n        atendimento presencial em primeira consulta ou por agravamento no\n        quadro clínico. A telemedicina é considerada interrompida e a paciente\n        encaminhada ao ambulatório ou hospital, dentro da necessidade.\n      ")]),o("p",{staticClass:"text-justify",staticStyle:{width:"99%","margin-left":"0.5%"}},[o("b",[e._v("DOS PRINCÍPIOS FUNDAMENTAIS:")]),o("br"),e._v("\n        XIV - O médico empenhar-se-á em melhorar os padrões dos serviços\n        médicos e em assumir sua responsabilidade em relação à saúde pública,\n        à educação sanitária e à legislação referente à saúde.”\n      ")]),o("p",{staticClass:"text-justify",staticStyle:{width:"99%","margin-left":"0.5%"}},[o("b",[e._v("Ciente e de acordo")])])]),e.dadosUsuarioLogado.aceite?e._e():o("div",{staticClass:"text-center q-gutter-x-xl q-items-end",staticStyle:{"margin-top":"2%"}},[o("q-btn",{attrs:{color:"primary",label:"Aceito"},on:{click:function(a){return e.responderTermoAceite(!0)}}}),o("q-btn",{attrs:{color:"primary",label:"Recuso"},on:{click:function(a){return e.responderTermoAceite(!1)}}})],1),e.dadosUsuarioLogado.aceite?o("div",{staticClass:"text-center q-gutter-x-xl q-items-end",staticStyle:{"margin-top":"2%"}},[o("q-btn",{attrs:{color:"primary",label:"Voltar",to:"/sobre"}})],1):e._e()])])},t=[],s=o("ded3"),n=o.n(s),r=o("2f62"),d={data(){return{modalTermoAceito:!1}},methods:{responderTermoAceite(e){1==e?this.$store.dispatch("principal/responderTermoUsuario",this.dadosUsuarioLogado,1).then((()=>{this.$store.commit("principal/ACEITAR_TERMO_USUARIO",{resposta_termo:1}),this.$router.push({name:"consulta_paciente"})})).catch((e=>{console.log("Erro",e)})):(this.$store.commit("principal/DESLOGAR_USUARIO"),this.$router.push({name:"login"}))}},computed:n()({},Object(r["c"])("principal",["usuarioLogado","dadosUsuarioLogado"]))},c=d,l=o("2877"),m=o("9989"),p=o("66e5"),u=o("9c40"),v=o("24e8"),b=o("f09f"),g=o("a370"),f=o("4b7e"),h=o("7f67"),_=o("eebe"),x=o.n(_),A=Object(l["a"])(c,i,t,!1,null,null,null);a["default"]=A.exports;x()(A,"components",{QPage:m["a"],QItem:p["a"],QBtn:u["a"],QDialog:v["a"],QCard:b["a"],QCardSection:g["a"],QCardActions:f["a"]}),x()(A,"directives",{ClosePopup:h["a"]})}}]);