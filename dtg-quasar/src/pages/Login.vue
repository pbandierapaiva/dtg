<template>
  <q-page class="flex flex-center">
    <div class="full-width full-height">
      <h5 class="text-center" style="margin-top: -2%;">Login</h5>
      <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md q-pa-md">
        <q-input
          v-model="loginUsu.login"
          label="Login"
          class="q-pa-md"
          :rules="[val => (val && val.length > 0) || 'Digite um login']"
        />

        <q-input
          type="password"
          v-model="loginUsu.senha"
          label="Senha"
          class="q-pa-md"
          :rules="[val => (val && val.length > 0) || 'Digite uma senha']"
        />
        <div class="text-center">
          <q-btn label="Entrar" type="submit" color="primary" class="q-ma-md" />
        </div>
      </q-form>
      <!--<q-dialog v-model="alertaConstrucao">
        <q-card>
          <q-card-section>
            <div class="text-h6 text-center">Atenção</div>
          </q-card-section>
          <q-card-section class="q-pt-none">
            <p class="text-justify">
              A funcionalidade login ainda não foi implementada. Nesta fase de
              construção, para visualizar as demais telas do sistema, digite o
              login "teste" e a senha "teste" e pressione a tecla "Entrar". Você
              será redirecionado para a tela do termo de aceite e deverá
              pressionar a tecla "Aceito".
            </p>
          </q-card-section>
          <q-card-actions align="right">
            <q-btn flat label="OK" color="primary" v-close-popup />
          </q-card-actions>
        </q-card>
      </q-dialog>-->
      <q-dialog v-model="alertaErro">
        <q-card>
          <q-card-section>
            <div class="text-h6 text-center">Erro</div>
          </q-card-section>
          <q-card-section class="q-pt-none">
            <p class="text-justify">
              O login e/ou a senha estão incorretos
            </p>
          </q-card-section>
          <q-card-actions align="right">
            <q-btn
              flat
              label="OK"
              color="primary"
              v-close-popup
              @click="onReset"
            />
          </q-card-actions>
        </q-card>
      </q-dialog>
    </div>
  </q-page>
</template>

<script>
export default {
  data() {
    return {
      //alertaConstrucao: true,
      alertaErro: false,
      usuario: {
        nome: "Ryan Howard",
        tipo: "Coordenador",
        categoria: "Docente",
        crm: "SP 78901",
        login: "ryan.howard",
        senha: "ryanhoward",
        termo: false
      },
      loginUsu: {
        login: "",
        senha: ""
      }
    };
  },
  methods: {
    onSubmit() {
      if (
        this.loginUsu.login == this.usuario.login &&
        this.loginUsu.senha == this.usuario.senha
      ) {
        this.$store
          .dispatch("principal/efetuarLogin", this.usuario)
          .then(() => {
            this.$router.push({ name: "termo_aceite" });
          })
          .catch(erro => {
            /* if (erro.request.status === 401) {
              alert(erro);
              this.alertaErro = true;
            } */
            console.log(erro);
          });
      } else {
        this.alertaErro = true;
        this.onReset();
      }
    },
    onReset() {
      this.loginUsu.login = "";
      this.loginUsu.senha = "";
    }
  }
};
</script>
