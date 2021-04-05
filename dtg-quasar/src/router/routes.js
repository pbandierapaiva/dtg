const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/Index.vue") },
      { path: "/paciente", component: () => import("src/views/Paciente.vue") },
      { path: "/chat", component: () => import("src/views/Chat.vue") },
      {
        path: "/cadastro_usuario",
        component: () => import("src/views/CadastroUsuario.vue")
      },
      {
        path: "/histopatologia",
        component: () => import("src/views/Histopatologia.vue")
      },
      {
        path: "/indicacao",
        component: () => import("src/views/Indicacao.vue")
      },
      {
        path: "/instituicao",
        component: () => import("src/views/Instituicao.vue")
      },
      {
        path: "/mac",
        component: () => import("src/views/Mac.vue")
      },
      {
        path: "/revisao",
        component: () => import("src/views/Revisao.vue")
      },
      {
        path: "/termo_aceite",
        component: () => import("src/views/TermoAceite.vue")
      },
      {
        path: "/login",
        component: () => import("src/views/Login.vue")
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
