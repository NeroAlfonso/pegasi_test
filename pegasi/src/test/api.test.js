const {apiSp, server} =require("./test.config");
describe('Test general api endpoints',
    () =>
    {
        test(
            'Initial endpoint exist',
            async () =>
            {
                await apiSp.get('/')
                    .expect(200)
            }
        );
        test(
            'Initial endpoint return only plain text',
            async () =>
            {
                await apiSp.get('/')
                    .expect('Content-Type', /text\/plain/);
            }
        );
        test(
            'Initial endpoint return a specific message',
            async () =>
            {
                const response =await apiSp.get('/');
                expect(response.text).toBe('Hospital Buen vivir Api v1');
            }
        );
    }
);
afterEach(async () => await server.close())
afterAll(() => {});