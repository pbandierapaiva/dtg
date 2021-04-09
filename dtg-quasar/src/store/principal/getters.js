export function usuarioLogado(state) {
  return Boolean(state.token);
}

/* export function termoAceito(state) {
  console.log("A", state.usuario.termo_aceito);
  return state.usuario.termo_aceito;
} */

export function usuarioDelegacao(state) {
  return state.usuario_delegado;
}

export function dadosUsuarioLogado(state) {
  return state.usuario;
}
