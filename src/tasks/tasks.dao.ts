import { OkPacket } from "mysql";
import { execute } from "../services/mysql.connector";
import { Task } from "./tasks.model";
import { taskQueries } from "./tasks.queries";

// CREATE
export const createTask = async (group_id: number,  name: string, content: string) => {
    return execute<OkPacket>(
        taskQueries.createTask,
        [group_id, name, content]
    );
}

// READ
export const readTasksByGroupID = async (group_id: number) => {
    return execute<Task>(
        taskQueries.readTasksByGroupID,
        [group_id]
    );
}

// UPDATE
export const updateTask = async (new_group_id: number, new_name: string, new_content: string, id: number) => {
    return execute<OkPacket>(
        taskQueries.updateTask,
        [new_group_id, new_name, new_content, id]
    );
}

// DELETE
export const deleteTask = async (id: number) => {
    return execute<OkPacket>(
        taskQueries.deleteTask,
        [id]
    );
}
