const express =require('express');
const payloadTypeValidator =require('../middlewares/validators/payload_type_validator');
const payloadPatternValidator =require('../middlewares/validators/payload_pattern_validator');
const patternCatalog =require('../../domain/utils/regexp_catalog');
const httpErrorHandler =require('../utils/http_error_handler');
module.exports = function PatientRouter(
  getPatientsUcase
)
{
    const router = express.Router();
    router.get(
        '',
        payloadTypeValidator([{}, {patiendId: 'string'}]),
        payloadPatternValidator({patiendId: patternCatalog.onlyNumbers}),
        async (request, response) =>
        {
            try
            {
                const patients = await getPatientsUcase.apply(request.query.patiendId);
                response.status(200).json(patients);
            }
            catch(e)
            {
                return httpErrorHandler(response, e);
            }
        }
    );
    return router;
}