module.exports = function hbvPatientToPegasiMapper(hbvPatient)
{
    return {
        nombre: hbvPatient.nombre_completo,
        dni: hbvPatient.cedula,
        fechaNacimiento: hbvPatient.nacimiento,
        fechaFachecimiento: hbvPatient.fallecido,
        cidudadNacimiento: hbvPatient.ciudad_nacido,
        fallecido: hbvPatient.fallecido ? true : false,
        direccion: hbvPatient.direccion_actual,
        email: hbvPatient.correoActual,
        casado: undefined
    };
};