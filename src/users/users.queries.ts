import { DB_NAME } from "../config.env";

export const userQueries = {
    // CREATE
    createUser: `
    INSERT INTO ${DB_NAME}.users (
        email, password
    )
    VALUES (
        ?, ?
    );
    `,

    // READ
    readAllUsers: `
    SELECT
        email
    FROM ${DB_NAME}.users;
    `,

    readUserByID: `
    SELECT
        email
    FROM ${DB_NAME}.users
    WHERE id = ?;
    `,
    
    readUserByEmail: `
    SELECT
        email
    FROM ${DB_NAME}.users
    WHERE email = ?;
    `,

    readUserLogin: `
    SELECT
        id, email, password
    FROM ${DB_NAME}.users
    WHERE email = ?
    AND password = ?;
    `,

    readUsersByEmailSearch: `
    SELECT
        email
    FROM ${DB_NAME}.users
    WHERE email LIKE ?;
    `,

    // UPDATE
    updateUser: `
    UPDATE ${DB_NAME}.users
    SET email = ?, password = ?
    WHERE id = ?
    AND email = ?
    AND password = ?;
    `,

    // DELETE
    deleteUser: `
    DELETE FROM ${DB_NAME}.users
    WHERE id = ?
    AND email = ?
    AND password = ?;
    `,
}
