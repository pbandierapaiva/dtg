<template>
  <q-page class="flex flex-center">
    <h6 style="font-size: 18px;">
      <b>Cadastro Paciente</b>
    </h6>
    <q-form
      @submit="onSubmit"
      @reset="onReset"
      class="q-gutter-md q-pa-xs q-gutter-y-xs"
      style="width: 100%;  padding-bottom: 135%;"
    >
      <q-list>
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
                v-model="cadastroPaciente.nome"
                label="Nome"
                class="q-pa-xs col-4"
                maxlength="250"
              />
              <q-input
                type="date"
                class="q-pa-xs col-2"
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
                v-model="cadastroPaciente.cep"
                label="CEP"
                mask="#####-###"
                class="q-pa-xs col-1"
              />
              <q-input
                class="q-pa-xs col-2"
                label="Logradouro"
                v-model="cadastroPaciente.logradouro"
                maxlength="250"
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
                maxlength="250"
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
                class="q-pa-xs col-3"
                maxlength="28"
              />
              <q-input
                v-model="cadastroPaciente.bairro"
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
              <q-input
                v-model="cadastroPaciente.sus"
                label="SUS"
                class="q-pa-xs col-2"
                mask="###############"
              />
              <q-input
                class="q-pa-xs col-2"
                label="RH"
                v-model="cadastroPaciente.rh"
                mask="##########"
              ></q-input>
              <q-select
                v-model="cadastroPaciente.instituicao"
                :options="optInstituicao"
                label="Instituição"
                class="q-pa-xs col-2"
              />
              <q-select
                v-model="cadastroPaciente.cor"
                :options="optCor"
                label="Cor"
                class="q-pa-xs col-2"
              />
              <q-select
                v-model="cadastroPaciente.indicacao"
                :options="optIndicacao"
                label="Indicação"
                class="q-pa-xs col-2"
              />
              <q-input
                v-model="cadastroPaciente.outros"
                label="Outros"
                class="q-pa-xs col-2"
              />
            </q-card-section>
            <q-card-section class="row">
              <q-select
                v-model="cadastroPaciente.estadoCivil"
                :options="optEstadoCivil"
                label="Estado Civil"
                class="q-pa-xs col-3"
              />
              <q-select
                v-model="cadastroPaciente.tipoSanguineo"
                :options="optTipoSanguineo"
                label="Tipo Sanguíneo"
                class="q-pa-xs col-2"
              />
              <q-select
                v-model="cadastroPaciente.fatorRh"
                :options="optFatorRh"
                label="Fator RH"
                class="q-pa-xs col-1"
              />
              <q-select
                v-model="cadastroPaciente.escolaridade"
                :options="optEscolaridade"
                label="Escolaridade"
                class="q-pa-xs col-3"
              />
              <q-input
                v-model="cadastroPaciente.telefoneProprio"
                label="Telefone Próprio"
                class="q-pa-xs col-3"
                mask="(##)#####-####"
              />
            </q-card-section>
            <q-card-section class="row">
              <q-input
                v-model="cadastroPaciente.telefoneContato"
                label="Telefone Contato"
                class="q-pa-xs col-3"
                mask="(##)#####-####"
              />
              <q-input
                v-model="cadastroPaciente.nomeContato"
                label="Nome Contato"
                class="q-pa-xs col-5"
              />
              <q-input
                v-model="cadastroPaciente.email"
                type="email"
                label="E-mail"
                class="q-pa-xs col-4"
              />
            </q-card-section>
            <q-card-section class="row">
              <q-input
                v-model="cadastroPaciente.reacoesAlergicas"
                label="Reações Alérgicas a Medicamentos"
                class="q-pa-xs col-7"
              />
              <q-input
                v-model="cadastroPaciente.preceptor"
                label="Preceptor"
                class="q-pa-xs col-5"
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
          label="Limpar"
          type="reset"
          color="primary"
          class="q-pa-xs q-ma-md col-1"
          style="margin-top: 2%;"
        />
        <q-btn
          label="Voltar"
          to="/consulta_paciente"
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
  name: "Cadastro_Paciente",
  data() {
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
        bairro: "",
        sus: "",
        rh: "",
        instituicao: "",
        cor: "",
        escoladoridade: "",
        tipoSanguineo: "",
        fatorRh: "",
        indicacao: "",
        instituicao: "",
        estadoCivil: "",
        outros: "",
        telefoneProprio: "",
        telefoneContato: "",
        nomeContato: "",
        email: "",
        reacoesAlergicas: "",
        preceptor: ""
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
      optCor: [
        "Branca",
        "Preta",
        "Amarela",
        "Parda",
        "Indígena",
        "Sem declaração"
      ],
      optIndicacao: ["Encaminhada por médico", "Regulação", "Facebook"],
      optEstadoCivil: [
        "Casada",
        "Divorciada",
        "Viúva",
        "Solteira",
        "Em união estável",
        "Não desejo declarar"
      ],
      optTipoSanguineo: ["O", "A", "B", "AB"],
      optFatorRh: ["+", "-"],
      optEscolaridade: [
        "Não informado",
        "Sem instrução/fundamental incompleto",
        "Fundamental completo/Médio incompleto",
        "Médio completo/Superior incompleto",
        "Superior completo/Pós-graduação incompleto",
        "Pós-graduação completo"
      ]
    };
  },
  methods: {
    onSubmit() {},
    onReset() {
      this.cadastroPaciente.nome = "";
      this.cadastroPaciente.dataNasc = "";
      this.cadastroPaciente.cpf = "";
      this.cadastroPaciente.nomeMae = "";
      this.cadastroPaciente.cep = "";
      this.cadastroPaciente.logradouro = "";
      this.cadastroPaciente.numero = "";
      this.cadastroPaciente.complemento = "";
      this.cadastroPaciente.uf = "";
      this.cadastroPaciente.cidade = "";
      this.cadastroPaciente.bairro = "";
      this.cadastroPaciente.sus = "";
      this.cadastroPaciente.rh = "";
      this.cadastroPaciente.instituicao = "";
      this.cadastroPaciente.cor = "";
      this.cadastroPaciente.escoladoridade = "";
      this.cadastroPaciente.tipoSanguineo = "";
      this.cadastroPaciente.fatorRh = "";
      this.cadastroPaciente.indicacao = "";
      this.cadastroPaciente.instituicao = "";
      this.cadastroPaciente.estadoCivil = "";
      this.cadastroPaciente.outros = "";
      this.cadastroPaciente.telefoneProprio = "";
      this.cadastroPaciente.telefoneContato = "";
      this.cadastroPaciente.nomeContato = "";
      this.cadastroPaciente.email = "";
      this.cadastroPaciente.reacoesAlergicas = "";
      this.cadastroPaciente.preceptor = "";
    }
  }
};
</script>
