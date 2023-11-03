const express =require('express');
const payloadTypeValidator =require('../middlewares/validators/payload_type_validator');
const payloadPatternValidator =require('../middlewares/validators/payload_pattern_validator');
const patternCatalog =require('../../domain/utils/regexp_catalog');
const httpErrorHandler =require('../utils/http_error_handler');
module.exports = function AppointmentRouter(
  getAppointmentsUcase,
  createAppointmentUcase
)
{
    const router = express.Router();
    router.post(
        '',
        payloadTypeValidator([{dni: 'number', fechaInicio: 'string', fechaFinal: 'string', externalResource: 'string'}]),
        payloadPatternValidator({dni: patternCatalog.onlyNumbers, externalResource: patternCatalog.validExternalSources, fechaInicio: patternCatalog.yyymmddhhssformat, fechaFinal: patternCatalog.yyymmddhhssformat}),
        async (request, response) =>
        {
            try
            {
                const newAppointment = await createAppointmentUcase.apply(request.body.dni, request.body.fechaInicio, request.body.fechaFinal, request.body.externalResource);
                response.status(200).json(newAppointment);
            }
            catch(e)
            {
                return httpErrorHandler(response, e);
            }
        }
    );
    router.get(
        '',
        payloadTypeValidator([{}, {patientId: 'string'}, {patientId: 'string', createdAppointment: 'string'}]),
        payloadPatternValidator({patientId: patternCatalog.onlyNumbers}),
        async (request, response) =>
        {
            try
            {

                const appointments = await getAppointmentsUcase.apply(request.query.patientId, request.query.createdAppointment);
                response.status(200).json(appointments);
            }
            catch(e)
            {
                return httpErrorHandler(response, e);
            }
        }
    );
    return router;
}