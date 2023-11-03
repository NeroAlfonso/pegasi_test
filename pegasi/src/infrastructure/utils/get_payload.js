module.exports =function getPayload(request)
{
    switch (request.method) {
        case 'GET':
            return request.query;
        case 'POST':
            return request.body;
        default:
            return {};
    }
};