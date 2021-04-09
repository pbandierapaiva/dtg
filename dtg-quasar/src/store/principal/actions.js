export function efetuarLogin({ commit }, usuario) {
  commit("DEFINIR_USUARIO_LOGADO", {
    token: "123",
    usuario: usuario
  });
}

export function responderTermoUsuario({ commit }, resposta_termo) {
  commit("RESPONDER_TERMO_USUARIO", {
    resposta_termo: resposta_termo
  });
}

export function delegarUsuario({ commit }, usuario_delegado) {
  commit("DELEGAR_USUARIO", {
    usuario_delegado: usuario_delegado
  });
}
