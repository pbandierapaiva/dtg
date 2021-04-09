<template>
  <q-page class="flex flex-center">
    <q-form
      @submit="onSubmit"
      @reset="onReset"
      class="q-pa-xs q-gutter-md flex-center full-width row"
    >
      <q-input
        v-model="consultaPaciente.nome"
        label="Nome"
        class="q-pl-md col-3"
        max-length="250"
      />
      <q-input
        v-model="consultaPaciente.cpf"
        label="CPF"
        class="q-pl-md col-2"
        mask="###.###.###-##"
      />
      <q-input
        v-model="consultaPaciente.preceptor"
        label="Preceptor"
        class="q-pl-md col-3"
        maxlength="250"
      />
      <q-select
        v-model="consultaPaciente.situacao"
        :options="options"
        label="Situação"
        class="q-pl-md col-2"
      />
      <div class="q-pl-lg col-1" style="margin-top: 2%;">
        <q-btn label="Consultar" type="submit" color="primary" />
      </div>
    </q-form>
    <div class="q-pa-lg" style="padding-bottom: 135%;">
      <b>Pacientes</b>
      <q-btn
        id="cadastrar_paciente"
        to="/cadastro_paciente"
        icon="add"
        flat
        dense
        color="primary"
        style="margin-top: -1%;"
      ></q-btn>
      {{ consultaPaciente.cpf }}
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
            <q-td key="dataNasc" :props="props">
              {{ props.row.dataNasc }}
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
                @click="delegarUsuario(props.row)"
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
          name: "dataNasc",
          label: "Data Nascimento",
          align: "left",
          field: row => row.dataNasc,
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
          dataNasc: "12/12/1990",
          preceptor: "Ryan Howard",
          inativar: true
        },
        {
          id: 2,
          nome: "Pam Beesly",
          cpf: "321.654.980-13",
          dataNasc: "12/12/1990",
          preceptor: "Jim Halpert",
          inativar: true
        },
        {
          id: 3,
          nome: "Eric Hannon",
          cpf: "963.852.741-32",
          dataNasc: "12/12/1990",
          preceptor: "Angela Martin",
          inativar: true
        },
        {
          id: 4,
          nome: "Meredith Palmer",
          cpf: "321.654.987-25",
          dataNasc: "12/12/1990",
          preceptor: "Angela Martin",
          inativar: true
        },
        {
          id: 5,
          nome: "Phyllis Lapin",
          cpf: "753.951.456-00",
          dataNasc: "12/12/1990",
          preceptor: "Angela Martin",
          inativar: true
        },
        {
          id: 6,
          nome: "Jan Levinson",
          cpf: "852.963.711-22",
          dataNasc: "12/12/1990",
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
    onReset() {},
    delegarUsuario(usuario) {
      console.log(usuario);
      this.$store.dispatch("principal/delegarUsuario", usuario).then(() => {});
    }
  }
};
</script>
