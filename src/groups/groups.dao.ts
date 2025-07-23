import { OkPacket } from "mysql";
import { execute } from "../services/mysql.connector";
import { Group } from "./groups.model";
import { groupQueries } from "./groups.queries";

// CREATE
export const createGroup = async (name: string, description: string) => {
    return execute<OkPacket>(
        groupQueries.createGroup,
        [name, description]
    );
}

// READ
export const readGroupsByUserID = async (id: number) => {
    return execute<Group>(
        groupQueries.readGroupsByUserID,
        [id]
    );
}

// UPDATE
export const updateGroup = async (new_name: string, new_description: string, id: number) => {
    return execute<OkPacket>(
        groupQueries.updateGroup,
        [new_name, new_description, id]
    );
}

// DELETE
export const deleteGroup = async (id: number) => {
    return execute<OkPacket>(
        groupQueries.deleteGroup,
        [id]
    );
}
