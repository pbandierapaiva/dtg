<template>
  <q-page class="flex flex-center">
    <!--<h4>Consulta Indicação</h4>-->

    <q-form
      @submit="onSubmit"
      @reset="onReset"
      class="q-gutter-md q-pa-xs full-width row flex-center"
    >
      <q-input
        v-model="consultaIndicacao.descricao"
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
      <b>Indicações</b>
      <q-btn
        id="btnCadastrarHist"
        @click="modalCadastroInd = true"
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
        :filter="consultaIndicacao.descricao"
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
    <q-dialog v-model="modalCadastroInd" style="width: 700px; max-width: 80vw;">
      <q-card>
        <q-card-section>
          <div class="text-h6">Cadastro Indicação</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          <q-form @submit="onCadastro" @reset="onLimpar">
            <q-input
              type="text"
              v-model="cadastroIndicacao.descricao"
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
      modalCadastroInd: false,
      filter: "",
      pagination: {
        rowsPerPage: 7
      },
      consultaIndicacao: {
        descricao: ""
      },
      cadastroIndicacao: {
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
          descricao: "Encaminhada por Médico"
        },
        {
          id: 2,
          descricao: "Regulação"
        },
        {
          id: 3,
          descricao: "Facebook"
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
