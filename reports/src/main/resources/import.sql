INSERT INTO tb_user (name, email, phone, password, birth_date) VALUES ('Portaria1', 'portaria1@gmail.com', '988888888', '$2a$10$5c5V4aBMxGArBzcjVndpMOIPe.2458hQ186I0Q5.VcL5Zoc8l4466', '1995-07-25');
INSERT INTO tb_user (name, email, phone, password, birth_date) VALUES ('Portaria2', 'portaria2@gmail.com', '977777777', '$2a$10$JNZAL0iBKhBZ4qNKnmv62etMP6COUduvV5kREkpciwhtko68hUWLu', '1996-08-26');
INSERT INTO tb_user (name, email, phone, password, birth_date) VALUES ('Portaria3', 'portaria3@gmail.com', '966666666', '$2a$10$JNZAL0iBKhBZ4qNKnmv62etMP6COUduvV5kREkpciwhtko68hUWLu', '1997-09-27');
INSERT INTO tb_user (name, email, phone, password, birth_date) VALUES ('Portaria4', 'portaria4@gmail.com', '955555555', '$2a$10$JNZAL0iBKhBZ4qNKnmv62etMP6COUduvV5kREkpciwhtko68hUWLu', '1998-10-28');
INSERT INTO tb_user (name, email, phone, password, birth_date) VALUES ('Sindico', 'sindico@gmail.com', '977777777', '$2a$10$JNZAL0iBKhBZ4qNKnmv62etMP6COUduvV5kREkpciwhtko68hUWLu', '1987-11-13');
INSERT INTO tb_user (name, email, phone, password, birth_date) VALUES ('SubSindico', 'subsindico1@gmail.com', '977777777', '$2a$10$JNZAL0iBKhBZ4qNKnmv62etMP6COUduvV5kREkpciwhtko68hUWLu', '1988-12-18');
INSERT INTO tb_user (name, email, phone, password, birth_date) VALUES ('Administradora', 'administradora@gmail.com', '977777777', '$2a$10$JNZAL0iBKhBZ4qNKnmv62etMP6COUduvV5kREkpciwhtko68hUWLu', '1960-06-16');

INSERT INTO tb_role (authority) VALUES ('ROLE_ADMIN')
INSERT INTO tb_role (authority) VALUES ('ROLE_USER')
INSERT INTO tb_role (authority) VALUES ('ROLE_VISITOR')

INSERT INTO tb_user_role (user_id, role_id) VALUES (1, 2)
INSERT INTO tb_user_role (user_id, role_id) VALUES (2, 2)
INSERT INTO tb_user_role (user_id, role_id) VALUES (3, 2)
INSERT INTO tb_user_role (user_id, role_id) VALUES (4, 2)
INSERT INTO tb_user_role (user_id, role_id) VALUES (5, 1)
INSERT INTO tb_user_role (user_id, role_id) VALUES (6, 1)
INSERT INTO tb_user_role (user_id, role_id) VALUES (7, 3)

INSERT INTO tb_report (date, time, text, user_id) VALUES ('2022-07-25', '05:00', 'Queda de energia das 05:00 as 06:22', 1);
INSERT INTO tb_report (date, time, text, user_id) VALUES ('2022-07-29', '15:15', 'Morador 1818 retirou sua encomenda', 2);
INSERT INTO tb_report (date, time, text, user_id) VALUES ('2022-08-03', '18:22', 'Briga de casal e Polícia acionado. Sindicos cientes.', 3);
INSERT INTO tb_report (date, time, text, user_id) VALUES ('2022-08-03', '21:22', 'Elevador parado. BTA acionado e aguardando retorno.', 4);
INSERT INTO tb_report (date, time, text, user_id) VALUES ('2022-08-04', '07:00', 'Morador X reportou vazamento de água', 1);
INSERT INTO tb_report (date, time, text, user_id) VALUES ('2022-08-04', '15:15', 'Morador reclamou das esteiras da academia quebrada', 1);
INSERT INTO tb_report (date, time, text, user_id) VALUES ('2022-08-04', '19:22', 'Lampadas queimadas aqui e acolá', 2);
INSERT INTO tb_report (date, time, text, user_id) VALUES ('2022-08-04', '21:22', 'Novo hóspede para o 403', 2);
INSERT INTO tb_report (date, time, text, user_id) VALUES ('2022-08-05', '08:00', 'Piscineiro interditou a piscina atá amanhã', 3);
INSERT INTO tb_report (date, time, text, user_id) VALUES ('2022-08-05', '16:25', 'Cistena e gerador verificados e tudo ok.', 3);
INSERT INTO tb_report (date, time, text, user_id) VALUES ('2022-08-05', '20:42', 'Moradores informaram a troca de carro para HB20 Prata', 4);
INSERT INTO tb_report (date, time, text, user_id) VALUES ('2022-08-05', '23:22', 'Moradores utilizaram da churrasqueira e não limparam', 4);