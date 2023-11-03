db = db.getSiblingDB('pegasi_db');
db.createCollection('appointments');
const fechaRegistro = new Date('2023-10-01');
const fechaInicio =Math.floor(new Date('2023-10-02 08:30:00').getTime() / 1000);
const fechaFinal =Math.floor(new Date('2023-10-02 09:30:00').getTime() / 1000);
db.appointments.insertMany([
    {
        paciente: {
        nombre: 'Juan Jose',
        dni: '12345678',
        fechaNacimiento:'2000-01-01',
        fechaFachecimiento:'2023-01-01',
        ciudadNacimiento: 'City A',
        fallecido: true,
        direccion: 'Calle 123 City A Mexico',
        email: 'juanjose@mail.com',
        casado: true,
      },
      fechaRegistro: fechaRegistro,
      fechaInicio: fechaInicio,
      fechaFinal: fechaFinal
    },
    {
        paciente: {
        nombre: 'Maria Jose',
        dni: '12345679',
        fechaNacimiento:'2000-01-01',
        fechaFachecimiento:'2023-01-01',
        ciudadNacimiento: 'City A',
        fallecido: true,
        direccion: 'Calle 123 City A Mexico',
        email: 'juanjose@mail.com',
        casado: true,
      },
      fechaRegistro: fechaRegistro,
      fechaInicio: fechaInicio,
      fechaFinal: fechaFinal
    },
    {
        paciente: {
        nombre: 'Elena Torrealba',
        dni: '12345610',
        fechaNacimiento:'2000-01-01',
        fechaFachecimiento:'2023-01-01',
        ciudadNacimiento: 'City A',
        fallecido: true,
        direccion: 'Calle 123 City A Mexico',
        email: 'juanjose@mail.com',
        casado: true,
      },
      fechaRegistro: fechaRegistro,
      fechaInicio: fechaInicio,
      fechaFinal: fechaFinal
    },
]);