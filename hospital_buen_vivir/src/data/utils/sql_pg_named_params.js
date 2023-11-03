const named = require('yesql').pg
module.exports = function sqlPGPNamed(query, params)
{
    return named(query)(params);
};