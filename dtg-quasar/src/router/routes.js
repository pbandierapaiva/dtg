const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "",
        name: "login",
        component: () => import("src/views/Login.vue")
      },
      {
        path: "/cadastro_registro_mola",
        name: "cadastro_registro_mola",
        component: () => import("src/views/CadastroRegistroMola.vue")
      },
      {
        path: "/chat",
        name: "chat",
        component: () => import("src/views/Chat.vue")
      },
      {
        path: "/cadastro_usuario",
        name: "cadastro_usuario",
        component: () => import("src/views/CadastroUsuario.vue")
      },
      {
        path: "/histopatologia",
        name: "histopatologia",
        component: () => import("src/views/Histopatologia.vue")
      },
      {
        path: "/indicacao",
        name: "indicacao",
        component: () => import("src/views/Indicacao.vue")
      },
      {
        path: "/instituicao",
        name: "instituicao",
        component: () => import("src/views/Instituicao.vue")
      },
      {
        path: "/mac",
        name: "mac",
        component: () => import("src/views/Mac.vue")
      },
      {
        path: "/revisao",
        name: "revisao",
        component: () => import("src/views/Revisao.vue")
      },
      {
        path: "/termo_aceite",
        name: "termo_aceite",
        component: () => import("src/views/TermoAceite.vue")
      },
      {
        path: "/consulta_paciente",
        name: "consulta_paciente",
        component: () => import("src/views/ConsultaPaciente.vue")
      },
      {
        path: "/area_acesso",
        name: "area_acesso",
        component: () => import("src/views/AreaAcesso.vue")
      },
      {
        path: "/delegacao",
        name: "delegacao",
        component: () => import("src/views/Delegacao.vue")
      },
      {
        path: "/cadastro_paciente",
        name: "cadastro_paciente",
        component: () => import("src/views/CadastroPaciente.vue")
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
