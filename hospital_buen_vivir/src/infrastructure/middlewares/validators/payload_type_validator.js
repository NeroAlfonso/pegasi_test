const getPayload =require('../../utils/get_payload');
module.exports = function payloadTypeValidator(objectArray)
{
    return async (request, response, next) =>
    {
        const inputPayload = getPayload(request);
        const inputPayloadKeys = Object.keys(inputPayload);
        let validPayloadsCounter =objectArray.length;

        for (let indexValidPayloads = 0; indexValidPayloads < objectArray.length; indexValidPayloads++)
        {
            const currentValidPayload = objectArray[indexValidPayloads];
            const currentValidPayloadKeys = Object.keys(currentValidPayload);
            
            if(inputPayloadKeys.length !=currentValidPayloadKeys.length)
            {
                validPayloadsCounter--; 
                continue;
            }
            
            for (let indexValidPayloadKeys = 0; indexValidPayloadKeys < currentValidPayloadKeys.length; indexValidPayloadKeys++) {
                const currentValidPayloadKey = currentValidPayloadKeys[indexValidPayloadKeys];
                if(typeof inputPayload[currentValidPayloadKey] !== currentValidPayload[currentValidPayloadKey])
                {
                    validPayloadsCounter--;
                    break;
                }
            }
        }
        if(validPayloadsCounter ==0) response.status(400).send('Parámetros inválidos');
        else next();
    }
}