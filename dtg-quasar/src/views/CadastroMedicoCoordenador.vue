<template>
  <q-page class="flex flex-center">
    <h6 style="font-size: 18px;">
      <b>Cadastro Médico/Coordenador</b>
    </h6>
    <q-form
      @submit="onSubmit"
      @reset="onReset"
      class="q-gutter-md q-pa-xs q-gutter-y-xs"
      style="width: 100%; padding-bottom: 135%;"
    >
      <q-list row full-width>
        <q-expansion-item
          label="Dados Pessoais"
          group="dados_pessoais"
          default-opened
          class="bg-secondary"
          style="color:white;"
        >
          <q-card>
            <q-card-section class="row">
              <q-input
                v-model="cadastroMedico.nome"
                label="Nome"
                class="q-pa-xs col-4"
                maxlength="250"
              />
              <q-input
                type="date"
                class="q-pa-xs col-2"
                v-model="cadastroMedico.dataNasc"
              ></q-input>
              <q-input
                v-model="cadastroMedico.cpf"
                label="CPF"
                class="q-pa-xs col-2"
                mask="###.###.###-##"
              />
              <q-input
                v-model="cadastroMedico.nomeMae"
                label="Nome da Mãe"
                class="q-pa-xs col-4"
                maxlength="250"
              />
            </q-card-section>
          </q-card>
        </q-expansion-item>
        <q-expansion-item
          label="Endereço Residencial"
          group="endereco_residencial"
          default-opened
          class="bg-secondary"
          style="color:white"
        >
          <q-card>
            <q-card-section class="row">
              <q-input
                v-model="cadastroMedico.cep"
                label="CEP"
                mask="#####-###"
                class="q-pa-xs col-1"
              />
              <q-input
                class="q-pa-xs col-2"
                label="Logradouro"
                v-model="cadastroMedico.logradouro"
                maxlength="250"
              ></q-input>
              <q-input
                v-model="cadastroMedico.numero"
                label="Número"
                class="q-pa-xs col-1"
                maxlength="7"
              />
              <q-input
                v-model="cadastroMedico.complemento"
                label="Complemento"
                class="q-pa-xs col-2"
                maxlength="250"
              />
              <q-select
                v-model="cadastroMedico.uf"
                :options="optUf"
                label="UF"
                class="q-pa-xs col-1"
              />
              <q-input
                v-model="cadastroMedico.cidade"
                label="Cidade"
                class="q-pa-xs col-3"
                maxlength="28"
              />
              <q-input
                v-model="cadastroMedico.bairro"
                label="Bairro"
                class="q-pa-xs col-2"
                maxlength="100"
              />
            </q-card-section>
          </q-card>
        </q-expansion-item>
        <q-expansion-item
          label="Dados Cadastrais"
          group="dados_cadastrais"
          default-opened
          class="bg-secondary"
          style="color:white"
        >
          <q-card>
            <q-card-section class="row">
              <q-select
                v-model="cadastroMedico.ufCrm"
                :options="optUf"
                label="UF CRM"
                class="q-pa-xs col-2"
              />
              <q-input
                v-model="cadastroMedico.crm"
                type="number"
                label="CRM"
                class="q-pa-xs col-3"
                maxlength="10"
              />
              <q-select
                v-model="cadastroMedico.categoria"
                :options="optCategoria"
                label="Categoria"
                class="q-pa-xs col-3"
              />
              <q-select
                v-model="cadastroMedico.instituicao"
                :options="optInstituicao"
                label="Instituição"
                class="q-pa-xs col-4"
              />
            </q-card-section>
          </q-card>
        </q-expansion-item>
        <q-expansion-item
          label="Outros"
          group="outros"
          default-opened
          class="bg-secondary"
          style="color:white"
        >
          <q-card>
            <q-card-section class="row">
              <q-select
                v-model="cadastroMedico.tipoAcesso"
                :options="optTipoAcesso"
                label="Tipo de Acesso"
                class="q-pa-xs col-2"
              />
              <q-input
                v-model="cadastroMedico.login"
                label="Login"
                class="q-pa-xs col-5"
                maxlength="50"
              />
              <q-input
                v-model="cadastroMedico.senha"
                type="password"
                label="Senha"
                class="q-pa-xs col-5"
                maxlength="100"
              />
            </q-card-section>
          </q-card>
        </q-expansion-item>
      </q-list>
      <div class="flex flex-center">
        <q-btn
          label="Gravar Dados"
          type="submit"
          color="primary"
          class="q-pa-xs q-ma-md col-1"
          style="margin-top: 2%;"
        />
        <q-btn
          label="Limpar Dados"
          type="reset"
          color="primary"
          class="q-pa-xs q-ma-md col-1"
          style="margin-top: 2%;"
        />
        <q-btn
          label="Voltar"
          to="/area_acesso"
          color="primary"
          class="q-pa-xs q-ma-md col-1"
          style="margin-top: 2%;"
        />
      </div>
    </q-form>
  </q-page>
</template>

<script>
export default {
  name: "Cadastro_Medico_Coordenador",
  data() {
    return {
      cadastroMedico: {
        nome: "",
        dataNasc: "",
        cpf: "",
        nomeMae: "",
        cep: "",
        logradouro: "",
        numero: "",
        complemento: "",
        uf: "",
        cidade: "",
        bairro: "",
        ufCrm: "",
        crm: "",
        categoria: "",
        instituicao: "",
        tipoAcesso: "",
        login: "",
        senha: ""
      },
      optUf: [
        "AC",
        "AL",
        "AP",
        "AM",
        "BA",
        "CE",
        "DF",
        "ES",
        "GO",
        "MA",
        "MT",
        "MS",
        "MG",
        "PA",
        "PB",
        "PR",
        "PE",
        "PI",
        "RJ",
        "RN",
        "RS",
        "RO",
        "RR",
        "SC",
        "SP",
        "SE",
        "TO"
      ],
      optInstituicao: ["HUHSP"],
      optCategoria: [
        "Acadêmico",
        "Residente",
        "Contratado",
        "Pós-Graduando",
        "Docente",
        "Outros"
      ],
      optTipoAcesso: ["Médico", "Coordenador"]
    };
  },
  methods: {
    onSubmit() {},
    onReset() {
      this.cadastroMedico.nome = "";
      this.cadastroMedico.dataNasc = "";
      this.cadastroMedico.cpf = "";
      this.cadastroMedico.nomeMae = "";
      this.cadastroMedico.cep = "";
      this.cadastroMedico.logradouro = "";
      this.cadastroMedico.numero = "";
      this.cadastroMedico.complemento = "";
      this.cadastroMedico.uf = "";
      this.cadastroMedico.cidade = "";
      this.cadastroMedico.bairro = "";
      this.cadastroMedico.ufCrm = "";
      this.cadastroMedico.crm = "";
      this.cadastroMedico.categoria = "";
      this.cadastroMedico.instituicao = "";
      this.cadastroMedico.tipoAcesso = "";
      this.cadastroMedico.login = "";
      this.cadastroMedico.senha = "";
    }
  }
};
</script>
