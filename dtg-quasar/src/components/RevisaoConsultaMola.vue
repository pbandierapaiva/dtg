<template>
  <q-page class="flex flex-center" style="padding-bottom: 135%;">
    <q-table
      title="ConsultaMola"
      :data="data"
      :columns="columns"
      row-key="name"
      :pagination.sync="pagination"
    >
      <template v-slot:body="props">
        <q-tr :props="props">
          <q-td key="medicoAtendente" :props="props">
            {{ props.row.medicoAtendente }}
          </q-td>
          <q-td key="crm" :props="props">
            {{ props.row.crm }}
          </q-td>
          <q-td key="paciente" :props="props">
            {{ props.row.paciente }}
          </q-td>
          <q-td key="grauNivelEstadiamento" :props="props">
            {{ props.row.grauNivelEstadiamento }}
          </q-td>
          <q-td key="dataConsulta" :props="props">
            {{ props.row.dataConsulta }}
          </q-td>
          <q-td key="visualizarRegistroMola" :props="props"
            ><q-btn
              id="btnVisualizarRegistro"
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
  name: "Componente Revisão HCG",
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
          name: "medicoAtendente",
          label: "Médico Atendente",
          align: "left",
          field: row => row.medicoAtendente,
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
          name: "paciente",
          label: "Paciente",
          align: "left",
          field: row => row.paciente,
          format: val => `${val}`
        },
        {
          name: "grauNivelEstadiamento",
          label: "Grau/Nível Estadiamento",
          align: "center",
          field: row => row.grauNivelEstadiamento,
          format: val => `${val}`
        },
        {
          name: "dataConsulta",
          label: "Data da Consulta",
          align: "left",
          field: row => row.dataConsulta,
          format: val => `${val}`
        },
        {
          name: "visualizarRegistroMola",
          label: "Visualizar Registro Mola",
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
          medicoAtendente: "Jo Bennett",
          crm: "12.345 - SP",
          paciente: "Kelly Kapoor",
          grauNivelEstadiamento: "I/1",
          dataConsulta: "12/10/2020"
        },
        {
          id: 2,
          medicoAtendente: "Michael Scarn",
          crm: "23.456 - SP",
          paciente: "Pam Beesly",
          grauNivelEstadiamento: "II/2",
          dataConsulta: "12/11/2020"
        },
        {
          id: 3,
          medicoAtendente: "Michael Scott",
          crm: "56.789 - RJ",
          paciente: "Erin Hannon",
          grauNivelEstadiamento: "I/1",
          dataConsulta: "12/12/2020"
        },
        {
          id: 4,
          medicoAtendente: "Holly Flax",
          crm: "67.890 - RJ",
          paciente: "Kelly Kapoor",
          grauNivelEstadiamento: "II/2",
          dataConsulta: "12/01/2021"
        },
        {
          id: 5,
          medicoAtendente: "Ryan Howard",
          crm: "78.901 - MG",
          paciente: "Pam Beesly",
          grauNivelEstadiamento: "I/1",
          dataConsulta: "12/02/2022"
        },
        {
          id: 6,
          medicoAtendente: "Angela Martin",
          crm: "89.012 - MG",
          paciente: "Erin Hannon",
          grauNivelEstadiamento: "IV/20",
          dataConsulta: "12/03/2021"
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
