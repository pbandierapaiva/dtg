(function(e){function n(n){for(var o,a,c=n[0],u=n[1],s=n[2],l=0,d=[];l<c.length;l++)a=c[l],Object.prototype.hasOwnProperty.call(r,a)&&r[a]&&d.push(r[a][0]),r[a]=0;for(o in u)Object.prototype.hasOwnProperty.call(u,o)&&(e[o]=u[o]);f&&f(n);while(d.length)d.shift()();return i.push.apply(i,s||[]),t()}function t(){for(var e,n=0;n<i.length;n++){for(var t=i[n],o=!0,a=1;a<t.length;a++){var c=t[a];0!==r[c]&&(o=!1)}o&&(i.splice(n--,1),e=u(u.s=t[0]))}return e}var o={},a={1:0},r={1:0},i=[];function c(e){return u.p+"js/"+({}[e]||e)+"."+{2:"76c3f0e4",3:"c99cf616",4:"890dbdb3",5:"89a636ff",6:"af13bb0b",7:"2ee73ec1",8:"91ca9300",9:"28677252",10:"417904b9",11:"16bd57ca",12:"965859d0",13:"33cba91e",14:"0fd6cdda",15:"2421e161",16:"93bb0fd6",17:"d9cc97be",18:"b3edcb25",19:"2d780b67",20:"a674159a",21:"779ef2a4",22:"cda072c6",23:"f6dbb00e",24:"bcb0ce87",25:"192e724d",26:"b98e19c5",27:"ae80642b"}[e]+".js"}function u(n){if(o[n])return o[n].exports;var t=o[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,u),t.l=!0,t.exports}u.e=function(e){var n=[],t={2:1,3:1,4:1};a[e]?n.push(a[e]):0!==a[e]&&t[e]&&n.push(a[e]=new Promise((function(n,t){for(var o="css/"+({}[e]||e)+"."+{2:"4f51ec50",3:"03bd12ec",4:"97add43b",5:"31d6cfe0",6:"31d6cfe0",7:"31d6cfe0",8:"31d6cfe0",9:"31d6cfe0",10:"31d6cfe0",11:"31d6cfe0",12:"31d6cfe0",13:"31d6cfe0",14:"31d6cfe0",15:"31d6cfe0",16:"31d6cfe0",17:"31d6cfe0",18:"31d6cfe0",19:"31d6cfe0",20:"31d6cfe0",21:"31d6cfe0",22:"31d6cfe0",23:"31d6cfe0",24:"31d6cfe0",25:"31d6cfe0",26:"31d6cfe0",27:"31d6cfe0"}[e]+".css",r=u.p+o,i=document.getElementsByTagName("link"),c=0;c<i.length;c++){var s=i[c],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===o||l===r))return n()}var d=document.getElementsByTagName("style");for(c=0;c<d.length;c++){s=d[c],l=s.getAttribute("data-href");if(l===o||l===r)return n()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=n,f.onerror=function(n){var o=n&&n.target&&n.target.src||r,i=new Error("Loading CSS chunk "+e+" failed.\n("+o+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=o,delete a[e],f.parentNode.removeChild(f),t(i)},f.href=r;var p=document.getElementsByTagName("head")[0];p.appendChild(f)})).then((function(){a[e]=0})));var o=r[e];if(0!==o)if(o)n.push(o[2]);else{var i=new Promise((function(n,t){o=r[e]=[n,t]}));n.push(o[2]=i);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,u.nc&&l.setAttribute("nonce",u.nc),l.src=c(e);var d=new Error;s=function(n){l.onerror=l.onload=null,clearTimeout(f);var t=r[e];if(0!==t){if(t){var o=n&&("load"===n.type?"missing":n.type),a=n&&n.target&&n.target.src;d.message="Loading chunk "+e+" failed.\n("+o+": "+a+")",d.name="ChunkLoadError",d.type=o,d.request=a,t[1](d)}r[e]=void 0}};var f=setTimeout((function(){s({type:"timeout",target:l})}),12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(n)},u.m=e,u.c=o,u.d=function(e,n,t){u.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,n){if(1&n&&(e=u(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(u.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)u.d(t,o,function(n){return e[n]}.bind(null,o));return t},u.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(n,"a",n),n},u.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},u.p="",u.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=n,s=s.slice();for(var d=0;d<s.length;d++)n(s[d]);var f=l;i.push([0,0]),t()})({0:function(e,n,t){e.exports=t("2f39")},"2f39":function(e,n,t){"use strict";t.r(n);var o={};t.r(o),t.d(o,"usuarioLogado",(function(){return P})),t.d(o,"getToken",(function(){return O})),t.d(o,"usuarioDelegacao",(function(){return y})),t.d(o,"dadosUsuarioLogado",(function(){return S})),t.d(o,"eCoordenador",(function(){return R})),t.d(o,"getDialogErro",(function(){return w})),t.d(o,"getDialogMsg",(function(){return A})),t.d(o,"getUsuarioSenhaIguais",(function(){return I}));var a={};t.r(a),t.d(a,"DEFINIR_USUARIO_LOGADO",(function(){return U})),t.d(a,"DESLOGAR_USUARIO",(function(){return k})),t.d(a,"ACEITAR_TERMO_USUARIO",(function(){return x})),t.d(a,"DELEGAR_USUARIO",(function(){return T})),t.d(a,"EXIBIR_ERRO",(function(){return j})),t.d(a,"REMOVER_ERRO",(function(){return L})),t.d(a,"SET_USUARIO_SENHA_IGUAIS",(function(){return C}));var r={};t.r(r),t.d(r,"efetuarLogin",(function(){return D})),t.d(r,"verificaErro",(function(){return M})),t.d(r,"escondeMsgErro",(function(){return N})),t.d(r,"responderTermoUsuario",(function(){return $})),t.d(r,"delegarUsuario",(function(){return G})),t.d(r,"trocarSenha",(function(){return B})),t.d(r,"verificaUsuarioSenhaIguais",(function(){return q}));t("e6cf"),t("5319"),t("7d6e"),t("e54f"),t("62f2"),t("7e6d");var i=t("2b0e"),c=t("1f91"),u=t("42d2"),s=t("b05d"),l=t("2a19");i["a"].use(s["a"],{config:{screen:{bodyClasses:!0}},lang:c["a"],iconSet:u["a"],plugins:{Notify:l["a"]}});var d=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"q-app"}},[t("router-view")],1)},f=[],p={name:"App"},m=p,h=t("2877"),g=Object(h["a"])(m,d,f,!1,null,null,null),_=g.exports,b=t("2f62"),v=t("0e44"),E=function(){return{token:null,usuario:{nome:"",id_tipo:"",tipo:"",id_categoria:"",categoria:"",crm:"",login:"",senha:"",aceite:0,id_usuario:""},usuario_delegado:{},dialogErro:!1,dialogMsg:"",usuarioSenhaIguais:!1}};function P(e){return Boolean(e.token)}function O(e){return e.token}function y(e){return e.usuario_delegado}function S(e){return e.usuario}function R(e){return 3==e.usuario.id_tipo}function w(e){return e.dialogErro}function A(e){return e.dialogMsg}function I(e){return e.usuarioSenhaIguais}function U(e,{token:n,usuario:t}){e.token=n,e.usuario=t}function k(e){e.token=null,e.usuario={}}function x(e,{resposta_termo:n}){e.usuario.aceite=n}function T(e,{usuario_delegado:n}){e.usuario_delegado=n}function j(e,{erro:n}){e.dialogErro=!0,e.dialogMsg=n}function L(e){e.dialogErro=!1,e.dialogMsg=""}function C(e,{e_igual:n}){e.usuarioSenhaIguais=n}function D({commit:e},n){return new Promise(((t,o)=>{this.$axios.post("auth/login",n).then((n=>{e("DEFINIR_USUARIO_LOGADO",{token:n.data.access_token,usuario:n.data.credenciais}),t(n.data)})).catch((e=>{this.dispatch("principal/verificaErro",e),o(e)}))}))}function M({commit:e},n){return console.log("erro verificar erro",n),new Promise(((t,o)=>{401==n.response.status&&(e("DESLOGAR_USUARIO"),this.$router.push({name:"login"})),e("EXIBIR_ERRO",{erro:n.response.data.message}),t()}))}function N({commit:e}){return new Promise(((n,t)=>{e("REMOVER_ERRO"),n()}))}function $({commit:e},n,t){return new Promise(((o,a)=>{console.log(n),this.$axios.post("/auth/aceite_med",n).then((n=>{e("ACEITAR_TERMO_USUARIO",{aceite:t}),o(n.data)})).catch((e=>{this.dispatch("principal/verificaErro",e),a(e)}))}))}function G({commit:e},n){e("DELEGAR_USUARIO",{usuario_delegado:n})}function B({commit:e},n){var t=n.login,o=n.senha,a=n.nova_senha;return new Promise(((e,n)=>{this.$axios.post("auth/alterar_senha_med",{login:t,senha:o,nova_senha:a}).then((n=>{console.log(n.data),e(n.data)})).catch((e=>{this.dispatch("principal/verificaErro",e),n(e)}))}))}function q({commit:e,state:n}){let t=n.usuario.login;this.$axios.post("auth/loginSenhaIguais",{login:t}).then((n=>{e("SET_USUARIO_SENHA_IGUAIS",{e_igual:n.data.e_igual})})).catch((e=>{this.dispatch("principal/verificaErro",e)}))}var V={namespaced:!0,getters:o,mutations:a,actions:r,state:E};i["a"].use(b["a"]);var z=function(){const e=new b["a"].Store({modules:{principal:V},strict:!1,plugins:[Object(v["a"])()]});return e},F=t("8c4f");t("ddb0");const H=[{path:"/",component:()=>Promise.all([t.e(0),t.e(2)]).then(t.bind(null,"713b")),children:[{path:"/",name:"login",component:()=>Promise.all([t.e(0),t.e(20)]).then(t.bind(null,"013f")),meta:{publica:!0}},{path:"/cadastro_registro_mola",name:"cadastro_registro_mola",component:()=>Promise.all([t.e(0),t.e(8)]).then(t.bind(null,"5e1a"))},{path:"/chat",name:"chat",component:()=>Promise.all([t.e(0),t.e(18)]).then(t.bind(null,"ee32"))},{path:"/resultado_ap",name:"resultado_ap",component:()=>Promise.all([t.e(0),t.e(22)]).then(t.bind(null,"cd24"))},{path:"/indicacao",name:"indicacao",component:()=>Promise.all([t.e(0),t.e(6)]).then(t.bind(null,"2b94"))},{path:"/instituicao",name:"instituicao",component:()=>Promise.all([t.e(0),t.e(7)]).then(t.bind(null,"ce32"))},{path:"/mac",name:"mac",component:()=>Promise.all([t.e(0),t.e(21)]).then(t.bind(null,"b312"))},{path:"/revisao",name:"revisao",component:()=>Promise.all([t.e(0),t.e(23)]).then(t.bind(null,"b5750"))},{path:"/termo_aceite",name:"termo_aceite",component:()=>Promise.all([t.e(0),t.e(26)]).then(t.bind(null,"ac8d"))},{path:"/consulta_paciente",name:"consulta_paciente",component:()=>Promise.all([t.e(0),t.e(4)]).then(t.bind(null,"714d"))},{path:"/area_acesso",name:"area_acesso",component:()=>Promise.all([t.e(0),t.e(17)]).then(t.bind(null,"9c03")),meta:{coordenador:!0}},{path:"/delegacao",name:"delegacao",component:()=>Promise.all([t.e(0),t.e(19)]).then(t.bind(null,"f1f1"))},{path:"/cadastro_edicao_paciente",name:"cadastro_edicao_paciente",component:()=>Promise.all([t.e(0),t.e(5)]).then(t.bind(null,"1a3f"))},{path:"/cadastro_edicao_area_acesso",name:"cadastro_edicao_area_acesso",component:()=>Promise.all([t.e(0),t.e(3)]).then(t.bind(null,"3adb")),meta:{coordenador:!0}},{path:"/visualizar_hcgs",name:"visualizar_hcgs",component:()=>Promise.all([t.e(0),t.e(24)]).then(t.bind(null,"091a"))},{path:"/cadastro_edicao_hcg",name:"cadastro_edicao_hcg",component:()=>Promise.all([t.e(0),t.e(11)]).then(t.bind(null,"d859"))},{path:"/cadastro_edicao_ultrassom",name:"cadastro_edicao_ultrassom",component:()=>Promise.all([t.e(0),t.e(16)]).then(t.bind(null,"1a72"))},{path:"/cadastro_edicao_tomografia",name:"cadastro_edicao_tomografia",component:()=>Promise.all([t.e(0),t.e(15)]).then(t.bind(null,"032e"))},{path:"/cadastro_edicao_rx",name:"cadastro_edicao_rx",component:()=>Promise.all([t.e(0),t.e(14)]).then(t.bind(null,"45d6"))},{path:"/cadastro_edicao_dum",name:"cadastro_edicao_dum",component:()=>Promise.all([t.e(0),t.e(10)]).then(t.bind(null,"fa32"))},{path:"/cadastro_edicao_quimio",name:"cadastro_edicao_quimio",component:()=>Promise.all([t.e(0),t.e(13)]).then(t.bind(null,"63e7"))},{path:"/cadastro_edicao_ap",name:"cadastro_edicao_ap",component:()=>Promise.all([t.e(0),t.e(9)]).then(t.bind(null,"50c6"))},{path:"/cadastro_edicao_imagem",name:"cadastro_edicao_imagem",component:()=>Promise.all([t.e(0),t.e(12)]).then(t.bind(null,"bc5d"))},{path:"/sobre",name:"sobre",component:()=>Promise.all([t.e(0),t.e(25)]).then(t.bind(null,"bd80"))},{path:"/trocar_senha",name:"trocar_senha",component:()=>Promise.all([t.e(0),t.e(27)]).then(t.bind(null,"5605"))}]}];var J=H;i["a"].use(F["a"]);var X=function({store:e,ssrContext:n}){const t=new F["a"]({scrollBehavior:()=>({x:0,y:0}),routes:J,mode:"hash",base:""});return t.beforeEach(((n,t,o)=>n.meta.publica||e.getters["principal/getToken"]?"login"==n.name&&e.getters["principal/getToken"]||n.meta.coordenador&&!e.getters["principal/eCoordenador"]?o({path:"/consulta_paciente"}):void o():o({path:"/"}))),t},K=async function(){const e="function"===typeof z?await z({Vue:i["a"]}):z,n="function"===typeof X?await X({Vue:i["a"],store:e}):X;e.$router=n;const t={router:n,store:e,render:e=>e(_),el:"#q-app"};return{app:t,store:e,router:n}},Q=t("bc3a"),W=t.n(Q),Y=({store:e,Vue:n})=>{const t=W.a.create({baseURL:"https://dtg.bioinfo.unifesp.br/",headers:{Accept:"application/json",Content:"application/json"}});t.interceptors.request.use((function(n){const t=e.getters["principal/getToken"];return t&&(n.headers.Authorization=`Bearer ${t}`),n}),(function(n){return e.mutations["principal/DESLOGAR_USUARIO"],Promise.reject(n)})),n.prototype.$axios=t,e.$axios=t};const Z="";async function ee(){const{app:e,store:n,router:t}=await K();let o=!1;const a=e=>{o=!0;const n=Object(e)===e?t.resolve(e).route.fullPath:e;window.location.href=n},r=window.location.href.replace(window.location.origin,""),c=[Y];for(let s=0;!1===o&&s<c.length;s++)if("function"===typeof c[s])try{await c[s]({app:e,router:t,store:n,Vue:i["a"],ssrContext:null,redirect:a,urlPath:r,publicPath:Z})}catch(u){return u&&u.url?void(window.location.href=u.url):void console.error("[Quasar] boot error:",u)}!0!==o&&new i["a"](e)}ee()},"7e6d":function(e,n,t){}});