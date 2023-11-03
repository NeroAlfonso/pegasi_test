const express =require('express');
module.exports = function PatientRouter(
    getAllUsersUCase
)
{
    const router = express.Router();
    router.get(
        '',
        //middleware para validacion
        async (request, response) =>
        {
            response.send(true);
        }
    );
    return router;
}