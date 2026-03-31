import { DataSource } from "typeorm";


export const appDataSource = new DataSource ({
    type: 'postgres', //fazer o mesmo que foi realizado para host, username e password
    port: 5432, //fazer o mesmo que foi realizado para host, username e password
    host: process.env.DB_HOST as string,
    username: process.env.DB_USER as string,
    password: process.env.DB_PASSWORD as string,
    synchronize: true, //utilizar migrations em produção
    logging: true, //mostra comandos SQL
    entities: ['src/entities/**/*.ts'] //recomendado: importar todas as entities
})

//1 - database
//2 - entities
//3 - services para cada entity