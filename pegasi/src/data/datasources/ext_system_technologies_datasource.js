const ErrorsCatalog =require('../../domain/utils/errors_catalog');
module.exports = class ExtSystemTechnologiesDatasource {
    constructor(){}
    async getPatient(patiendId)
    {
        const response = await fetch(process.env.SYSTEM_TECHNOLOGIES_URL+"/patient?"+ new URLSearchParams({
            patiendId:patiendId
        }),  {
            method: "GET"
        });
        const data = await response.json();
        return {rows:data};
    }
  }