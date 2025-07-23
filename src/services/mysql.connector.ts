import { DB_HOST, DB_PORT, DB_USER, DB_PASS, DB_NAME, DB_CONNECTION_LIMIT } from "../env-config";
import { createPool, Pool } from "mysql";

let pool: Pool | null = null;

const initializeMySQLConnector = () => {
    try {
        // create connection pool
        pool = createPool({
            host: DB_HOST,
            port: DB_PORT,
            user: DB_USER,
            password: DB_PASS,
            database: DB_NAME,
            connectionLimit: DB_CONNECTION_LIMIT,
        });

        console.log(`Using database '${DB_NAME}'`);
        console.debug('MySQL connection pool generated successfully');

        // test connection
        pool.getConnection((err, connection) => {
            if (err) {
                console.log('MySQL connection failed');
                console.debug('MySQL error: ', err.message);

                throw new Error('unable to connect to database');
            }

            console.log('MySQL connection successful');

            connection.release();
        });
    } catch (err) {
        console.error('[mysql.connector][initializedMySQLConnector][Error]: ', err);

        throw new Error('failed to initialize DB connection pool');
    }
};

export const execute = <T>(query: string, params: string[] | Object): Promise<T> => {
    try {
        if (!pool) {
            // establish connection to DB
            initializeMySQLConnector();
        }

        // make query and return promise object
        return new Promise<T>((resolve, reject) => {
            pool!.query(query, params, (error, results) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(results);
                }
            });
        });
    } catch (error) {
        console.error('[mysql.connector][execute][Error]: ', error);

        throw new Error('failed to execute MySQL query');
    }
};
