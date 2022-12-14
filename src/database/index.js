import pkg from 'pg';
const { Client } = pkg

const database = new Client(
  process.env.NODE_ENV === "test"
    ? 
    {
        user: 'alexandre',
        host: 'localhost',
        database: 'tests_products',
        password: '505616',
        port: 5432,
    }
    : {
        user: process.env.DB_USER,
        host: process.env.DB_HOST,
        database: process.env.DB,
        password: `505616`,
        port: process.env.DB_PORT,
    }
);



export const startDatabase = async () => {
  await database.connect();
};

export default database
