<template>
  <q-page class="flex flex-center">
    <!--<h4>Consulta Paciente</h4>-->

    <q-form
      @submit="onSubmit"
      @reset="onReset"
      class="q-gutter-md q-pa-xs full-width row"
    >
      <q-input
        v-model="consultaUsuario.nome"
        label="Nome"
        class="q-pa-xs col-3"
      />
      <q-input
        v-model="consultaUsuario.crm"
        label="CRM"
        class="q-pa-xs col-2"
      />
      <q-select
        v-model="consultaUsuario.uf"
        :options="optUf"
        label="UF"
        class="q-pa-xs col-1"
      />
      <q-select
        v-model="consultaUsuario.tipo"
        :options="optTipo"
        label="Tipo"
        class="q-pa-xs col-1"
      />
      <q-select
        v-model="consultaUsuario.instituicao"
        :options="optInstituicao"
        label="Instituição"
        class="q-pa-xs col-1"
      />
      <q-select
        v-model="consultaUsuario.situacao"
        :options="optSituacao"
        label="Situação"
        class="q-pa-xs col-1"
      />
      <q-select
        v-model="consultaUsuario.categoria"
        :options="optCategoria"
        label="Categoria"
        class="q-pa-xs col-1"
      />
      <q-btn
        label="Consultar"
        type="submit"
        color="primary"
        class="q-pa-xs q-ma-md col"
        style="margin-top: 2%;"
      />
    </q-form>
    <div class="q-pa-lg">
      <b>Médico/Coordenador</b>
      <q-btn
        id="cadastrar_usuario"
        to="/cadastro_usuario"
        icon="add"
        flat
        dense
        color="primary"
        style=""
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
            <q-td key="crm" :props="props">
              {{ props.row.crm }}
            </q-td>
            <q-td key="uf" :props="props">
              {{ props.row.uf }}
            </q-td>
            <q-td key="categoria" :props="props">
              {{ props.row.categoria }}
            </q-td>
            <q-td key="instituicao" :props="props">
              {{ props.row.instituicao }}
            </q-td>
            <q-td key="editar" :props="props"
              ><q-btn id="editar" flat dense icon="edit_note"></q-btn
            ></q-td>
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
      consultaUsuario: {
        nome: "",
        crm: "",
        uf: "",
        tipo: "",
        instituicao: "",
        situacao: "",
        categoria: ""
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
      optTipo: ["Médico", "Coordenador"],
      optInstituicao: ["HUHSP"],
      optSituacao: ["Ativo", "Inativo"],
      optCategoria: [
        "Acadêmico",
        "Residente",
        "Contratado",
        "Pós-Graduando",
        "Docente",
        "Outros"
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
          name: "crm",
          label: "CRM",
          align: "left",
          field: row => row.crm,
          format: val => `${val}`
        },
        {
          name: "uf",
          label: "UF",
          align: "left",
          field: row => row.uf,
          format: val => `${val}`
        },
        {
          name: "categoria",
          label: "Categoria",
          align: "left",
          field: row => row.categoria,
          format: val => `${val}`
        },
        {
          name: "instituicao",
          label: "Instituição",
          align: "left",
          field: row => row.instituicao,
          format: val => `${val}`
        },
        {
          name: "editar",
          label: "Editar",
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
          nome: "Jo Bennett",
          crm: "12.345",
          uf: "SP",
          categoria: "Acadêmico",
          instituicao: "HUHSP",
          inativar: true
        },
        {
          id: 2,
          nome: "Michael Scarn",
          crm: "23.456",
          uf: "SP",
          categoria: "Residente",
          instituicao: "HUHSP",
          inativar: true
        },
        {
          id: 3,
          nome: "Michael Scott",
          crm: "56.789",
          uf: "RJ",
          categoria: "Contratado",
          instituicao: "HUHSP",
          inativar: true
        },
        {
          id: 4,
          nome: "Holly Flax",
          crm: "67.890",
          uf: "RJ",
          categoria: "Pós-Graduando",
          instituicao: "HUHSP",
          inativar: true
        },
        {
          id: 5,
          nome: "Ryan Howard",
          crm: "78.901",
          uf: "SP",
          categoria: "Docente",
          instituicao: "HUHSP",
          inativar: true
        },
        {
          id: 6,
          nome: "Angela Martin",
          crm: "89.012",
          uf: "MG",
          categoria: "Outros",
          instituicao: "HUHSP",
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
