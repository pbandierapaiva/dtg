CREATE TABLE usuario
(
  id_usuario INT NOT NULL AUTO_INCREMENT,
  nome VARCHAR(250) NOT NULL,
  senha VARCHAR(100) NOT NULL,
  tipo ENUM('paciente','médico','coordenador') NOT NULL,
  ativo INT NOT NULL DEFAULT 1,
  cep VARCHAR(8),
  uf_resid VARCHAR(2),
  cidade VARCHAR(28),
  num_resid VARCHAR(7),
  complemento VARCHAR(250),
  login VARCHAR(50) NOT NULL,
  logradouro VARCHAR(250),
  bairro VARCHAR(100),
  cpf VARCHAR(11),
  dt_nasc DATE,
  PRIMARY KEY (id_usuario),
  UNIQUE (login)
);


CREATE TABLE instituicao
(
  id_inst INT NOT NULL AUTO_INCREMENT,
  nome_inst VARCHAR(250) NOT NULL,
  cidade_inst VARCHAR(28),
  bairro_inst VARCHAR(100),
  logradouro_inst VARCHAR(250),
  num_inst VARCHAR(7),
  complemento_inst VARCHAR(250),
  cep_inst VARCHAR(8),
  ativo INT NOT NULL DEFAULT 1,
  uf_inst VARCHAR(2),
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

CREATE TABLE resultado_ap
(
  id_resultado_ap INT NOT NULL AUTO_INCREMENT,
  descricao VARCHAR(250) NOT NULL,
  PRIMARY KEY (id_resultado_ap)
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
  crm VARCHAR(15) ,
  uf_crm VARCHAR(2),
  categoria ENUM('acadêmico','residente','contratado','pós-graduando','docente','outros'),
  aceite INT DEFAULT 0,
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
  cor ENUM('branca','preta','amarela','parda','indígena','sem declaração'),
  tipo_sanguineo ENUM('O','A','B','AB'),
  rh_tipo_sanguineo ENUM('+','-'),
  tel_proprio BIGINT,
  tel_contato BIGINT,
  nome_contato VARCHAR(50),
  reacoes_alergicas VARCHAR(250),
  estado_civil ENUM('casada', 'divorciada', 'viúva', 'solteira','em união estável', 'não desejo declarar'),
  nome_mae VARCHAR(250),
  escolaridade ENUM('não informado', 'sem instrução/fundamental incompleto', 'fundamental completo/médio incompleto', 'médio completo/superior incompleto', 'superior completo/pós-graduação incompleto', 'pós-graduação completo'),
  email VARCHAR(50),
  rne VARCHAR(8),
  rg VARCHAR(10),
  nacionalidade VARCHAR(25),
  aceite INT DEFAULT 0,
  id_paciente INT NOT NULL,
  id_indicacao INT,
  preceptor INT,
  id_inst INT NOT NULL,
  PRIMARY KEY (id_paciente),
  FOREIGN KEY (id_paciente) REFERENCES usuario(id_usuario),
  FOREIGN KEY (id_indicacao) REFERENCES indicacao(id_indicacao),
  FOREIGN KEY (preceptor) REFERENCES med_coord(id_med_coord),
  FOREIGN KEY (id_inst) REFERENCES instituicao(id_inst)
);

CREATE TABLE registro_mola
(
  id_r_mola INT NOT NULL AUTO_INCREMENT,
  idade INT,
  peso NUMERIC(5,2),
  altura NUMERIC(3,2),
  imc NUMERIC(4,2),
  n_partos INT DEFAULT 0,
  mola_prev INT DEFAULT 0,
  abortos INT DEFAULT 0,
  ecto INT DEFAULT 0,
  dum_data DATE,
  dum_conhecido INT DEFAULT 0,
  dum_consulta DATE,
  data_esvaz1 DATE,
  ig_esvaz1 INT,
  tipo_esvaz1 ENUM('aspiração eletrica', 'AMIU', 'curetagem', 'HTA com mola'),
  local_esvaz1 ENUM('HSP', 'outros'),
  hosp_esvaz1 VARCHAR(250),
  nat_hosp_esvaz1 ENUM('público', 'particular'),
  data_esvaz2 DATE,
  interv_esvaz INT,
  ntg INT DEFAULT 0,
  beta INT DEFAULT 0,
  us ENUM('não tem', 'típico de MH', 'alterações hidrópicas sugestivas de mola SEM embrião', 'alterações hidrópicas sugestivas de mola COM embrião', 'gestação não evolutiva SEM embrião', 'gestação não evolutiva COM embrião', 'imagem de restos ovulares', 'gemelar feto normal + mola'),
  sangramento INT  DEFAULT 0,
  hb INT  DEFAULT 0,
  pressao_alta INT  DEFAULT 0,
  tsh_disp INT  DEFAULT 0,
  tsh_valor NUMERIC(3,1),
  cistos INT  DEFAULT 0,
  utero_ig INT  DEFAULT 0,
  raiox INT  DEFAULT 0,
  entada_servico ENUM('esvaziamento no HSP', 'para acompanhamento pós-esvaziamento', 'com suspeita ou diagnóstico de NTG', 'após tratamento de NTG'),
  data_ult DATE ,
  term_caso ENUM('evasão (abandono do serviço com hCG positivo)', 'molar completo', 'molar incompleto', 'NTG completo', 'NTG incompleto'),
  dum_esvaz1 DATE ,
  id_paciente INT NOT NULL,
  id_mac_antes INT,
  id_mac_apos INT,
  revisor INT,
  pessoa_ult INT,
  PRIMARY KEY (id_r_mola),
  FOREIGN KEY (id_paciente) REFERENCES paciente(id_paciente),
  FOREIGN KEY (id_mac_antes) REFERENCES mac(id_mac),
  FOREIGN KEY (id_mac_apos) REFERENCES mac(id_mac),
  FOREIGN KEY (revisor) REFERENCES med_coord(id_med_coord),
  FOREIGN KEY (pessoa_ult) REFERENCES med_coord(id_med_coord)
);

CREATE TABLE anatomia_patologica
(
  id_ap INT NOT NULL AUTO_INCREMENT,
  ap_proprio INT DEFAULT 0,
  ap_data DATE,
  id_r_mola INT NOT NULL,
  id_resultado_ap INT NOT NULL,
  PRIMARY KEY (id_ap),
  FOREIGN KEY (id_r_mola) REFERENCES registro_mola(id_r_mola),
  FOREIGN KEY (id_resultado_ap) REFERENCES resultado_ap(id_resultado_ap)
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
  grau_estad ENUM('I', 'II', 'III', 'IV'),
  nivel_estad INT,
  result_hcg_pre INT,
  id_r_mola INT NOT NULL,
  PRIMARY KEY (id_quimio),
  FOREIGN KEY (id_r_mola) REFERENCES registro_mola(id_r_mola)
);

CREATE TABLE imagens
(
  id_imagem INT NOT NULL AUTO_INCREMENT,
  tp_exam ENUM('rx','ultrassom','tomografia','hcg') NOT NULL,
  url_img VARCHAR(250) NOT NULL,
  data_upload DATE NOT NULL,
  id_r_mola INT NOT NULL,
  PRIMARY KEY (id_imagem),
  FOREIGN KEY (id_r_mola) REFERENCES registro_mola(id_r_mola)
);

CREATE TABLE raiox
(
  id_raiox INT NOT NULL AUTO_INCREMENT,
  data_raiox DATE,
  id_r_mola INT NOT NULL,
  id_imagem INT NOT NULL,
  cadastrante INT NOT NULL,
  revisor INT,
  PRIMARY KEY (id_raiox),
  FOREIGN KEY (id_r_mola) REFERENCES registro_mola(id_r_mola),
  FOREIGN KEY (id_imagem) REFERENCES imagens(id_imagem),
  FOREIGN KEY (cadastrante) REFERENCES usuario(id_usuario),
  FOREIGN KEY (revisor) REFERENCES med_coord(id_med_coord)
);

CREATE TABLE ultrassom
(
  id_ultrassom INT NOT NULL AUTO_INCREMENT,
  data_ultrassom DATE NOT NULL,
  id_r_mola INT NOT NULL,
  ultrassom INT,
  laudo_ultrassom INT,
  cadastrante INT NOT NULL,
  revisor INT,
  PRIMARY KEY (id_ultrassom),
  FOREIGN KEY (id_r_mola) REFERENCES registro_mola(id_r_mola),
  FOREIGN KEY (ultrassom) REFERENCES imagens(id_imagem),
  FOREIGN KEY (laudo_ultrassom) REFERENCES imagens(id_imagem),
  FOREIGN KEY (cadastrante) REFERENCES usuario(id_usuario),
  FOREIGN KEY (revisor) REFERENCES med_coord(id_med_coord)
);

CREATE TABLE tomografia
(
  id_tomografia INT NOT NULL AUTO_INCREMENT,
  data_tomografia DATE NOT NULL,
  id_r_mola INT NOT NULL,
  tomografia INT,
  laudo_tomografia INT,
  cadastrante INT NOT NULL,
  revisor INT,
  PRIMARY KEY (id_tomografia),
  FOREIGN KEY (id_r_mola) REFERENCES registro_mola(id_r_mola),
  FOREIGN KEY (tomografia) REFERENCES imagens(id_imagem),
  FOREIGN KEY (laudo_tomografia) REFERENCES imagens(id_imagem),
  FOREIGN KEY (cadastrante) REFERENCES usuario(id_usuario),
  FOREIGN KEY (revisor) REFERENCES med_coord(id_med_coord)
);

CREATE TABLE delegacao
(
  id_deleg INT NOT NULL AUTO_INCREMENT,
  ativo INT NOT NULL  DEFAULT 1,
  id_paciente INT NOT NULL,
  id_med_coord INT NOT NULL,
  PRIMARY KEY (id_deleg),
  FOREIGN KEY (id_paciente) REFERENCES paciente(id_paciente),
  FOREIGN KEY (id_med_coord) REFERENCES med_coord(id_med_coord)
);

CREATE TABLE calendario_dum
(
  id_calend_dum INT NOT NULL AUTO_INCREMENT,
  dum DATE NOT NULL,
  id_r_mola INT NOT NULL,
  cadastrante INT NOT NULL,
  revisor INT NOT NULL,
  PRIMARY KEY (id_calend_dum),
  FOREIGN KEY (id_r_mola) REFERENCES registro_mola(id_r_mola),
  FOREIGN KEY (cadastrante) REFERENCES med_coord(id_med_coord),
  FOREIGN KEY (revisor) REFERENCES med_coord(id_med_coord)
);

CREATE TABLE hcg
(
  id_hcg INT NOT NULL AUTO_INCREMENT,
  data_hcg DATE,
  result_hcg INT,
  lab_hcg VARCHAR(100),
  revisor INT,
  id_r_mola INT NOT NULL,
  id_imagem INT,
  cadastrante INT NOT NULL,
  PRIMARY KEY (id_hcg),
  FOREIGN KEY (revisor) REFERENCES med_coord(id_med_coord),
  FOREIGN KEY (id_r_mola) REFERENCES registro_mola(id_r_mola),
  FOREIGN KEY (id_imagem) REFERENCES imagens(id_imagem),
  FOREIGN KEY (cadastrante) REFERENCES usuario(id_usuario)
);

INSERT INTO dtg.indicacao (descricao)
VALUES
('encaminhada por médico'),
('regulação'),
('facebook');

INSERT INTO dtg.instituicao
( nome_inst,
  cidade_inst,
  bairro_inst,
  logradouro_inst,
  num_inst,
  complemento_inst,
  cep_inst,
  uf_inst)
VALUES
('huhsp',
'são paulo',
'vila clementino',
'rua napoleão de barros',
'715',
'',
'04024002',
'SP');

INSERT INTO dtg.resultado_ap
(descricao)
VALUES('Não tem'),
('MHC'), 
('MHP'), 
('MH'), 
('Abortamento não molar'),
('Gemelar MHC + Feto normal'),
('Tumor trofoblástico de sítio placentário'),
('Tumor trofoblástico epitelióide'),
('Mola Invasora'),
('MI diagnosticada por HTA'),
('CORIO diagnosticada por HTA'),
('CORIOCA por CTG/Histeroscopia'),
('OUTROS por CTG/Histeroscopia');
 
INSERT INTO dtg.mac
(descricao)
VALUES('Nenhum'),
('ACHO'),
('Injetável trimestral'),
('Injetável mensal'),
('Condom');


create or replace
view responsaveis as
select
    p.id_paciente as id_paciente,
    p.preceptor as id_med_coord
from
    dtg.paciente p
union
select
    d.id_paciente as id_paciente,
    d.id_med_coord as id_med_coord
from
    dtg.delegacao d
union
select
    p2.id_paciente as id_paciente,
    u.id_usuario as id_med_coord
from
    dtg.paciente p2, dtg.usuario u
where
    u.tipo = 'coordenador';