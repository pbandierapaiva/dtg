export function usuarioLogado(state) {
  console.log("Token: ", Boolean(state.token));
  return Boolean(state.token);
}

export function termoAceito(state) {
  console.log("Termo: ", Boolean(state.termo_aceito));
  return Boolean(state.termo_aceito);
}
