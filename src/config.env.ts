import dotenv from "dotenv";

dotenv.config();

// App config
export const APP_ENV  : string = process.env.APP_ENV  || 'development';
export const APP_PORT : string = process.env.APP_PORT || '3000';

// DB config
export const DB_HOST : string = process.env.DB_HOST || '127.0.0.1';
export const DB_PORT : number = parseInt(process.env.DB_PORT || '3306');

export const DB_NAME : string = process.env.DB_NAME || '';
export const DB_USER : string = process.env.DB_USER || '';
export const DB_PASS : string = process.env.DB_PASS || '';

export const DB_CONNECTION_LIMIT: number = parseInt(process.env.DB_CONNECTION_LIMIT || '10');
