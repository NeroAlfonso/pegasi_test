module.exports =class AppointmentRepository 
{
    constructor()
    {
        if(this.constructor ==AppointmentRepository) throw new Error("This class can't be instantiated");
    }
    async getAppointments(patientId, createdAppointment){
        throw new Error('Not implemented');
    }
    async createAppointment(body){
        throw new Error('Not implemented');
    }
    async getPatientFromHospitalBuenVivir(patientId){
        throw new Error('Not implemented');
    }
    async getPatientFromSystemTechnologies(patientId){
        throw new Error('Not implemented');
    }
}