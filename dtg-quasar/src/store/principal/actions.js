export function efetuarLogin({ commit }, usuario) {
  commit("DEFINIR_USUARIO_LOGADO", {
    token: "123",
    usuario: usuario
  });
}

export function aceitarTermo({ commit }, usuario) {
  commit("ACEITAR_TERMO_USUARIO", {
    usuario: usuario,
    termo_aceito: true
  });
}
