const AppointmentRepository =require('../bases/appointment_repository');
module.exports =class AppointmentRepositoryImp extends AppointmentRepository
{
    constructor(appointmentDataSource, hBuenVivirDataSource, sTechnologiesDataSource)
    {
        super();
        this.appointmentDataSource =appointmentDataSource;
        this.hBuenVivirDataSource =hBuenVivirDataSource;
        this.sTechnologiesDataSource=sTechnologiesDataSource;
    }
    async getAppointments(patientId, createdAppointment){
        return (await this.appointmentDataSource.getAppointments(patientId, createdAppointment)).rows;
    }
    async createAppointment(body)
    {
        return (await this.appointmentDataSource.createAppointment(body)).rows[0];
    }
    async getPatientFromHospitalBuenVivir(patientId){
        return (await this.hBuenVivirDataSource.getPatient(patientId)).rows[0];
    }
    async getPatientFromSystemTechnologies(patientId){
        return (await this.sTechnologiesDataSource.getPatient(patientId)).rows[0];
    }
}