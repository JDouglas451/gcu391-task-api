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
export const readAllUsers = async () => {
    return execute<User>(
        userQueries.readAllUsers,
        []
    );
}

export const readUserByID = async (id: number) => {
    return execute<User>(
        userQueries.readUserByID,
        [id]
    );
}

export const readUserByEmail = async (email: string) => {
    return execute<User>(
        userQueries.readUserByEmail,
        [email]
    );
}

export const readUserLogin = async (email: string, password: string) => {
    return execute<User>(
        userQueries.readUserByEmail,
        [email, password]
    );
}

export const readUsersByEmailSearch = async (s: string) => {
    return execute<User>(
        userQueries.readUsersByEmailSearch,
        [s]
    );
}

// UPDATE
export const updateUser = async (new_email: string, new_password: string, id: number, email: string, password: string) => {
    return execute<OkPacket>(
        userQueries.updateUser,
        [new_email, new_password, id, email, password]
    );
}

// DELETE
export const deleteUser = async (id: number, email: string, password: string) => {
    return execute<OkPacket>(
        userQueries.readUserByEmail,
        [id, email, password]
    );
}
