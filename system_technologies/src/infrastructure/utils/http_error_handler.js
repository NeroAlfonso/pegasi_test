module.exports = function httpErrorHandler(request, error)
{
    const errorCode =error.code !=undefined ? error.code : 500;
    const errorMessage =error.message !=undefined ? error.message : 'Error.';
    response.status(errorCode).send(errorMessage);
} 