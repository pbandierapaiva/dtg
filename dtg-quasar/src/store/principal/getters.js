export function usuarioLogado(state) {
  return Boolean(state.token);
}

export function termoAceito(state) {
  console.log("A ", state.termo_aceito);
  return Boolean(state.termo_aceito);
}

export function usuarioDelegacao(state) {
  console.log("A ", state.usuario_delegado);
  return state.usuario_delegado;
}

export function dadosUsuarioLogado(state) {
  return state.usuario;
}
