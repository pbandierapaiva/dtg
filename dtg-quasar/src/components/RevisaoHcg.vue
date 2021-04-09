<template>
  <q-page class="flex flex-center" style="padding-bottom: 135%;">
    <q-table
      title="hCG"
      :data="data"
      :columns="columns"
      row-key="name"
      :pagination.sync="pagination"
    >
      <template v-slot:body="props">
        <q-tr :props="props">
          <q-td key="paciente" :props="props">
            {{ props.row.paciente }}
          </q-td>
          <q-td key="data" :props="props">
            {{ props.row.data }}
          </q-td>
          <q-td key="laboratorio" :props="props">
            {{ props.row.laboratorio }}
          </q-td>
          <q-td key="resultado" :props="props">
            {{ props.row.resultado }}
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
          <q-td key="visualizarHcgs" :props="props"
            ><q-btn
              id="btnVisualizarHcg"
              flat
              dense
              icon="format_list_numbered"
            ></q-btn
          ></q-td>
          <q-td key="editar" :props="props"
            ><q-btn id="editar" flat dense icon="edit_note"></q-btn
          ></q-td>
          <q-td key="revisar" :props="props"
            ><q-option-group
              :options="options"
              v-model="revisado[props.row.id]"
              type="checkbox"
          /></q-td>
        </q-tr>
      </template>
    </q-table>
  </q-page>
</template>

<script>
export default {
  name: "Componente_Revisao_HCG",
  data() {
    return {
      revisado: [],
      pagination: {
        rowsPerPage: 7
      },
      options: [
        {
          label: "",
          value: ""
        }
      ],
      columns: [
        {
          name: "paciente",
          label: "Paciente",
          align: "left",
          field: row => row.paciente,
          format: val => `${val}`
        },
        {
          name: "data",
          label: "Data",
          align: "left",
          field: row => row.data,
          format: val => `${val}`
        },
        {
          name: "laboratorio",
          label: "Laboratório",
          align: "left",
          field: row => row.laboratorio,
          format: val => `${val}`
        },
        {
          name: "resultado",
          label: "Resultado",
          align: "left",
          field: row => row.resultado,
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
          name: "visualizarHcgs",
          label: "Visualizar hCGs",
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
      data: [
        {
          id: 1,
          paciente: "Kelly Kapoor",
          data: "12/10/2020",
          laboratorio: "Delboni",
          resultado: 500,
          cadastrante: "Kelly Kapoor"
        },
        {
          id: 2,
          paciente: "Pam Beesly",
          data: "12/11/2020",
          laboratorio: "Delboni",
          resultado: 1500,
          cadastrante: "Ryan Howard"
        },
        {
          id: 3,
          paciente: "Erin Hannon",
          data: "12/12/2020",
          laboratorio: "Delboni",
          resultado: 1000,
          cadastrante: "Angela Martin"
        }
      ]
    };
  },
  mounted() {
    var i = 0;
    for (i = 0; i < 100; i++) {
      this.revisado[i] = false;
    }
  }
};
</script>
