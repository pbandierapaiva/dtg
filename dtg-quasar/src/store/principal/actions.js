export function efetuarLogin({ commit }, usuario) {
  commit("DEFINIR_USUARIO_LOGADO", {
    token: "123",
    usuario: usuario
  });
}

export function aceitarTermo({ commit }) {
  commit("ACEITAR_TERMO_USUARIO", {
    termo_aceito: true
  });
}

export function delegarUsuario({ commit }, usuario_delegado) {
  commit("DELEGAR_USUARIO", {
    usuario_delegado: usuario_delegado
  });
}

export function inicializarUsuarioExemplo({ commit }) {
  commit("INICIALIZAR_USUARIO_EXEMPLO", {
    nome: "Ryan Howard",
    tipo: "Coordenador",
    categoria: "Docente",
    crm: "SP 78901"
  });
}
