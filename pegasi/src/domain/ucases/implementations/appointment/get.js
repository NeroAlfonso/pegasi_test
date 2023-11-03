const UCase =require("../../bases/ucase");
module.exports = class GetAppointmentsUcase extends UCase
{
    constructor(appointmentRepository)
    {
        super();
        this.appointmentRepository =appointmentRepository;
    }
    async apply(patientId, createdAppointment)
    {
        return this.appointmentRepository.getAppointments(patientId, createdAppointment);
    }
}