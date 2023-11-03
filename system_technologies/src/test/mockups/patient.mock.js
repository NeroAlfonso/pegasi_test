const patients =[
    {   
        _id:1,                              name:"Juan Jose Jerez",  identifier:"12345678", 
        birthDate:"2000-01-01",	        isDeceased:true,                     birthCity:"City A",      
        address:"Calle 14 avenida 24 City A Estado Abc Mexico",	email:"juanjosejerez@mail.com",  createdAt:"2023-01-01",                
        updateAt:"2023-01-01", deceasedBirth:"2023-01-01", married: true
    },
    {   
        _id:2,                              name:"Juan Jose Jerez 2",  identifier:"12345679", 
        birthDate:"2000-01-01",	        isDeceased:true,                     birthCity:"City B",      
        address:"Calle 15 avenida 25 City B Estado Abc Mexico",	email:"juanjosejerez@mail.com",  createdAt:"2023-01-01",                
        updateAt:"2023-01-01", deceasedBirth:"2023-01-01", married: false
    },
    {   
        _id:3,                              name:"Juan Jose Jerez 3",  identifier:"12345610", 
        birthDate:"2000-01-01",	        isDeceased:false,                     birthCity:"City C",      
        address:"Calle 14 avenida 24 City C Estado Abc Mexico",	email:"juanjosejerez@mail.com",  createdAt:"2023-01-01",                
        updateAt:"2023-01-01", deceasedBirth:"2023-01-01", married: true
    }
];
module.exports ={
    PgPatientDatasource: {
        async getPatients(patientId) {
            if(patientId)
            {
                return new Promise(resolve => resolve({rows:patients.filter(patient => patient.identifier ==patientId)}));
            }
            else
            {
                return new Promise(resolve => resolve({rows:patients}));
            }
        }   
    },
    patients
};