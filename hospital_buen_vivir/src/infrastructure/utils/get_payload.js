module.exports =function getPayload(request)
{
    switch (request.method) {
        case 'GET':
            return request.query;
        default:
            return {};
    }
};