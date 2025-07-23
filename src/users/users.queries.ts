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
    readUsers: `
    SELECT
        id, email
    FROM ${DB_NAME}.users;
    `,

    readUserByID: `
    SELECT
        id, email
    FROM ${DB_NAME}.users
    WHERE id = ?;
    `,
    
    readUsersSearchEmail: `
    SELECT
        id, email
    FROM ${DB_NAME}.users
    WHERE email LIKE ?;
    `,

    readUserLogin: `
    SELECT
        id, email, password
    FROM ${DB_NAME}.users
    WHERE email = ?
    AND password = ?;
    `,

    // UPDATE
    updateUser: `
    UPDATE ${DB_NAME}.users
    SET email = ?, password = ?
    WHERE email = ?
    AND password = ?;
    `,

    // DELETE
    deleteUser: `
    DELETE FROM ${DB_NAME}.users
    WHERE email = ?
    AND password = ?;
    `,
}
