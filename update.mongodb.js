const database ='BD3-NoSQL-AtlasMongoDB';
const collection ='bd3-nosql-atv1';
use(database);
db[collection].updateOne(
    {nome: 'João V. A. de Santana '},
    { $set:{nome:'Joao man', cpf: '12332123190', rg:'30032345'} }
);