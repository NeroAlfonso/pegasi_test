module.exports = function stPatientToPegasiMapper(stPatient)
{
    return {
        nombre: stPatient.name,
        dni: stPatient.identifier,
        fechaNacimiento: stPatient.birthDate,
        fechaFachecimiento: stPatient.deceasedBirth,
        cidudadNacimiento: stPatient.birthDate,
        fallecido: stPatient.isDeceased,
        direccion: stPatient.address,
        email: stPatient.email,
        casado: stPatient.married
    };
};