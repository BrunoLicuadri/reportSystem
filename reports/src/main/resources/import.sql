INSERT INTO tb_user (name, email, phone, password, birth_date, unit) VALUES ('Portaria1', 'portaria1@gmail.com', '988888888', '$2a$10$5c5V4aBMxGArBzcjVndpMOIPe.2458hQ186I0Q5.VcL5Zoc8l4466', '1995-07-25',null);
INSERT INTO tb_user (name, email, phone, password, birth_date, unit) VALUES ('Portaria2', 'portaria2@gmail.com', '977777777', '$2a$10$JNZAL0iBKhBZ4qNKnmv62etMP6COUduvV5kREkpciwhtko68hUWLu', '1996-08-26',null);
INSERT INTO tb_user (name, email, phone, password, birth_date, unit) VALUES ('Portaria3', 'portaria3@gmail.com', '966666666', '$2a$10$JNZAL0iBKhBZ4qNKnmv62etMP6COUduvV5kREkpciwhtko68hUWLu', '1997-09-27',null);
INSERT INTO tb_user (name, email, phone, password, birth_date, unit) VALUES ('Portaria4', 'portaria4@gmail.com', '955555555', '$2a$10$JNZAL0iBKhBZ4qNKnmv62etMP6COUduvV5kREkpciwhtko68hUWLu', '1998-10-28',null);
INSERT INTO tb_user (name, email, phone, password, birth_date, unit) VALUES ('Sindico', 'sindico@gmail.com', '977777777', '$2a$10$JNZAL0iBKhBZ4qNKnmv62etMP6COUduvV5kREkpciwhtko68hUWLu', '1987-11-13',null);
INSERT INTO tb_user (name, email, phone, password, birth_date, unit) VALUES ('SubSindico', 'subsindico1@gmail.com', '977777777', '$2a$10$JNZAL0iBKhBZ4qNKnmv62etMP6COUduvV5kREkpciwhtko68hUWLu', '1988-12-18',null);
INSERT INTO tb_user (name, email, phone, password, birth_date, unit) VALUES ('Administradora', 'administradora@gmail.com', '977777777', '$2a$10$JNZAL0iBKhBZ4qNKnmv62etMP6COUduvV5kREkpciwhtko68hUWLu', '1960-06-16',null);
INSERT INTO tb_user (name, email, phone, password, birth_date, unit) VALUES ('Biuno', 'biuno@gmail.com', '996578965', '$2a$10$JNZAL0iBKhBZ4qNKnmv62etMP6COUduvV5kREkpciwhtko68hUWLu', '1982-01-13', 101);
INSERT INTO tb_user (name, email, phone, password, birth_date, unit) VALUES ('Bubu', 'bubu@gmail.com', '89654124', '$2a$10$JNZAL0iBKhBZ4qNKnmv62etMP6COUduvV5kREkpciwhtko68hUWLu', '1979-05-23', 202);
INSERT INTO tb_user (name, email, phone, password, birth_date, unit) VALUES ('Joselito', 'joselito@gmail.com', '89654124', '$2a$10$JNZAL0iBKhBZ4qNKnmv62etMP6COUduvV5kREkpciwhtko68hUWLu', '1992-02-19', 303);
INSERT INTO tb_user (name, email, phone, password, birth_date, unit) VALUES ('Zé Lelé', 'zelele@gmail.com', '912354678', '$2a$10$JNZAL0iBKhBZ4qNKnmv62etMP6COUduvV5kREkpciwhtko68hUWLu', '2012-10-31', 404);
INSERT INTO tb_user (name, email, phone, password, birth_date, unit) VALUES ('Tchongo', 'tchongo@gmail.com', '998435716', '$2a$10$JNZAL0iBKhBZ4qNKnmv62etMP6COUduvV5kREkpciwhtko68hUWLu', '2001-01-16', 505);
INSERT INTO tb_user (name, email, phone, password, birth_date, unit) VALUES ('Jedai', 'jedai@gmail.com', '9999657482', '$2a$10$JNZAL0iBKhBZ4qNKnmv62etMP6COUduvV5kREkpciwhtko68hUWLu', '1980-01-30', 606);
INSERT INTO tb_user (name, email, phone, password, birth_date, unit) VALUES ('Ninja', 'ninja@gmail.com', '9886574256', '$2a$10$JNZAL0iBKhBZ4qNKnmv62etMP6COUduvV5kREkpciwhtko68hUWLu', '1990-12-26', 707);
INSERT INTO tb_user (name, email, phone, password, birth_date, unit) VALUES ('tio', 'tio@gmail.com', '9987453214', '$2a$10$JNZAL0iBKhBZ4qNKnmv62etMP6COUduvV5kREkpciwhtko68hUWLu', '1988-09-19', 808);
INSERT INTO tb_user (name, email, phone, password, birth_date, unit) VALUES ('topper', 'topper@gmail.com', '9654784211', '$2a$10$JNZAL0iBKhBZ4qNKnmv62etMP6COUduvV5kREkpciwhtko68hUWLu', '1981-04-22', 909);
INSERT INTO tb_user (name, email, phone, password, birth_date, unit) VALUES ('Pombo Lezo', 'pombolezo@gmail.com', '988765142', '$2a$10$JNZAL0iBKhBZ4qNKnmv62etMP6COUduvV5kREkpciwhtko68hUWLu', '1987-07-20', 1010);

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
INSERT INTO tb_user_role (user_id, role_id) VALUES (8, 3)
INSERT INTO tb_user_role (user_id, role_id) VALUES (9, 3)
INSERT INTO tb_user_role (user_id, role_id) VALUES (10, 3)
INSERT INTO tb_user_role (user_id, role_id) VALUES (11, 3)
INSERT INTO tb_user_role (user_id, role_id) VALUES (12, 3)
INSERT INTO tb_user_role (user_id, role_id) VALUES (13, 3)
INSERT INTO tb_user_role (user_id, role_id) VALUES (14, 3)
INSERT INTO tb_user_role (user_id, role_id) VALUES (15, 3)
INSERT INTO tb_user_role (user_id, role_id) VALUES (16, 3)
INSERT INTO tb_user_role (user_id, role_id) VALUES (17, 3)

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

INSERT INTO tb_complaint (date, time, text, user_id) VALUES ('2022-07-25', '12:23', 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis cupiditate inventore, illum reiciendis molestias fuga voluptas commodi ipsam non aliquam deleniti magnam vel esse eos? Nulla dignissimos cum ab adipisci.', 8);
INSERT INTO tb_complaint (date, time, text, user_id) VALUES ('2022-06-05', '17:15', 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis cupiditate inventore, illum reiciendis molestias fuga voluptas commodi ipsam non aliquam deleniti magnam vel esse eos? Nulla dignissimos cum ab adipisci.', 9);
INSERT INTO tb_complaint (date, time, text, user_id) VALUES ('2022-05-21', '18:30', 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis cupiditate inventore, illum reiciendis molestias fuga voluptas commodi ipsam non aliquam deleniti magnam vel esse eos? Nulla dignissimos cum ab adipisci.', 10);
INSERT INTO tb_complaint (date, time, text, user_id) VALUES ('2022-04-12', '09:40', 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis cupiditate inventore, illum reiciendis molestias fuga voluptas commodi ipsam non aliquam deleniti magnam vel esse eos? Nulla dignissimos cum ab adipisci.', 11);
INSERT INTO tb_complaint (date, time, text, user_id) VALUES ('2022-03-20', '15:48', 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis cupiditate inventore, illum reiciendis molestias.', 12);
INSERT INTO tb_complaint (date, time, text, user_id) VALUES ('2022-02-12', '20:23', 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis cupiditate inventore, illum reiciendis molestias fuga.', 13);
INSERT INTO tb_complaint (date, time, text, user_id) VALUES ('2022-01-30', '22:10', 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.', 14);
INSERT INTO tb_complaint (date, time, text, user_id) VALUES ('2021-12-02', '03:18', 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis cupiditate inventore, illum reiciendis molestias fuga voluptas commodi ipsam non aliquam deleniti magnam vel esse eos? Nulla dignissimos cum ab adipisci.', 15);
INSERT INTO tb_complaint (date, time, text, user_id) VALUES ('2021-11-18', '05:38', 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis cupiditate inventore, illum reiciendis molestias fuga voluptas commodi ipsam non aliquam deleniti magnam vel esse eos? Nulla dignissimos cum ab adipisci.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis cupiditate inventore, illum reiciendis molestias fuga voluptas commodi ipsam non aliquam deleniti magnam vel esse eos? Nulla dignissimos cum ab adipisci.', 16);
INSERT INTO tb_complaint (date, time, text, user_id) VALUES ('2021-10-08', '08:40', 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis cupiditate inventore, illum reiciendis molestias fuga voluptas commodi ipsam non aliquam deleniti magnam vel esse eos? Nulla dignissimos cum ab adipisci.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis cupiditate inventore, illum reiciendis molestias fuga voluptas commodi ipsam non aliquam deleniti magnam vel esse eos? Nulla dignissimos cum ab adipisci.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis cupiditate inventore, illum reiciendis molestias fuga voluptas commodi ipsam non aliquam deleniti magnam vel esse eos? Nulla dignissimos cum ab adipisci.', 17);