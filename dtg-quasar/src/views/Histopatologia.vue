<template>
  <div class="q-gutter-md" style="max-width: 600px">
    <div class="q-gutter-md" style="max-width: 300px ">
      <q-input outlined v-model="text" label="Descrição da Histopatologia" />
    </div>
    <div class="q-gutter-md" style="float: right;">
      <q-btn color="primary" label="CONSULTAR" />
    </div>
    <q-table
      title="Histopatologias NTG"
      :data="data"
      :columns="columns"
      row-key="name"
    >
      <template v-slot:body="props">
        <q-tr :props="props">
          <q-td key="name" :props="props">
            {{ props.row.name }}
          </q-td>
          <q-td key="fat" :props="props">
            <q-badge color="primary">
            <q-btn icon="edit" dense flat/>
            </q-badge>
          </q-td>
          <q-td key="fat" :props="props">
            <q-badge color="primary">
            <q-btn icon="delete" dense flat/>
            </q-badge>
          </q-td>
          
        </q-tr>
      </template>
    </q-table>
  </div>
 

</template>

<script>
export default {
  data () {
    return {
      columns: [
        {
          name: 'name',
          required: true,
          label: 'Descrição',
          align: 'left',
          field: row => row.name,
          format: val => `${val}`,
          sortable: true
        },
        { name: 'calories', align: 'center', label: 'Editar', field: 'calories', sortable: true },
        { name: 'fat', label: 'Excluir', field: 'fat', sortable: true },
        
      ],

      data: [
        {
          name: 'Não tem',
          calories: 159,
          fat: 6.0,
          carbs: 24,
          protein: 4.0,
          sodium: 87,
          calcium: '14%',
          iron: '1%'
        },
        {
          name: 'MI diagnosticada por HTA',
          calories: 237,
          fat: 9.0,
          carbs: 37,
          protein: 4.3,
          sodium: 129,
          calcium: '8%',
          iron: '1%'
        },
        {
          name: 'CORIO diagnosticada por HTA﻿',
          calories: 262,
          fat: 16.0,
          carbs: 23,
          protein: 6.0,
          sodium: 337,
          calcium: '6%',
          iron: '7%'
        },
        {
          name: 'CORIOCA por CTG/Histeroscopia﻿',
          calories: 305,
          fat: 3.7,
          carbs: 67,
          protein: 4.3,
          sodium: 413,
          calcium: '3%',
          iron: '8%'
        },
        {
          name: 'Outros por CTG/Histeroscopia﻿',
          calories: 356,
          fat: 16.0,
          carbs: 49,
          protein: 3.9,
          sodium: 327,
          calcium: '7%',
          iron: '16%'
        }
      ]
    }
  }
}
</script>