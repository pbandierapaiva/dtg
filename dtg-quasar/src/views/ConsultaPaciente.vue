<template>
  <q-page class="flex flex-center">
    <q-form
      @submit="onSubmit"
      @reset="onReset"
      class="q-gutter-md q-pa-xs full-width row"
    >
      <q-input
        v-model="consultaPaciente.nome"
        label="Nome"
        class="q-pa-xs col-3"
      />
      <q-input
        v-model="consultaPaciente.cpf"
        label="CPF"
        class="q-pa-xs col-2"
        mask="###.###.###-##"
      />
      <q-input
        v-model="consultaPaciente.preceptor"
        label="Preceptor"
        class="q-pa-xs col-3"
      />
      <q-select
        v-model="consultaPaciente.situacao"
        :options="options"
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
    <div class="q-pa-lg">
      <b>Pacientes</b>
      <q-btn
        id="cadastrar_paciente"
        to="/cadastro_paciente"
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
            <q-td key="editar" :props="props"
              ><q-btn id="editar" flat dense icon="edit_note"></q-btn
            ></q-td>
            <q-td key="delegar" :props="props"
              ><q-btn
                id="delegar"
                flat
                dense
                icon="account_circle"
                to="/delegacao"
              ></q-btn>
            </q-td>
            <q-td key="inativar" :props="props">
              <q-toggle v-model="props.row.inativar" color="green" />
            </q-td>
          </q-tr>
        </template>
      </q-table>
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
      consultaPaciente: {
        nome: "",
        cpf: "",
        preceptor: "",
        situacao: ""
      },
      options: ["Ativo", "Inativo"],
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
          name: "editar",
          label: "Editar",
          align: "center"
        },
        {
          name: "delegar",
          label: "Delegar",
          align: "center"
        },
        {
          name: "inativar",
          label: "Inativar",
          align: "center"
        }
      ],

      data: [
        {
          id: 1,
          nome: "Kelly Kapoor",
          cpf: "123.456.789-10",
          preceptor: "Ryan Howard",
          inativar: true
        },
        {
          id: 2,
          nome: "Pam Beesly",
          cpf: "321.654.980-13",
          preceptor: "Jim Halpert",
          inativar: true
        },
        {
          id: 3,
          nome: "Eric Hannon",
          cpf: "963.852.741-32",
          preceptor: "Angela Martin",
          inativar: true
        },
        {
          id: 4,
          nome: "Meredith Palmer",
          cpf: "321.654.987-25",
          preceptor: "Angela Martin",
          inativar: true
        },
        {
          id: 5,
          nome: "Phyllis Lapin",
          cpf: "753.951.456-00",
          preceptor: "Angela Martin",
          inativar: true
        },
        {
          id: 6,
          nome: "Jan Levinson",
          cpf: "852.963.711-22",
          preceptor: "Angela Martin",
          inativar: false
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
