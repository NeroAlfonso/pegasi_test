module.exports = class GeneralError extends Error
{
    constructor(message, code)
    {
        super(message);
        this.code =code;
    }
}