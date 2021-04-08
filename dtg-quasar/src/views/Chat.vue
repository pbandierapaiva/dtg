<template>
  <q-page class="flex flex-start">
    <!--<h4>CHAT</h4>-->

    <q-form
      @submit="onSubmit"
      @reset="onReset"
      class="q-gutter-md q-pa-xs full-width row"
    >
      <q-input
        v-model="chat.nome"
        label="Nome"
        class="q-pa-xs col-3"
        :rules="[val => (val && val.length > 0) || 'Digite alguma descrição']"
      />
      <q-input
        v-model="chat.cpf"
        label="CPF"
        class="q-pa-xs col-2"
        mask="#####-###"
      />
      <q-input
        v-model="chat.preceptor"
        label="Preceptor"
        class="q-pa-xs col-3"
      />
      <q-select
        v-model="chat.status"
        :options="optStatus"
        label="STATUS"
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
    <div class="row full-width q-pa-lg">
      
      
      <q-table class="col-5"
        :data="data"
        :columns="columns"
        row-key="name"
        title="Lista de Destinatários"
        :pagination.sync="pagination"
      > <template v-slot:body="props">
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
          </q-tr>
        </template>
      </q-table>
      <div class="q-pa-md row justify-right">
        <div style="width: 100%; max-width: 400px">
          <q-chat-message
              name="me"
              :text="['hey, how are you?']"
              sent
            />
          <q-chat-message
            name="Jane"
            :text="['doing fine, how r you?']"
          />
        </div>
      </div>

      <q-input
        v-model="chat.mensagem"
        label="Mensagem"
        class="q-pa-xs col-3"
        :rules="[val => (val && val.length > 0) || 'Digite alguma descrição']"
        style="float-right margin-top: 2%;"
      />
      <q-btn
        label="Enviar"
        type="submit"
        color="primary"
        class="q-pa-xs q-ma-md col-1"
        style="float-right margin-top: 2%;"
      />
    </div>
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
      chat: {
        nome: "",
        cpf: "",
        preceptor: "",
        hora: ""
      },
      optStatus: [
        "ATIVO",
        "INATIVO"
      ],
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
        }
      ],

      data: [
        {
          id: 1,
          nome: "João José",
          cpf: "123456789-99",
          preceptor: "Dr Rey",
          hora: "12:00"
          
        }
      ]
    };
  },
  methods: {
    onSubmit() {
      alert("Funcionalidade em construção");
    },
    onReset() {}
  }
};
</script>
