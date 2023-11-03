const {apiSp, server} =require("./test.config");
const UserMockValues =require("./mockups/patient.mock");
jest.mock(
    '../data/datasources/pg_patient_datasource',
    () =>
    {
        const UserMockValues =require("./mockups/patient.mock");
        return class PgPatientDatasource {
            constructor(dbConn) 
            {
                this.dbConn =dbConn;
            }
            async getPatients(patientId) {
                return UserMockValues.PgPatientDatasource.getPatients(patientId);
            }
            }
    }
);

describe(
    'About get patient lists', 
    () =>
    {
        beforeEach(
            () =>
            {
                jest.resetModules();
            }
        );
        test(
            'Get all patients',
            async () =>
            {
                const response =await apiSp
                    .get('/patient')
                    .expect(200);
                expect(response.body.length).toBeGreaterThan(2);
            }
        );
        test(
            'Get a specific patient',
            async () =>
            {
                const response =await apiSp
                    .get('/patient')
                    .query(
                        {
                            patiendId: '12345678'
                        }
                    )
                    .expect(200);
                    expect(response.body.length).toBe(1);
            }
        );
        test(
            'Try get patients with invalid parameters',
            async () =>
            {
                const response =await apiSp
                    .get('/patient')
                    .query(
                        {
                            otherparam: '1234'
                        }
                    )
                    .expect(400);
            }
        );
    }
);
afterEach(async () => await server.close())
afterAll(() => {})