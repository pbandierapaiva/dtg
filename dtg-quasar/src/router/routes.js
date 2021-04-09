import { route } from "quasar/wrappers";
import router from ".";

const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "",
        name: "login",
        component: () => import("src/pages/Login.vue")
      },
      {
        path: "/cadastro_registro_mola",
        name: "cadastro_registro_mola",
        component: () => import("pages/CadastroRegistroMola.vue")
      },
      {
        path: "/chat",
        name: "chat",
        component: () => import("pages/Chat.vue")
      },
      {
        path: "/histopatologia",
        name: "histopatologia",
        component: () => import("pages/Histopatologia.vue")
      },
      {
        path: "/indicacao",
        name: "indicacao",
        component: () => import("pages/Indicacao.vue")
      },
      {
        path: "/instituicao",
        name: "instituicao",
        component: () => import("pages/Instituicao.vue")
      },
      {
        path: "/mac",
        name: "mac",
        component: () => import("pages/Mac.vue")
      },
      {
        path: "/revisao",
        name: "revisao",
        component: () => import("pages/Revisao.vue")
      },
      {
        path: "/termo_aceite",
        name: "termo_aceite",
        component: () => import("pages/TermoAceite.vue")
      },
      {
        path: "/consulta_paciente",
        name: "consulta_paciente",
        component: () => import("pages/ConsultaPaciente.vue")
      },
      {
        path: "/area_acesso",
        name: "area_acesso",
        component: () => import("pages/AreaAcesso.vue")
      },
      {
        path: "/delegacao",
        name: "delegacao",
        component: () => import("pages/Delegacao.vue")
      },
      {
        path: "/cadastro_paciente",
        name: "cadastro_paciente",
        component: () => import("pages/CadastroPaciente.vue")
      },
      {
        path: "/cadastro_medico_coordenador",
        name: "cadastro_medico_coordenador",
        component: () => import("pages/CadastroMedicoCoordenador.vue")
      }
    ]
  }

  // Always leave this as last one,
  // but you can also remove it
  /* {
    path: "*",
    component: () => import("pages/Error404.vue")
  } */
];

export default routes;
