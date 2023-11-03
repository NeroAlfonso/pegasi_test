const express =require('express');
const payloadTypeValidator =require('../middlewares/validators/payload_type_validator');
const payloadPatternValidator =require('../middlewares/validators/payload_pattern_validator');
const patternCatalog =require('../../domain/utils/regexp_catalog');
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
            const patients = await getPatientsUcase.apply();
            response.json(patients);
        }
    );
    return router;
}