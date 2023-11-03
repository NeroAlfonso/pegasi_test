Requerimientos: (Historia de usuario)


La plataforma Pegasi cuenta con un sistema de agendamiento, el cual está constituido con el siguiente modelo de datos: (payload de agendamiento)


{

   paciente: {

     nombre: { type: String },

     dni: { type: String },

     fechaNacimiento: { type: String },

     fechaFachecimiento: { type: String },

     cidudadNacimiento: { type: String },

     fallecido: { type: Boolean},

     direccion: { type: String },

     email: { type: String },

     casado: { type: Boolean },

   },

   fechaRegistro: { type: Date },

   fechaInicio: { type: Number },

   fechaFinal: { type: Number }

 }



Debido a una carencia de información de los datos del paciente, se debe consumir los datos de dos sistemas de terceros, los cuales cuentan con los siguientes modelos de datos:


Hospital Buen Vivir:


{

   _id: { type: String },

   nombre_completo: { type: String },

   cedula: { type: String },

   nacimiento: { type: String },

   fallecido: { type: String },

   ciudad_nacido: { type: String },

   direccion_actual: { type: String },

   correoActual: { type: String },

   a_t: { type: Date },

   UT: { type: Date },

 }


System technologies:


{

   _id: { type: String },

   name: { type: String },

   identifier: { type: String },

   birthDate: { type: String },

   deceasedBirth: { type: String },

   birthCity: { type: String },

   isDeceased: { type: Boolean},

   address: { type: String },

   email: { type: String },

   married: { type: Boolean },

   createdAt: { type: Date },

   updateAt: { type: Date },

 }


En ambos casos se cuenta con la información del paciente. Esta debe homologarse al sistema de agendamiento de Pegasi para poder mostrarla en la plataforma.


Especificaciones:

Como usuario quiero contar con un sistema de agendamiento y simular dos sistemas de terceros.


API de Agenda:

Generar los endpoints necesarios, así como mock data.


GET: Lista de citas agendadas. Debo poder filtrarlas por fecha de creación de la cita y DNI del paciente.

POST: Creación de citas. (ver imagen payload de agendamiento) Debo poder validar previo a la creación de una cita que en el sistema de terceros la información del paciente exista. Debe consultarse por medio de un parámetro dentro del body llamado externalResource que hace referencia a que API de terceros debe ir a buscar la información, cuyos valores pueden ser HBV o ST (acrónimos de los hospitales). De no estar presente este parámetro dentro del body, no se busca la información. Cuando la información del sistema de terceros se obtenga, se debe homologar con el modelo de datos PEGASI.

PATCH: No aplica.

DELETE: No aplica.

	


API de terceros:

Las APIs de terceros solo deben contar con un solo endpoint GET dónde sirva el listado de sus pacientes, además de un queryParam que me permita encontrar a un paciente en específico.

El diseño de las APIs así como la creación de los endpoints queda a criterio del programador.


Criterios de Aceptación:

Manejo de errores, excepciones y validar los payloads de entrada, esto a través de middlewares o arquitectura de su preferencia.

Arquitectura de diseño en capas, orientación a microservicios.

Debe cumplir con las especificaciones REST.

Persistencia de datos.

Debe realizar la práctica utilizando la estrategia de branching de su preferencia. 

Debe generar evidencia del uso de commits.


Deseable:

Micros con su respectivo archivo Dockerfile.

Manejo de buenas prácticas con Lint.

Archivos de testing.

