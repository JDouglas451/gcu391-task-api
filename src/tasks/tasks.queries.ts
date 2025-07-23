import { DB_NAME } from "../config.env";

export const taskQueries = {
    // CREATE
    createTask: `
    INSERT INTO ${DB_NAME}.tasks (
        group_id, name, content
    )
    VALUES (
        ?, ?, ?
    );
    `,

    // READ
    readTasksByGroupID: `
    SELECT
        id, name, content
    FROM ${DB_NAME}.tasks
    WHERE group_id = ?;
    `,

    // UPDATE
    updateTask: `
    UPDATE ${DB_NAME}.tasks
    SET group_id = ?, name = ?, content = ?
    WHERE id = ?;
    `,

    // DELETE
    deleteTask: `
    DELETE FROM ${DB_NAME}.tasks
    WHERE id = ?;
    `,
}
