const UCase =require("../../bases/ucase");
module.exports = class GetPatientsUcase extends UCase
{
    constructor(patientRepository)
    {
        super();
        this.patientRepository =patientRepository;
    }
    async apply(patientId)
    {
        return this.patientRepository.getPatients(patientId);
    }
}