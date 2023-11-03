const getPayload =require('../../utils/get_payload');
module.exports = function payloadPatternValidator(patternConfig)
{
    return async (request, response, next) =>
    {
        const patternConfigKeys =Object.keys(patternConfig);
        const inputPayload = getPayload(request);
        for (let index = 0; index < patternConfigKeys.length; index++) {
            const currentKey = patternConfigKeys[index];
            if(inputPayload[currentKey] ===undefined) continue;
            if(!patternConfig[currentKey].test(inputPayload[currentKey]))
            {
                response.status(400).send('Parámetros inválidos');
                return;
            }
        }
        next();
    }
}