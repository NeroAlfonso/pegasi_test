const UCase =require("../../bases/ucase");
const stPatientToPegasiMapper =require('../../../utils/st_patient_to_pegasi_mapper');
const hbvPatientToPegasiMapper =require('../../../utils/hbv_patient_to_pegasi_mapper');
const GeneralError = require("../../../general/general_error");
module.exports = class CreateAppointmentsUcase extends UCase
{
    constructor(appointmentRepository)
    {
        super();
        this.appointmentRepository =appointmentRepository;
    }
    async apply(dni, fechaInicio, fechaFinal, externalResource)
    {
        let responseRemoteData;
        let patientMapped;
        if(externalResource =='ST')
        {
            responseRemoteData = await this.appointmentRepository.getPatientFromSystemTechnologies(dni);
            if(responseRemoteData ==undefined) throw new GeneralError('Paciente no encontrado', 404);
            patientMapped =stPatientToPegasiMapper(responseRemoteData);
        }
        else
        {//Hospital buen vivir
            responseRemoteData = await this.appointmentRepository.getPatientFromHospitalBuenVivir(dni);
            if(responseRemoteData ==undefined) throw new GeneralError('Paciente no encontrado', 404);
            patientMapped =hbvPatientToPegasiMapper(responseRemoteData);
        }
        const body ={
            paciente: patientMapped,
            fechaRegistro: new Date(),
            fechaInicio: new Date(fechaInicio),
            fechaFinal: new Date(fechaFinal)
        };
        return this.appointmentRepository.createAppointment(body);
    }
}