CREATE TABLE patiens (
   "_id" varchar primary key,
   "nombre_completo" varchar(255) not null,
   "cedula" numeric not null unique,
   "nacimiento" date not null,
   "fallecido" boolean default false,
   "ciudad_nacido" varchar not null,
   "direccion_actual" varchar not null,
   "correoActual" varchar not null,
   "a_t" date not null,
   "UT" date not null,
   constraint ck_email 
	check("correoActual" ~ '^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+[.][A-Za-z]+$')
);
COPY patiens
FROM '/docker-entrypoint-initdb.d/patiens.csv'
DELIMITER ','
CSV HEADER;