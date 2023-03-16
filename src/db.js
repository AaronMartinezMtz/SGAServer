import { createPool } from "mysql2/promise";


export const pool = createPool({

    host: 'localhost',
    user: 'Israel',
    password:'IsraelMtz',
    port: 3306,
    database: 'SGA_DB'


    // host: 'https://databases.000webhost.com',
    // user: 'Israel',
    // password:'Pantera$22Is',
    // port: 3306,
    // database: 'SGA_BD'


})