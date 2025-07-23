import { OkPacket } from "mysql";
import { execute } from "../services/mysql.connector";
import { User } from "./users.model";
import { userQueries } from "./users.queries";

// CREATE
export const createUser = async (email: string, password: string) => {
    return execute<OkPacket>(
        userQueries.createUser,
        [email, password]
    );
}

// READ
export const readUsers = async () => {
    return execute<User>(
        userQueries.readUsers,
        []
    );
}

export const readUserByID = async (id: number) => {
    return execute<User>(
        userQueries.readUserByID,
        [id]
    );
}

export const readUserLogin = async (email: string, password: string) => {
    return execute<User>(
        userQueries.readUserLogin,
        [email, password]
    );
}

export const readUsersSearchEmail = async (s: string) => {
    return execute<User>(
        userQueries.readUsersSearchEmail,
        ['%' + s + '%']
    );
}

// UPDATE
export const updateUser = async (new_email: string, new_password: string, email: string, password: string) => {
    return execute<OkPacket>(
        userQueries.updateUser,
        [new_email, new_password, email, password]
    );
}

// DELETE
export const deleteUser = async (email: string, password: string) => {
    return execute<OkPacket>(
        userQueries.deleteUser,
        [email, password]
    );
}
