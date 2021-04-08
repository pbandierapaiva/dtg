<template>
  <q-page class="flex flex-center">
    <q-tabs
      v-model="tab"
      dense
      active-color="primary"
      indicator-color="primary"
      class="full-width"
      align="justify"
      narrow-indicator
    >
      <q-tab name="hcg" label="hCG" />
      <q-tab name="rx" label="RX" />
      <q-tab name="ultrassom" label="Ultrassom" />
      <q-tab name="tomografia" label="Tomografia" />
      <q-tab name="consulta_mola" label="Consulta Mola" />
    </q-tabs>

    <q-tab-panels v-model="tab" animated>
      <q-tab-panel name="hcg">
        <RevisaoHcg />
      </q-tab-panel>
      <q-tab-panel name="rx">
        <RevisaoRx />
      </q-tab-panel>
      <q-tab-panel name="ultrassom">
        <RevisaoUltrassom />
      </q-tab-panel>
      <q-tab-panel name="tomografia">
        <RevisaoTomografia />
      </q-tab-panel>
      <q-tab-panel name="consulta_mola">
        <RevisaoConsultaMola />
      </q-tab-panel>
    </q-tab-panels>
  </q-page>
</template>
<script>
import RevisaoHcg from "../components/RevisaoHcg.vue";
import RevisaoRx from "../components/RevisaoRx.vue";
import RevisaoUltrassom from "../components/RevisaoUltrassom.vue";
import RevisaoTomografia from "../components/RevisaoTomografia.vue";
import RevisaoConsultaMola from "../components/RevisaoConsultaMola.vue";
export default {
  name: "Revisão",
  components: {
    RevisaoHcg,
    RevisaoRx,
    RevisaoUltrassom,
    RevisaoTomografia,
    RevisaoConsultaMola
  },
  data() {
    return {
      tab: "hcg"
    };
  }
};
</script>
