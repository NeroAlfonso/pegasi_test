module.exports =class AppointmentRepository 
{
    constructor()
    {
        if(this.constructor ==AppointmentRepository) throw new Error("This class can't be instantiated");
    }
    async getAppointments(patientId, createdAppointment){
        throw new Error('Not implemented');
    }
}