<template>
  <q-page class="flex flex-center">
    <h4>Cadastro Registro Mola</h4>
  </q-page>
</template>
<!--<b>Dados Cadastrais</b>
    <div class="full-width">
      <span><b>Id Usuario: </b> {{ usuario.id }}</span
      >&nbsp; <span><b>Nome: </b> {{ usuario.nome }}</span
      >&nbsp; <span><b>CPF: </b> {{ usuario.cpf }}</span
      >&nbsp; <span><b>Data Nascimento: </b> {{ usuario.dataNasc }}</span
      >&nbsp; <span><b>Preceptor: </b> {{ usuario.preceptor }}</span
      >&nbsp; <span><b>Cor: </b> {{ usuario.cor }}</span
      >&nbsp; <span><b>SUS: </b> {{ usuario.sus }}</span
      >&nbsp; <span><b>Registro Hospitalar: </b> {{ usuario.rh }}</span
      >&nbsp;
    </div>
    <b>Dados de Contato</b>
    <div class="full-width">
      <span><b>Cep: </b> {{ usuario.cep }}</span
      >&nbsp; <span><b>Logradouro: </b> {{ usuario.logradouro }}</span
      >&nbsp; <span><b>Número: </b> {{ usuario.numero }}</span
      >&nbsp; <span><b>Complemento: </b> {{ usuario.complemento }}</span
      >&nbsp; <span><b>UF: </b> {{ usuario.uf }}</span
      >&nbsp; <span><b>Cidade: </b> {{ usuario.cidade }}</span
      >&nbsp; <span><b>Bairro: </b> {{ usuario.bairro }}</span
      >&nbsp; <span><b>Telefone Próprio: </b> {{ usuario.telproprio }}</span
      >&nbsp;
    </div>
    <div class="full-width">
      <span><b>Telefone do Contato: </b> {{ usuario.telcontato }}</span
      >&nbsp; <span><b>Nome do Contato: </b> {{ usuario.nomecontato }}</span
      >&nbsp; <span><b>E-mail: </b> {{ usuario.email }}</span
      >&nbsp; <span><b>Tipo Sanguíneo: </b> {{ usuario.tiposanguineo }}</span
      >&nbsp; <span><b>Fator RH: </b> {{ usuario.fatorRh }}</span
      >&nbsp; <span><b>Nome da Mãe: </b> {{ usuario.nomemae }}</span
      >&nbsp; <span><b>Escolaridade: </b> {{ usuario.escolaridade }}</span
      >&nbsp; <span><b>Estado Civil: </b> {{ usuario.estadoCivil }}</span
      >&nbsp;
      <span
        ><b>Reações Alérgicas a Medicamentos: </b>
        {{ usuario.reacoesAlergicas }}</span
      >
    </div>-->

<!--<q-tabs
      v-model="tab"
      dense
      active-color="primary"
      indicator-color="primary"
      class="full-width"
      align="justify"
      narrow-indicator
    >
      <q-tab name="dados_gerais" label="Dados Gerais" />
      <q-tab name="partos" label="Partos" />
      <q-tab name="esvaziamentos" label="Esvaziamentos" />
      <q-tab name="dados_clinicos" label="DadosClinicos" />
      <q-tab name="quimioterapia" label="Quimioterapia" />
      <q-tab name="hcg" label="hCG" />
      <q-tab name="ap" label="AP" />
      <q-tab name="rx" label="RX" />
      <q-tab name="ultrassom" label="Ultrassom" />
      <q-tab name="tomografia" label="Tomografia" />
    </q-tabs>

    <q-tab-panels v-model="tab" animated>
      <q-tab-panel name="dados_gerais">
        <RegistroMolaDadosGerais />
      </q-tab-panel>
      <q-tab-panel name="partos">
        <RegistroMolaPartos />
      </q-tab-panel>
      <q-tab-panel name="esvaziamentos">
        <RegistroMolaEsvaziamentos />
      </q-tab-panel>
      <q-tab-panel name="dados_clinicos">
        <RegistroMolaDadosClinicos />
      </q-tab-panel>
      <q-tab-panel name="quimioterapia">
        <RegistroMolaQuimioterapia />
      </q-tab-panel>
      <q-tab-panel name="hcg">
        <RegistroMolaHcg />
      </q-tab-panel>
      <q-tab-panel name="ap">
        <RegistroMolaAp />
      </q-tab-panel>
      <q-tab-panel name="rx">
        <RegistroMolaRx />
      </q-tab-panel>
      <q-tab-panel name="ultrassom">
        <RegistroMolaUltrassom />
      </q-tab-panel>
      <q-tab-panel name="tomografia">
        <RegistroMolaTomografia />
      </q-tab-panel>
    </q-tab-panels>
    <RegistroMolaConsultaMola />
  </q-page>
</template>
<script>
import RegistroMolaDadosGerais from "../components/RegistroMolaDadosGerais.vue";
import RegistroMolaPartos from "../components/RegistroMolaPartos.vue";
import RegistroMolaEsvaziamentos from "../components/RegistroMolaEsvaziamentos.vue";
import RegistroMolaDadosClinicos from "../components/RegistroMolaDadosClinicos.vue";
import RegistroMolaQuimioterapia from "../components/RegistroMolaQuimioterapia.vue";
import RegistroMolaHcg from "../components/RegistroMolaHcg.vue";
import RegistroMolaAp from "../components/RegistroMolaAp.vue";
import RegistroMolaRx from "../components/RegistroMolaRx.vue";
import RegistroMolaUltrassom from "../components/RegistroMolaUltrassom.vue";
import RegistroMolaTomografia from "../components/RegistroMolaTomografia.vue";
import RegistroMolaConsultaMola from "../components/RegistroMolaConsultaMola.vue";

export default {
  name: "CadastroRegistroMola",
  components: {
    RegistroMolaDadosGerais,
    RegistroMolaTomografia,
    RegistroMolaConsultaMola,
    RegistroMolaPartos,
    RegistroMolaEsvaziamentos,
    RegistroMolaDadosClinicos,
    RegistroMolaQuimioterapia,
    RegistroMolaHcg,
    RegistroMolaAp,
    RegistroMolaRx,
    RegistroMolaUltrassom
  },
  data() {
    return {
      tab: "dados_gerais"
      /* usuario: {
        id: 456,
        nome: "Kelly Kapoor",
        cpf: "123.456.789-10",
        dataNasc: "12/12/1990",
        preceptor: "CRM SP 12345 - Ryan Howard",
        cor: "Parda",
        sus: "12345678901 2345",
        rh: "1234567890",
        cep: "00000-000",
        logradouro: "Rua das Borboletas Psicodélicas",
        numero: "123",
        complemento: "Fundos",
        uf: "SP",
        cidade: "São Paulo",
        bairro: "Jabaquara",
        telproprio: "(11) 91234-5678",
        telefonecontato: "(11) 92345-5678",
        nomecontato: "Beatriz Kapoor",
        email: "kelly.kapoor@gmail.com",
        tiposanguineo: "AB",
        fatorRh: "+",
        nomemae: "Ana Maria Kapoor",
        escolaridade: "Ensino Superior Completo",
        estadocivil: "Solteira",
        reacoesAlergicas: "Nenhuma"
      } */
    };
  }
};
</script>-->
