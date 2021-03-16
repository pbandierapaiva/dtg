CREATE TABLE usuario
(
  id_usuario INT NOT NULL AUTO_INCREMENT,
  nome VARCHAR(250) NOT NULL,
  senha VARCHAR(100) NOT NULL,
  tipo ENUM('Paciente','Médico','Coordenador') NOT NULL,
  ativo INT NOT NULL,
  cep VARCHAR(8),
  uf_resid VARCHAR(2),
  cidade VARCHAR(28),
  num_resid VARCHAR(7),
  complemento VARCHAR(250),
  login VARCHAR(50) NOT NULL,
  logradouro VARCHAR(250),
  bairro VARCHAR(100),
  cpf VARCHAR(11) NOT NULL,
  dt_nasc DATE NOT NULL,
  PRIMARY KEY (id_usuario)
);

CREATE TABLE instituicao
(
  id_inst INT NOT NULL AUTO_INCREMENT,
  nome_inst VARCHAR(250) NOT NULL,
  PRIMARY KEY (id_inst)
);

CREATE TABLE indicacao
(
  id_indicacao INT NOT NULL AUTO_INCREMENT,
  descricao VARCHAR(250) NOT NULL,
  PRIMARY KEY (id_indicacao)
);

CREATE TABLE mac
(
  id_mac INT NOT NULL AUTO_INCREMENT,
  descricao VARCHAR(250) NOT NULL,
  PRIMARY KEY (id_mac)
);

CREATE TABLE histo_ntg
(
  id_histo_ntg INT NOT NULL AUTO_INCREMENT,
  descricao VARCHAR(250) NOT NULL,
  PRIMARY KEY (id_histo_ntg)
);

CREATE TABLE mensagens
(
  id_msg INT NOT NULL AUTO_INCREMENT,
  msg VARCHAR(250) NOT NULL,
  data DATE NOT NULL,
  remetente INT NOT NULL,
  destinatario INT NOT NULL,
  PRIMARY KEY (id_msg),
  FOREIGN KEY (remetente) REFERENCES usuario(id_usuario),
  FOREIGN KEY (destinatario) REFERENCES usuario(id_usuario)
);

CREATE TABLE med_coord
(
  crm VARCHAR(15),
  uf_crm VARCHAR(2),
  categoria ENUM('Acadêmico','Residente','Contratado','Pós-Graduando','Docente','Outros'),
  id_med_coord INT NOT NULL,
  id_inst INT,
  PRIMARY KEY (id_med_coord),
  FOREIGN KEY (id_med_coord) REFERENCES usuario(id_usuario),
  FOREIGN KEY (id_inst) REFERENCES instituicao(id_inst)
);

CREATE TABLE paciente
(
  sus VARCHAR(15),
  rh VARCHAR(10),
  cor ENUM('Branca','Preta','Amarela','Parda','Indígena','sem Declaração'),
  id_paciente INT NOT NULL,
  id_indicacao INT,
  preceptor INT,
  PRIMARY KEY (id_paciente),
  FOREIGN KEY (id_paciente) REFERENCES usuario(id_usuario),
  FOREIGN KEY (id_indicacao) REFERENCES indicacao(id_indicacao),
  FOREIGN KEY (preceptor) REFERENCES med_coord(id_med_coord)
);

CREATE TABLE registro_mola
(
  id_r_mola INT NOT NULL AUTO_INCREMENT,
  idade INT,
  escolaridade ENUM('não informado', 'sem instrução/fundamental incompleto', ' fundamental completo/médio incompleto', 'médio completo/superior incompleto', 'superior completo/Pós-graduação incompleto', 'Pós-graduação completo'),
  peso NUMERIC(5,2),
  altura NUMERIC(3,2),
  imc NUMERIC(4,2),
  n_partos INT,
  mola_prev INT,
  abortos INT,
  ecto INT,
  dum_data DATE,
  dum_conhecido INT,
  dum_consulta DATE,
  data_esvaz1 DATE,
  ig_esvaz1 INT,
  estado_civil ENUM('casada', 'divorciada', 'Viúva', 'Solteira','Em união estável', 'Não desejo declarar'),
  tipo_esvaz1 ENUM('aspiração eletrica', 'AMIU', 'curetagem', 'HTA com mola'),
  local_esvaz1 ENUM('HSP', 'outros'),
  hosp_esvaz1 VARCHAR(250),
  nat_hosp_esvaz1 ENUM('Público', 'Particular'),
  esvaz2 INT,
  data_esvaz2 DATE,
  interv_esvaz INT,
  ntg INT,
  beta INT,
  us ENUM('não tem', 'típico de MH', 'Alterações hidrópicas sugestivas de mola SEM embrião', 'alterações hidrópicas sugestivas de mola COM embrião', 'gestação não evolutivaSEM embrião', 'gestação não evolutiva COM embrião', 'imagem de restos ovulares', 'gemelar feto normal + mola'),
  sangramento INT,
  hb INT,
  pressao_alta INT,
  tsh_disp INT,
  tsh_valor INT,
  cistos INT,
  utero_ig INT,
  raiox INT,
  entada_servico ENUM('esvaziamento no HSP', 'para acompanhamento pós-esvaziamento', 'com suspeita ou diagnóstico de NTG', 'após tratamento de NTG'),
  id_paciente INT NOT NULL,
  id_mac_antes INT,
  id_mac_apos INT,
  revisor INT,
  med_atend INT,
  PRIMARY KEY (id_r_mola),
  FOREIGN KEY (id_paciente) REFERENCES paciente(id_paciente),
  FOREIGN KEY (id_mac_antes) REFERENCES mac(id_mac),
  FOREIGN KEY (id_mac_apos) REFERENCES mac(id_mac),
  FOREIGN KEY (revisor) REFERENCES med_coord(id_med_coord),
  FOREIGN KEY (med_atend) REFERENCES med_coord(id_med_coord)
);

CREATE TABLE consulta_mola
(
  id_consulta INT NOT NULL AUTO_INCREMENT,
  quimio INT,
  hcg_pre_esvaz INT,
  data_pre_esvaz DATE,
  result_hcg_pre INT,
  obs_cons_mola VARCHAR(250),
  term_caso ENUM('Evasão (abandono do serviço com hCG positivo)', 'Molar completo', 'Molar incompleto', 'NTG Completo', 'NTG Incompleto'),
  grau_estad ENUM('I', 'II', 'III', 'IV'),
  nivel_estad INT,
  med_atend INT,
  id_histo_ntg INT,
  revisor INT,
  id_r_mola INT,
  PRIMARY KEY (id_consulta),
  FOREIGN KEY (med_atend) REFERENCES med_coord(id_med_coord),
  FOREIGN KEY (id_histo_ntg) REFERENCES histo_ntg(id_histo_ntg),
  FOREIGN KEY (revisor) REFERENCES med_coord(id_med_coord),
  FOREIGN KEY (id_r_mola) REFERENCES registro_mola(id_r_mola)
);

CREATE TABLE anatomia_patologica
(
  id_ap INT NOT NULL AUTO_INCREMENT,
  ap ENUM('MHC',' MHP','MH','abortamento não molar','Gemelar MHC + Feto normal','tumor trofoblástico de sítio placentário','tumor trofoblásticoepitelióide','outros'),
  ap_proprio INT,
  ap_data DATE,
  id_r_mola INT NOT NULL,
  PRIMARY KEY (id_ap),
  FOREIGN KEY (id_r_mola) REFERENCES registro_mola(id_r_mola)
);

CREATE TABLE quimioterapia
(
  id_quimio INT NOT NULL AUTO_INCREMENT,
  ciclo INT NOT NULL,
  inicio DATE,
  fim DATE,
  droga VARCHAR(250),
  toxicidade VARCHAR(250),
  obs VARCHAR(250),
  id_r_mola INT NOT NULL,
  PRIMARY KEY (id_quimio),
  FOREIGN KEY (id_r_mola) REFERENCES registro_mola(id_r_mola)
);

CREATE TABLE imagens
(
  id_imagem INT NOT NULL AUTO_INCREMENT,
  tp_exam ENUM('RX','Ultrassom','Tomografia','HCG') NOT NULL,
  url_img VARCHAR(250) NOT NULL,
  id_r_mola INT NOT NULL,
  PRIMARY KEY (id_imagem),
  FOREIGN KEY (id_r_mola) REFERENCES registro_mola(id_r_mola)
);

CREATE TABLE hcg
(
  id_hcg INT NOT NULL AUTO_INCREMENT,
  data_hcg DATE NOT NULL,
  result_hcg INT NOT NULL,
  lab_hcg VARCHAR(100) NOT NULL,
  rev INT,
  revisor INT NOT NULL,
  id_r_mola INT NOT NULL,
  id_imagem INT,
  PRIMARY KEY (id_hcg),
  FOREIGN KEY (revisor) REFERENCES med_coord(id_med_coord),
  FOREIGN KEY (id_r_mola) REFERENCES registro_mola(id_r_mola),
  FOREIGN KEY (id_imagem) REFERENCES imagens(id_imagem)
);

INSERT INTO dtg.indicacao (descricao)
VALUES
('encaminhada por médico'),
('regulação'),
('Facebook');

INSERT INTO dtg.instituicao
(nome_inst)
VALUES('HSP');

INSERT INTO dtg.histo_ntg
(descricao)
VALUES('não tem'),
('MI diagnosticada por HTA'),
('CORIO diagnosticada por HTA'),
('CORIOCA por CTG/Histeroscopia'),
('OUTROS por CTG/Histeroscopia');

INSERT INTO dtg.mac
(descricao)
VALUES('nenhum'),
('ACHO'),
('Injetável trimestral'),
('Injetável mensal'),
('condom'),
('outros');



