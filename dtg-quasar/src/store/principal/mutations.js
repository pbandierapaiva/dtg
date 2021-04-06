export function DEFINIR_USUARIO_LOGADO(state, { token, usuario }) {
  state.token = token;
  state.usuario = usuario;
}

export function DESLOGAR_USUARIO(state) {
  state.token = null;
  state.usuario = {};
  state.termo_aceito = false;
}

export function ACEITAR_TERMO_USUARIO(state, { usuario, termo_aceito }) {
  state.usuario = usuario;
  state.termo_aceito = termo_aceito;
}
