<template>
  <q-page class="flex flex-center">
    <h4>Cadastro do Paciente</h4>
    <!--<q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md q-pa-xs">
      <div class="full-width row">
        <q-input
          v-model="cadastroPaciente.nome"
          label="Nome"
          class="q-pa-xs col-3"
        />
        <q-input
          type="date"
          class="q-pa-xs col-3"
          v-model="cadastroPaciente.dataNasc"
        ></q-input>
        <q-input
          v-model="cadastroPaciente.cpf"
          label="CPF"
          class="q-pa-xs col-2"
          mask="###.###.###-##"
        />
        <q-input
          v-model="cadastroPaciente.nomeMae"
          label="Nome da Mãe"
          class="q-pa-xs col-3"
        />
      </div>
      <div class="full-width row">
        <q-input
          v-model="cadastroPaciente.cep"
          label="CEP"
          class="q-pa-xs col-1"
          mask="#####-###"
        />
        <q-input
          class="q-pa-xs col-2"
          label="Logradouro"
          v-model="cadastroPaciente.logradouro"
        ></q-input>
        <q-input
          v-model="cadastroPaciente.numero"
          label="Número"
          class="q-pa-xs col-1"
        />
        <q-input
          v-model="cadastroPaciente.complemento"
          label="Complemento"
          class="q-pa-xs col-2"
        />
        <q-select
          v-model="cadastroPaciente.uf"
          :options="optUf"
          label="UF"
          class="q-pa-xs col-1"
        />
        <q-input
          v-model="cadastroPaciente.cidade"
          label="Cidade"
          class="q-pa-xs col-2"
        />
        <q-input
          v-model="cadastroPaciente.bairro"
          label="Bairro"
          class="q-pa-xs col-2"
        />
      </div>
      <div class="full-width row">
        <q-input
          v-model="cadastroPaciente.sus"
          label="SUS"
          class="q-pa-xs col-3"
        />
        <q-input
          class="q-pa-xs col-3"
          label="RH"
          v-model="cadastroPaciente.rh"
        ></q-input>
        <q-select
          v-model="cadastroPaciente.instituicao"
          :options="optInstituicao"
          label="Instituição"
          class="q-pa-xs col-1"
        />
        <q-input
          v-model="cadastroPaciente.cpf"
          label="CPF"
          class="q-pa-xs col-2"
          mask="###.###.###-##"
        />
        <q-input
          v-model="cadastroPaciente.nomeMae"
          label="Nome da Mãe"
          class="q-pa-xs col-3"
        />
      </div>
      <q-btn
        label="Consultar"
        type="submit"
        color="primary"
        class="q-pa-xs q-ma-md col-1"
        style="margin-top: 2%;"
      />
    </q-form>-->
  </q-page>
</template>

<script>
export default {
  name: "Cadastro Paciente"
  /* data() {
    return {
      cadastroPaciente: {
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
        bairro: ""
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
      optInstituicao: ["HUHSP"]
    };
  },
  methods: {
    onSubmit() {},
    onReset() {},
    mostrarCalendario() {
      this.calendarioAtivo = true;
    }
  } */
};
</script>
