INSERT INTO tb_user (name, email, phone, password, birth_date) VALUES ('Portaria1', 'portaria1@gmail.com', '988888888', '123456', '1995-07-25');
INSERT INTO tb_user (name, email, phone, password, birth_date) VALUES ('Portaria2', 'portaria2@gmail.com', '977777777', '123456', '1996-08-26');
INSERT INTO tb_user (name, email, phone, password, birth_date) VALUES ('Portaria3', 'portaria3@gmail.com', '966666666', '123456', '1997-09-27');
INSERT INTO tb_user (name, email, phone, password, birth_date) VALUES ('Portaria4', 'portaria4@gmail.com', '955555555', '123456', '1998-10-28');
INSERT INTO tb_user (name, email, phone, password, birth_date) VALUES ('Sindico', 'sindico@gmail.com', '977777777', '123456', '1987-11-13');
INSERT INTO tb_user (name, email, phone, password, birth_date) VALUES ('SubSindico', 'subsindico1@gmail.com', '977777777', '123456', '1988-12-18');
INSERT INTO tb_user (name, email, phone, password, birth_date) VALUES ('Administradora', 'administradora@gmail.com', '977777777', '123456', '1960-06-16');


INSERT INTO tb_report (moment, text, user_id) VALUES (TIMESTAMP WITH TIME ZONE '2022-07-25T05:00:00Z', 'Queda de energia das 05:00 as 06:22', 1);
INSERT INTO tb_report (moment, text, user_id) VALUES (TIMESTAMP WITH TIME ZONE '2022-07-29T15:15:00Z', 'Morador 1818 retirou sua encomenda', 2);
INSERT INTO tb_report (moment, text, user_id) VALUES (TIMESTAMP WITH TIME ZONE '2022-08-03T18:22:00Z', 'Briga de casal e Polícia acionado. Sindicos cientes.', 3);
INSERT INTO tb_report (moment, text, user_id) VALUES (TIMESTAMP WITH TIME ZONE '2022-08-03T21:22:00Z', 'Elevador parado. BTA acionado e aguardando retorno.', 4);