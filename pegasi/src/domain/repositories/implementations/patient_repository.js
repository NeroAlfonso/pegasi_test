const PatientRepository =require('../bases/patient_repository');
module.exports =class PatientRepositoryImp extends PatientRepository
{
    constructor(patientDataSource)
    {
        super();
        this.patientDataSource =patientDataSource;
    }
    async getPatients(patientId){
        return (await this.patientDataSource.getPatients(patientId)).rows;
    }
}