<template>
  <q-page class="flex flex-center" style="padding-bottom: 135%;">
    <q-table
      title="Ultrassom"
      :data="dataUltrassom"
      :columns="columnsUltrassom"
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
          <q-td key="visualizarUltrassom" :props="props"
            ><q-btn id="btnVisualizarUltrassom" flat dense icon="search"></q-btn
          ></q-td>
          <q-td key="visualizarLaudoUltrassom" :props="props"
            ><q-btn
              id="btnVisualizarLaudoUltrassom"
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
              v-model="revisadoUltrassom[props.row.id]"
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
      revisadoUltrassom: [],
      pagination: {
        rowsPerPage: 7
      },
      options: [
        {
          label: "",
          value: ""
        }
      ],
      columnsUltrassom: [
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
          name: "visualizarUltrassom",
          label: "Visualizar Ultrasom",
          align: "center"
        },
        {
          name: "visualizarLaudoUltrassom",
          label: "Visualizar Laudo Ultrasom",
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
      dataUltrassom: [
        {
          id: 1,
          paciente: "Kelly Kapoor",
          dataExame: "12/10/2020",
          cadastrante: "Kelly Kapoor"
        },
        {
          id: 2,
          paciente: "Pam Beesly",
          dataExame: "12/11/2020",
          cadastrante: "Ryan Howard"
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
      this.revisadoUltrassom[i] = false;
    }
  }
};
</script>
