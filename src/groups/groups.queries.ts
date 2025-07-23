import { DB_NAME } from "../config.env";

export const groupQueries = {
    // CREATE
    createGroup: `
    INSERT INTO ${DB_NAME}.groups (
        name, description
    )
    VALUES (
        ?, ?
    );
    `,

    // READ
    readGroupsByUserID: `
    SELECT
	    \`groups\`.*
    FROM ${DB_NAME}.group_users
    JOIN ${DB_NAME}.\`groups\`
    WHERE group_users.user_id = ?
    AND group_users.group_id = \`groups\`.id;
    `,

    // UPDATE
    updateGroup: `
    UPDATE ${DB_NAME}.groups
    SET name = ?, description = ?
    WHERE id = ?;
    `,

    // DELETE
    deleteGroup: `
    DELETE FROM ${DB_NAME}.groups
    WHERE id = ?;
    `,
}
