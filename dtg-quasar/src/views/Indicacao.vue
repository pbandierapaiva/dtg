<template>
  <q-page class="flex flex-center">
    <div>
      <h3>Indicação</h3>
      <q-table
  title="Treats"
  :data="data"
  :columns="columns"
  row-key="name" 
  @row-click="onRowClick"
>
  <template v-slot:body-cell-name="props">
    <q-td :props="props">
      <div>
        <q-badge color="purple" :label="props.value"></q-badge>
        <q-btn icon="info" @click.stop="btnclick" dense flat/>
      </div>
    </q-td>
  </template>
</q-table>
    </div>
  </q-page>
</template>
