const database ='BD3-NoSQL-AtlasMongoDB';
const collection ='bd3-nosql-atv1';
use(database);
db[collection].insertMany(
    [
        {
            "nome":"Daniel K. B. Sousa",
            "cpf": 12332123190,
            "rg":12121290,
        },
        {
            "nome":"Geovanna C. S. Gaia",
            "cpf": 11232123541,
            "rg":12386291,
        },
        {
            "nome":"Gabriel H. A. M. da Silva",
            "cpf": 11232123180,
            "rg":12334592,
        },
        {
            "nome":"João V. A. de Santana ",
            "cpf": 11247773541,
            "rg":12387624,
        },
        {
            "nome":"Bruno A. L. Silva ",
            "cpf": 12309865421,
            "rg":12381865,
        },
        {
            "nome":"José Ricardo ",
            "cpf": 1124772222,
            "rg":12382223,
        },
        {
            "nome":"Guilherme Simões ",
            "cpf": 4563773541,
            "rg":77107624,
        },
        {
            "nome":"Guilherme de Jesus ",
            "cpf": 11247779173,
            "rg":12389173,
        },
        {
            "nome":"Samuel dos Santos ",
            "cpf": 52247773541,
            "rg":77420624,
        },
        {
            "nome":"Alex da Silva",
            "cpf": 11247755510,
            "rg":12388741,
        }
    ]
);