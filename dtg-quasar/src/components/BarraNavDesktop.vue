<template>
  <q-toolbar class="bg-secondary">
    <q-btn stretch flat to="/paciente" label="Paciente"
      ><router-link class="nav-link" to="/paciente"></router-link
    ></q-btn>
    <q-btn stretch flat to="/chat" label="Chat"
      ><router-link class="nav-link" to="/chat"></router-link
    ></q-btn>
    <q-btn stretch flat to="/cadastro_usuario" label="Cadastro de Usuário"
      ><router-link class="nav-link" to="/cadastro_usuario"></router-link
    ></q-btn>
    <q-btn-dropdown stretch flat label="Tabelas Auxiliares">
      <q-list class="bg-secondary">
        <q-item>
          <q-btn
            stretch
            flat
            to="/histopatologia"
            label="Histopatologia"
            style="color:white;"
            ><router-link class="nav-link" to="/histopatologia"></router-link
          ></q-btn>
        </q-item>
        <q-item>
          <q-btn
            stretch
            flat
            to="/indicacao"
            label="Indicação"
            style="color:white;"
            ><router-link class="nav-link" to="/indicacao"></router-link
          ></q-btn>
        </q-item>
        <q-item>
          <q-btn
            stretch
            flat
            to="/instituicao"
            label="Instituição"
            style="color:white;"
            ><router-link class="nav-link" to="/instituicao"></router-link
          ></q-btn>
        </q-item>
        <q-item>
          <q-btn stretch flat to="/mac" label="MAC" style="color:white;"
            ><router-link class="nav-link" to="/mac"></router-link
          ></q-btn>
        </q-item>
      </q-list>
    </q-btn-dropdown>
    <q-btn stretch flat to="/revisao" label="Revisão"
      ><router-link class="nav-link" to="/revisao"></router-link
    ></q-btn>
    <q-btn stretch flat to="/" label="Sair"></q-btn>
  </q-toolbar>
</template>
