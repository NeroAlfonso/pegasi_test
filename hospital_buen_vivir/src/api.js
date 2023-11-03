const api =require('./infrastructure/server');
api.get('/', (req, res) => res.setHeader('content-type', 'text/plain').send('Hospital Buen vivir Api v1'))
const server =api.listen(
        (process.env.NODE_ENV !== 'test' ? process.env.API_PORT : 0),
        async () => console.log(`Hospital Buen vivir Api iniciada en el puerto ${(process.env.API_PORT)}`)
);
module.exports = {api, server};

