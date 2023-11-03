const named = require('yesql').pg
module.exports = function (query, params)
{
    return named(query)(params);
};