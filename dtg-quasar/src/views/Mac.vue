<template>
  <q-page class="flex flex-center">
    <!--<h4>Consulta MAC</h4>-->

    <q-form
      @submit="onSubmit"
      @reset="onReset"
      class="q-gutter-md q-pa-xs full-width row flex-center"
    >
      <q-input
        v-model="consultaMac.descricao"
        label="Descrição"
        class="q-pa-xs col-3"
      />

      <q-btn
        label="Consultar"
        type="submit"
        color="primary"
        class="q-pa-xs q-ma-md col-1"
        style="margin-top: 2%;"
      />
    </q-form>
    <div class="q-pa-lg">
      <b>MAC</b>
      <q-btn
        id="btnCadastrarHist"
        @click="modalCadastroMac = true"
        icon="add"
        flat
        dense
        color="primary"
      ></q-btn>
      <q-table
        :data="data"
        :columns="columns"
        row-key="name"
        :pagination.sync="pagination"
        :filter="consultaMac.descricao"
      >
        <template v-slot:body="props">
          <q-tr :props="props">
            <q-td key="id" :props="props">
              {{ props.row.id }}
            </q-td>
            <q-td key="descricao" :props="props">
              {{ props.row.descricao }}
            </q-td>
            <q-td key="editar" :props="props"
              ><q-btn id="editar" flat dense icon="edit_note"></q-btn
            ></q-td>
            <q-td key="excluir" :props="props">
              <q-btn id="excluir" flat dense icon="delete"></q-btn>
            </q-td>
          </q-tr>
        </template>
      </q-table>
    </div>
    <q-dialog v-model="modalCadastroMac" style="width: 700px; max-width: 80vw;">
      <q-card>
        <q-card-section>
          <div class="text-h6">Cadastro MAC</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          <q-form @submit="onCadastro" @reset="onLimpar">
            <q-input
              type="text"
              v-model="cadastroMac.descricao"
              label="Descrição"
            ></q-input
            ><br />
            <div class="flex-center q-gutter-xl">
              <q-btn color="primary" label="Gravar"></q-btn>
              <q-btn label="Voltar" color="primary" v-close-popup />
            </div>
          </q-form>
        </q-card-section>
      </q-card>
    </q-dialog>
  </q-page>
</template>

<script>
export default {
  name: "PageIndex",
  data() {
    return {
      filter: "",
      modalCadastroMac: false,
      pagination: {
        rowsPerPage: 7
      },
      consultaMac: {
        descricao: ""
      },
      cadastroMac: {
        descricao: ""
      },
      columns: [
        {
          name: "id",
          label: "Id",
          align: "left",
          field: row => row.id,
          format: val => `${val}`
        },
        {
          name: "descricao",
          label: "Descrição",
          align: "left",
          field: row => row.descricao,
          format: val => `${val}`
        },

        {
          name: "editar",
          label: "Editar",
          align: "center"
        },
        {
          name: "excluir",
          label: "Excluir",
          align: "center"
        }
      ],

      data: [
        {
          id: 1,
          descricao: "Nenhum"
        },
        {
          id: 2,
          descricao: "Acho"
        },
        {
          id: 3,
          descricao: "Injetável trimestral"
        },
        {
          id: 4,
          descricao: "Injetável mensal"
        },
        {
          id: 5,
          descricao: "Condom"
        },
        {
          id: 6,
          descricao: "Comprimido"
        }
      ]
    };
  },
  methods: {
    onSubmit() {
      alert("Funcionalidade em construção");
    },
    onReset() {},
    onCadastro() {},
    onLimpar() {}
  }
};
</script>
