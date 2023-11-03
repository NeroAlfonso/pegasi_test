const patients =[
    {   
        _id:1,                              nombre_completo:"Juan Jose Jerez",  cedula:"12345678", 
        nacimiento:"2000-01-01",	        fallecido:true,                     ciudad_nacido:"City A",      
        direccion_actual:"Calle 14 avenida 24 City A Estado Abc Mexico",	correoActual:"juanjosejerez@mail.com",  a_t:"2023-01-01",                
        UT:"2023-01-01"
    },
    {   
        _id:2,                              nombre_completo:"Juan Jose Jerez 2",  cedula:"12345610", 
        nacimiento:"2000-01-01",	        fallecido:true,                     ciudad_nacido:"City A",      
        direccion_actual:"Calle 14 avenida 24 City A Estado Abc Mexico",	correoActual:"juanjosejerez@mail.com",  a_t:"2023-01-01",                
        UT:"2023-01-01"
    },
    {   
        _id:3,                              nombre_completo:"Juan Jose Jerez 3",  cedula:"12345679", 
        nacimiento:"2000-01-01",	        fallecido:true,                     ciudad_nacido:"City A",      
        direccion_actual:"Calle 14 avenida 24 City A Estado Abc Mexico",	correoActual:"juanjosejerez@mail.com",  a_t:"2023-01-01",                
        UT:"2023-01-01"
    }
];
module.exports ={
    PgPatientDatasource: {
        async getPatients(patientId) {
            if(patientId)
            {
                return new Promise(resolve => resolve({rows:patients.filter(patient => patient.cedula ==patientId)}));
            }
            else
            {
                return new Promise(resolve => resolve({rows:patients}));
            }
        }   
    },
    patients
};