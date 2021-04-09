export function DEFINIR_USUARIO_LOGADO(state, { token, usuario }) {
  state.token = token;
  state.usuario = usuario;
}

export function DESLOGAR_USUARIO(state) {
  state.token = null;
  state.usuario = {};
}

export function RESPONDER_TERMO_USUARIO(state, { resposta_termo }) {
  state.usuario.termo_aceito = resposta_termo;
}

export function DELEGAR_USUARIO(state, { usuario_delegado }) {
  state.usuario_delegado = usuario_delegado;
}
