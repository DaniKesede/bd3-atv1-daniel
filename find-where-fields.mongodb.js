const database ='BD3-NoSQL-AtlasMongoDB';
const collection ='bd3-nosql-atv1';
use(database);
db[collection].find(
    {"cpf":12332123190},
    {"_id":0, "codigo":0, "descricao":0}
);
