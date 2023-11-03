module.exports =class PatientRepository 
{
    constructor()
    {
        if(this.constructor ==PatientRepository) throw new Error("This class can't be instantiated");
    }
    async getPatients(patientId){
        throw new Error('Not implemented');
    }
}