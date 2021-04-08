export function DEFINIR_USUARIO_LOGADO(state, { token, usuario }) {
  state.token = token;
  state.usuario = usuario;
}

export function DESLOGAR_USUARIO(state) {
  state.token = null;
  state.usuario = {};
  state.termo_aceito = false;
}

export function ACEITAR_TERMO_USUARIO(state, { termo_aceito }) {
  state.termo_aceito = termo_aceito;
}

export function DELEGAR_USUARIO(state, { usuario_delegado }) {
  state.usuario_delegado = usuario_delegado;
}

export function INICIALIZAR_USUARIO_EXEMPLO(
  state,
  { nome, tipo, categoria, crm }
) {
  state.usuario.nome = nome;
  state.usuario.tipo = tipo;
  state.usuario.categoria = categoria;
  state.usuario.crm = crm;
}
