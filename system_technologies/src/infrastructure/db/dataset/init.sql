CREATE TABLE patiens (
   "_id" varchar primary key,
   "name" varchar(255) not null,
   "identifier" numeric not null unique,
   "birthDate" date not null,
   "isDeceased" boolean default false,
   "birthCity" varchar not null,
   "address" varchar not null,
   "email" varchar not null,
   "createdAt" date not null,
   "updateAt" date not null,
   "deceasedBirth" date not null,
   "married" boolean default false,
   constraint ck_email 
	check("email" ~ '^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+[.][A-Za-z]+$')
);
COPY patiens
FROM '/docker-entrypoint-initdb.d/patiens.csv'
DELIMITER ','
CSV HEADER;