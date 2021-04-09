<template>
  <q-layout view="lHh Lpr lFf">
    <q-header reveal bordered class="bg-primary text-white">
      <q-toolbar>
        <q-toolbar-title
          clickable
          v-ripple
          @click="$router.replace('/consulta_paciente')"
          active-class="my-menu-link"
        >
          <div style="width:130px; float:left;">
            <img
              style="display:block; margin-top: 5%;"
              width="130px"
              src="~assets/logo_unifesp.png"
            />
          </div>
          <div style="margin-left:10%; margin-top: 0.2%;">
            <span style="font-size:15px; display:block;">MolaApp</span>
            <span style="font-size:15px; display:block;"
              >Ambulatório de DTG</span
            >
            <span style="font-size:15px; display:block;">
              Departamento de Obstetricia - HUHSP
            </span>
          </div>
          <div
            style="float: right; margin-right: 1%;"
            class="fixed-top-right"
            v-show="usuarioLogado"
          >
            <span style="font-size: 12px;"
              ><b>Nome:</b> {{ dadosUsuarioLogado.nome }} &nbsp; -</span
            >&nbsp;
            <span style="font-size: 12px;"
              ><b>Tipo: </b> {{ dadosUsuarioLogado.tipo }} &nbsp; -</span
            >&nbsp;
            <span style="font-size: 12px;"
              ><b>Categoria: </b> {{ dadosUsuarioLogado.categoria }} &nbsp;
              -</span
            >&nbsp;
            <span style="font-size: 12px;"
              ><b>CRM: </b> {{ dadosUsuarioLogado.crm }}
            </span>
          </div> </q-toolbar-title
        ><br />
      </q-toolbar>
      <BarraNavegacaoDesktop
        v-if="usuarioLogado && termoAceito"
        class="desktop-only"
      />
    </q-header>

    <q-footer elevated class="desktop-only">
      <q-toolbar>
        <q-toolbar-title>
          <div class="text-caption" style="float:right;">
            Desenvolvido pelo Departamento de Informática em Saúde
          </div>
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>

    <!-- ESBOÇO MAIN LAYOUT MOBILE - SERÁ REVISADO DEPOIS, POR ISSO ESTÁ COMENTADO -->

    <!--<q-header reveal bordered class="bg-primary text-white mobile-only">
      <q-toolbar>
        <q-toolbar-title
          clickable
          v-ripple
          @click="$router.replace('/')"
          active-class="my-menu-link"
        >
          <div style="width:90px; float:left;">
            <img
              style="display:block; margin-top: 8%;"
              width="90px"
              src="~assets/logo_unifesp.png"
            />
          </div>
          <div style="margin-left:30%; margin-top: 0.2%;">
            <span style="font-size:12px; display:block;">MolaApp</span>
            <span style="font-size:12px; display:block;"
              >Ambulatório de DTG</span
            >
            <span style="font-size:12px; display:block;">
              Departamento de Obstetricia - HUHSP
            </span>
          </div>
        </q-toolbar-title>
      </q-toolbar>
      <BarraNavegacaoMobile class="mobile-only" />
    </q-header>

    <q-footer elevated class="mobile-only">
      <q-toolbar>
        <q-toolbar-title>
          <div class="text-caption text-center" style="word-break: break-all;">
            Desenvolvido pelo Departamento de Informática em Saúde
          </div>
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>-->

    <q-page-container>
      <router-view :teste="3" />
    </q-page-container>
  </q-layout>
</template>

<script>
import BarraNavegacaoDesktop from "components/BarraNavDesktop.vue";
// NÃO ESTÁ SENDO USADO NO MOMENTO import BarraNavegacaoMobile from "components/BarraNavMobile.vue";
import { mapGetters } from "vuex";

export default {
  name: "MainLayout",
  components: {
    BarraNavegacaoDesktop
    // NÃO ESTÁ SENDO USADO NO MOMENTO BarraNavegacaoMobile
  },
  computed: {
    ...mapGetters("principal", [
      "usuarioLogado",
      "termoAceito",
      "dadosUsuarioLogado"
    ])
  },
  data() {
    return {};
  }
};
</script>
