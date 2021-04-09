<template>
  <q-page class="flex flex-center" style="padding-bottom: 135%;">
    <!--<h4>CHAT</h4>-->

    <q-form
      @submit="onSubmit"
      @reset="onReset"
      class="q-gutter-md q-pa-xs full-width row"
    >
      <q-input v-model="consultaChat.nome" label="Nome" class="q-pa-xs col-3" />
      <q-input
        v-model="consultaChat.cpf"
        label="CPF"
        class="q-pa-xs col-2"
        mask="###.###.###-##"
      />
      <q-input
        v-model="consultaChat.preceptor"
        label="Preceptor"
        class="q-pa-xs col-3"
      />
      <q-select
        v-model="consultaChat.situacao"
        :options="optStatus"
        label="Situação"
        class="q-pa-xs col-2"
      />
      <q-btn
        label="Consultar"
        type="submit"
        color="primary"
        class="q-pa-xs q-ma-md col-1"
        style="margin-top: 2%;"
      />
    </q-form>
    <div class="row full-width">
      <q-table
        class="col-5 on-right"
        :data="data"
        :columns="columns"
        row-key="name"
        title="Lista de Destinatários"
        :pagination.sync="pagination"
        style="margin-top: 4%;"
      >
        <template v-slot:body="props">
          <q-tr :props="props">
            <q-td key="id" :props="props">
              {{ props.row.id }}
            </q-td>
            <q-td key="nome" :props="props">
              {{ props.row.nome }}
            </q-td>
            <q-td key="cpf" :props="props">
              {{ props.row.cpf }}
            </q-td>
            <q-td key="preceptor" :props="props">
              {{ props.row.preceptor }}
            </q-td>
            <q-td key="hora" :props="props">
              {{ props.row.hora }}
            </q-td>
            <q-td key="acessar" :props="props">
              <q-btn flat id="btnAcessar" icon="arrow_forward"></q-btn>
            </q-td>
          </q-tr>
        </template>
      </q-table>
      <div class="col-6">
        <div
          style="width: 100%; max-width: 400px; float:right; margin-top: 6%;"
        >
          <q-chat-message name="MÉDICO: Angela" :text="['Olá paciente']" sent />
          <q-chat-message name="Paciente" :text="['Boa tarde Doutora']" />
          <q-chat-message
            name="MÉDICO: Angela"
            :text="['Seu exame está pronto?']"
            sent
          />
        </div>
      </div>
    </div>

    <q-form
      class="row full-width on-left"
      @submit="enviarMensagem"
      @reset="resetarMensagem"
    >
      <div class="col-6"></div>
      <q-input
        v-model="chat.mensagem"
        label="Mensagem"
        class="q-pa-xs col-4"
        :rules="[val => (val && val.length > 0) || 'Digite alguma mensagem']"
        style="margin-top: 6%;"
      />
      <q-btn
        label="Enviar"
        type="submit"
        color="primary"
        class="q-pa-xs q-ma-md col-1"
        style="margin-top: 7%;"
      />
    </q-form>
  </q-page>
</template>

<script>
export default {
  name: "PageIndex",
  data() {
    return {
      pagination: {
        rowsPerPage: 7
      },
      consultaChat: {
        nome: "",
        cpf: "",
        preceptor: "",
        hora: ""
      },
      chat: {
        mensagem: ""
      },
      optStatus: ["Ativo", "Inativo"],
      columns: [
        {
          name: "id",
          label: "Id",
          align: "left",
          field: row => row.id,
          format: val => `${val}`
        },
        {
          name: "nome",
          label: "Nome",
          align: "left",
          field: row => row.nome,
          format: val => `${val}`
        },
        {
          name: "cpf",
          label: "CPF",
          align: "left",
          field: row => row.cpf,
          format: val => `${val}`
        },
        {
          name: "preceptor",
          label: "Preceptor",
          align: "left",
          field: row => row.preceptor,
          format: val => `${val}`
        },
        {
          name: "hora",
          label: "Hora",
          align: "left",
          field: row => row.hora,
          format: val => `${val}`
        },
        {
          name: "acessar",
          label: "Acessar",
          align: "left"
        }
      ],

      data: [
        {
          id: 1,
          nome: "Erin Hannon",
          cpf: "963.852.741-32",
          preceptor: "Angela Martin",
          hora: "12:00"
        }
      ]
    };
  },
  methods: {
    onSubmit() {},
    onReset() {}
    //enviarMensagem() {},
    //limparMensagem() {}
  }
};
</script>
