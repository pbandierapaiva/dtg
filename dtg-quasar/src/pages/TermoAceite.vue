<template>
  <q-page class="flex flex-center ">
    <div class="full-width full-height">
      <h5 class="text-center" style="margin-top: -2%;">Termo de Usuário</h5>
      <p class="text-justify" style="width:99%; margin-left:0.5%;">
        Em face do direito à preservação da intimidade e do direito à
        indenização por eventual dano moral ou material, não é permitido a
        quebra do sigilo profissional existente entre o médico e o paciente,
        salvo as exceções previstas em Lei, sob pena de incidir em sanções civis
        e penais:
        <b
          >"Art. 73. Revelar fato de que tenha conhecimento em virtude do
          exercício de sua profissão, salvo por motivo justo, dever legal ou
          consentimento, por escrito, do paciente".</b
        >
      </p>
      <p class="text-justify" style="width:99%; margin-left:0.5%;">
        Documentos e informações adquiridos pelo médico, que pertence ao
        paciente, é um documento amparado pelo sigilo profissional (art. 5º, XIV
        da CF/88). O CFM dispõe que o conteúdo do prontuário médico poderá ser
        revelado a terceiros se houver a autorização do paciente, conforme
        estabelece o artigo 5º da Resolução CFM n.º 1605/2000, se houver a
        anuência do Conselho Regional de Medicina da jurisdição ou autorização
        judicial:
        <b
          >"Art. 85. Permitir o manuseio e o conhecimento dos prontuários por
          pessoas não obrigadas ao sigilo profissional quando sob sua
          responsabilidade".</b
        >
      </p>
      <p class="text-justify" style="width:99%; margin-left:0.5%;">
        <b
          >Por analogia aplica-se as mesmas regras jurídicas na telemedicina e
          suas modalidades: TELEORIENTAÇÃO
        </b>
        para que médicos realizem orientação à distância e com possibilidade de
        encaminhamentos. <b>TELEMONITORAMENTO </b> médico, ato para
        monitoramento ou vigilância à distância de parâmetros de saúde ou da
        doença. <b>TELEINTERCONSULTA </b> entre médicos, exclusivamente para
        troca de informações (clínicas, laboratoriais e de imagens) e, opiniões
        para auxílio diagnóstico e procedimentos terapêuticos e
        <b>TELECONSULTA </b>, realizada entre médico e paciente, sem exame
        presencial, com a possibilidade de prescrição de tratamento, solicitação
        de exames e outros procedimentos, bem como emissão de atestado e
        relatório. Ainda, facultado ao médico decidir sobre atendimento
        presencial em primeira consulta ou por agravamento no quadro clínico. A
        telemedicina é considerada interrompida e a paciente encaminhada ao
        ambulatório ou hospital, dentro da necessidade.
      </p>
      <p class="text-justify" style="width:99%; margin-left:0.5%;">
        <b>DOS PRINCÍPIOS FUNDAMENTAIS:</b><br />
        XIV - O médico empenhar-se-á em melhorar os padrões dos serviços médicos
        e em assumir sua responsabilidade em relação à saúde pública, à educação
        sanitária e à legislação referente à saúde.”
      </p>
      <p class="text-justify" style="width:99%; margin-left:0.5%;">
        <b>Ciente e de acordo</b>
      </p>
      <div class="text-center q-gutter-lg q-items-end">
        <q-btn
          color="primary"
          label="Aceito"
          @click="responderTermoAceite(true)"
        ></q-btn>
        <q-btn
          color="primary"
          label="Recuso"
          @click="responderTermoAceite(false)"
        ></q-btn>
      </div>
    </div>
    <q-dialog v-model="modalTermoAceito">
      <q-card>
        <q-card-section>
          <div class="text-h6 text-center">Alerta</div>
        </q-card-section>
        <q-card-section class="q-pt-none">
          <p class="text-center">
            É obrigatório aceitar o termo de usuário para continuar na
            plataforma.
          </p>
        </q-card-section>
        <q-card-actions align="right">
          <q-btn flat label="OK" color="primary" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </q-page>
</template>

<script>
export default {
  data() {
    return {
      modalTermoAceito: false
    };
  },
  methods: {
    responderTermoAceite(resposta) {
      this.$store
        .dispatch("principal/responderTermoUsuario", resposta)
        .then(() => {
          if (resposta == true) {
            this.$router.push({ name: "consulta_paciente" });
          } else {
            this.modalTermoAceito = true;
          }
        })
        .catch(erro => {
          console.log("Erro", erro);
        });
    }
  }
};
</script>
