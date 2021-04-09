<template>
  <q-page class="flex flex-center" style="padding-bottom: 135%;">
    <q-table
      title="Tomografia"
      :data="dataTomografia"
      :columns="columnsTomografia"
      row-key="name"
      :pagination.sync="pagination"
    >
      <template v-slot:body="props">
        <q-tr :props="props">
          <q-td key="paciente" :props="props">
            {{ props.row.paciente }}
          </q-td>
          <q-td key="dataExame" :props="props">
            {{ props.row.dataExame }}
          </q-td>
          <q-td key="cadastrante" :props="props">
            {{ props.row.cadastrante }}
          </q-td>
          <q-td key="visualizarRegistroMola" :props="props"
            ><q-btn
              id="btnVisualizarRegistro"
              flat
              dense
              icon="format_list_numbered"
            ></q-btn
          ></q-td>
          <q-td key="visualizarTomografia" :props="props"
            ><q-btn
              id="btnVisualizarTomografia"
              flat
              dense
              icon="search"
            ></q-btn
          ></q-td>
          <q-td key="visualizarLaudoTomografia" :props="props"
            ><q-btn
              id="btnVisualizarLaudoTomografia"
              flat
              dense
              icon="search"
            ></q-btn
          ></q-td>
          <q-td key="editar" :props="props"
            ><q-btn id="editar" flat dense icon="edit_note"></q-btn
          ></q-td>
          <q-td key="revisar" :props="props"
            ><q-option-group
              :options="options"
              v-model="revisadoTomografia[props.row.id]"
              type="checkbox"
          /></q-td>
        </q-tr>
      </template>
    </q-table>
  </q-page>
</template>

<script>
export default {
  data() {
    return {
      revisadoTomografia: [],
      pagination: {
        rowsPerPage: 7
      },
      options: [
        {
          label: "",
          value: ""
        }
      ],
      columnsTomografia: [
        {
          name: "paciente",
          label: "Paciente",
          align: "left",
          field: row => row.paciente,
          format: val => `${val}`
        },
        {
          name: "dataExame",
          label: "Data Exame",
          align: "left",
          field: row => row.dataExame,
          format: val => `${val}`
        },
        {
          name: "cadastrante",
          label: "Cadastrante",
          align: "left",
          field: row => row.cadastrante,
          format: val => `${val}`
        },
        {
          name: "visualizarRegistroMola",
          label: "Visualizar Registro Mola",
          align: "center"
        },
        {
          name: "visualizarTomografia",
          label: "Visualizar Tomografia",
          align: "center"
        },
        {
          name: "visualizarLaudoTomografia",
          label: "Visualizar Laudo Tomografia",
          align: "center"
        },
        {
          name: "editar",
          label: "Editar",
          align: "center"
        },
        {
          name: "revisar",
          label: "Revisar",
          align: "center"
        }
      ],
      dataTomografia: [
        {
          id: 1,
          paciente: "Kelly Kapoor",
          dataExame: "12/10/2020",
          cadastrante: "Ryan Howard"
        },
        {
          id: 2,
          paciente: "Pam Beesly",
          dataExame: "12/11/2020",
          cadastrante: "Pam Beesly"
        },
        {
          id: 3,
          paciente: "Erin Hannon",
          dataExame: "12/12/2020",
          cadastrante: "Angela Martin"
        }
      ]
    };
  },
  mounted() {
    var i = 0;
    for (i = 0; i < 100; i++) {
      this.revisadoTomografia[i] = false;
    }
  }
};
</script>
