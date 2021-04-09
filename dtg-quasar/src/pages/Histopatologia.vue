<template>
  <q-page class="flex flex-center">
    <!--<h4>Consulta Histopatologia</h4>-->

    <q-form
      @submit="onSubmit"
      @reset="onReset"
      class="q-gutter-md q-pa-xs full-width row flex-center"
    >
      <q-input
        v-model="consultaHistopatologia.descricao"
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
    <div class="q-pa-lg" style="padding-bottom: 135%;">
      <b>Histopatologias</b>
      <q-btn
        id="btnCadastrarHist"
        @click="modalCadastroHist = true"
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
        :filter="consultaHistopatologia.descricao"
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
    <q-dialog
      v-model="modalCadastroHist"
      style="width: 700px; max-width: 80vw;"
    >
      <q-card>
        <q-card-section>
          <div class="text-h6">Cadastro Histopatologia</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          <q-form @submit="onCadastro" @reset="onLimpar">
            <q-input
              type="text"
              v-model="cadastroHist.descricao"
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
      modalCadastroHist: false,
      filter: "",
      pagination: {
        rowsPerPage: 7
      },
      consultaHistopatologia: {
        descricao: ""
      },
      cadastroHist: {
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
          descricao: "Não tem"
        },
        {
          id: 2,
          descricao: "MI diagnosticada por HTA"
        },
        {
          id: 3,
          descricao: "CORIO diagnosticada por HTA"
        },
        {
          id: 4,
          descricao: "CORIOCA por CTG/Histeroscopia"
        },
        {
          id: 5,
          descricao: "Outros por CTG/Histeroscopia"
        }
      ]
    };
  },
  methods: {
    onSubmit() {},
    onReset() {},
    onCadastro() {},
    onLimpar() {}
  }
};
</script>
