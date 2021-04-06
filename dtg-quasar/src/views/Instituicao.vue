<template>
  <q-page class="flex flex-center">
    <!--<h4>Consulta Paciente</h4>-->

    <q-form
      @submit="onSubmit"
      @reset="onReset"
      class="q-gutter-md q-pa-xs full-width row"
    >
      <q-input
        v-model="consultaInstituicao.descricao"
        label="Descrição"
        class="q-pa-xs col-3"
        :rules="[val => (val && val.length > 0) || 'Digite alguma descrição']"
      />
      <q-input
        v-model="consultaInstituicao.cep"
        label="CEP"
        class="q-pa-xs col-2"
        mask="#####-###"
      />
      <q-input
        v-model="consultaInstituicao.logradouro"
        label="Logradouro"
        class="q-pa-xs col-3"
      />
      <q-select
        v-model="consultaInstituicao.uf"
        :options="optUf"
        label="UF"
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
      <b>Instituicões</b>
      <q-btn
        id="btnCadastrarInst"
        to=""
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
            <q-td key="descricao" :props="props">
              {{ props.row.descricao }}
            </q-td>
            <q-td key="logradouro" :props="props">
              {{ props.row.logradouro }}
            </q-td>
            <q-td key="numero" :props="props">
              {{ props.row.numero }}
            </q-td>
            <q-td key="cep" :props="props">
              {{ props.row.cep }}
            </q-td>
            <q-td key="bairro" :props="props">
              {{ props.row.bairro }}
            </q-td>
            <q-td key="cidade" :props="props">
              {{ props.row.cidade }}
            </q-td>
            <q-td key="uf" :props="props">
              {{ props.row.uf }}
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
      consultaInstituicao: {
        descricao: "",
        cep: "",
        logradouro: "",
        uf: ""
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
          name: "logradouro",
          label: "Logradouro",
          align: "left",
          field: row => row.logradouro,
          format: val => `${val}`
        },
        {
          name: "numero",
          label: "Número",
          align: "left",
          field: row => row.numero,
          format: val => `${val}`
        },
        {
          name: "cep",
          label: "CEP",
          align: "left",
          field: row => row.cep,
          format: val => `${val}`
        },
        {
          name: "bairro",
          label: "Bairro",
          align: "left",
          field: row => row.bairro,
          format: val => `${val}`
        },
        {
          name: "cidade",
          label: "Cidade",
          align: "left",
          field: row => row.cidade,
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
          descricao: "Hospital São Paulo",
          logradouro: "Rua Napoleão de Barros",
          numero: "715",
          cep: "04024-002",
          bairro: "Vila Clementino",
          cidade: "São Paulo",
          uf: "SP"
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
