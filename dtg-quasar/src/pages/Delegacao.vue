<template>
  <q-page class="flex flex-center">
    <div class="flex-center q-gutter-md">
      <span><b>Nome: </b>{{ usuarioDelegacao.nome }}</span>
      <span><b>CPF: </b>{{ usuarioDelegacao.cpf }}</span>
      <span><b>Data Nascimento: </b>{{ usuarioDelegacao.dataNasc }}</span>
      <span><b>Preceptor: </b>{{ usuarioDelegacao.preceptor }}</span>
    </div>
    <div class="full-width" style="padding-left: 20%;">
      <q-table
        :data="dataResponsaveis"
        :columns="columnsResponsaveis"
        row-key="name"
        :pagination.sync="pagination"
        style="width:80%;"
        title="Responsáveis pela Paciente"
      >
        <template v-slot:body="props">
          <q-tr :props="props">
            <q-td key="id" :props="props">
              {{ props.row.id }}
            </q-td>
            <q-td key="nome" :props="props">
              {{ props.row.nome }}
            </q-td>
            <q-td key="ufCrm" :props="props">
              {{ props.row.ufCrm }}
            </q-td>
            <q-td key="crm" :props="props">
              {{ props.row.crm }}
            </q-td>
            <q-td key="categoria" :props="props">
              {{ props.row.categoria }}
            </q-td>
            <q-td key="excluir" :props="props"
              ><q-btn id="btnExcluir" flat dense icon="delete"></q-btn
            ></q-td>
          </q-tr>
        </template>
      </q-table>
    </div>
    <q-btn
      label="Novo Acesso"
      color="primary"
      class="q-pa-xs q-ma-md"
      @click="abrirConsultaMedicos"
    />
    <q-btn
      label="Voltar"
      color="primary"
      class="q-pa-xs q-ma-md"
      to="/consulta_paciente"
    />
    <q-dialog v-model="consultaMedicosDelegacao" full-width>
      <q-card>
        <q-card-section>
          <div class="text-h6">Consulta Médicos para delegação</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          <q-input
            v-model="filtroPopup"
            type="text"
            label="CRM ou Nome"
          ></q-input
          ><br />
          <q-table
            :data="dataConsultaMedicos"
            :columns="columnsConsultaMedicos"
            row-key="name"
            :pagination.sync="pagination"
            class="col-4"
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
                <q-td key="ufCrm" :props="props">
                  {{ props.row.ufCrm }}
                </q-td>
                <q-td key="categoria" :props="props">
                  {{ props.row.categoria }}
                </q-td>
                <q-td key="confirmar" :props="props"
                  ><q-btn
                    id="btnConfrimar"
                    label="Confirmar"
                    class="q-pa-xs q-ma-md"
                    color="primary"
                  ></q-btn
                ></q-td>
              </q-tr>
            </template>
          </q-table>
        </q-card-section>

        <q-card-actions align="right">
          <q-btn flat label="Voltar" color="primary" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </q-page>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters("principal", ["usuarioDelegacao"])
  },
  data() {
    return {
      consultaMedicosDelegacao: false,
      filtroPopup: "",
      pagination: {
        rowsPerPage: 7
      },
      columnsResponsaveis: [
        {
          name: "id",
          label: "ID",
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
          name: "ufCrm",
          label: "UF CRM",
          align: "left",
          field: row => row.ufCrm,
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
          name: "categoria",
          label: "Categoria",
          align: "left",
          field: row => row.categoria,
          format: val => `${val}`
        },
        {
          name: "excluir",
          label: "Excluir",
          align: "center"
        }
      ],
      dataResponsaveis: [
        {
          id: 1,
          nome: "Jo Bennett",
          ufCrm: "SP",
          crm: "12.345",
          categoria: "Acadêmico"
        },
        {
          id: 2,
          nome: "Michael Scarn",
          ufCrm: "SP",
          crm: "23.456",
          categoria: "Residente"
        }
      ],
      columnsConsultaMedicos: [
        {
          name: "id",
          label: "ID",
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
          name: "ufCrm",
          label: "UF CRM",
          align: "left",
          field: row => row.ufCrm,
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
          name: "confirmar",
          label: "Confirmar",
          align: "center"
        }
      ],
      dataConsultaMedicos: [
        {
          id: 1,
          nome: "Michael Scott",
          crm: "56.789",
          ufCrm: "RJ",
          categoria: "Contratado"
        },
        {
          id: 2,
          nome: "Holly Flax",
          crm: "67.890",
          ufCrm: "RJ",
          categoria: "Pós-Graduando"
        },
        {
          id: 3,
          nome: "Ryan Howard",
          crm: "78.901",
          ufCrm: "MG",
          categoria: "Docente"
        },
        {
          id: 4,
          nome: "Angela Martin",
          crm: "89.012",
          ufCrm: "MG",
          categoria: "Outros"
        }
      ]
    };
  },
  methods: {
    abrirConsultaMedicos() {
      this.consultaMedicosDelegacao = true;
    }
  }
};
</script>
