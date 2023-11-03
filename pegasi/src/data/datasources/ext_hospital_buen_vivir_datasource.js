const ErrorsCatalog =require('../../domain/utils/errors_catalog');
module.exports = class ExtHospitalBuenVivirDatasource {
    constructor(){}
    async getPatient(patiendId)
    {
        const response = await fetch(process.env.HOSPITAL_BUEN_VIVIR_URL+"/patient?"+ new URLSearchParams({
            patiendId:patiendId
        }),  {
            method: "GET"
        });
        const data = await response.json();
        return {rows:data};
    }
  }