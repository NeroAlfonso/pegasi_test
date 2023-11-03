const express =require('express');
module.exports = function PatientRouter(
  getPatientsUcase
)
{
    const router = express.Router();
    router.get(
        '',
        //middleware para validacion
        async (request, response) =>
        {
            const patients = await getPatientsUcase.apply();
            response.json(patients);
        }
    );
    return router;
}