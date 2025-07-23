import { Request, Response, RequestHandler } from "express";
import { OkPacket } from "mysql";
import * as UserDAO from './users.dao';

// CREATE
export const createUser: RequestHandler = async (req: Request, res: Response) => {
    try {
        console.log('Received a create user request: ', req.body);

        let email = req.body.email;
        let password = req.body.password;

        // TODO: validate email and password

        // send create query
        const okPacket: OkPacket = await UserDAO.createUser(email, password);

        console.log("Create user result: ", okPacket);

        // send OK packet in 200 response (OK)
        res.status(200).json(okPacket);
    } catch (err) {
        console.error('[users.controller][createUser][Error] ', err);

        // send 500 response (Internal Server Error)
        res.status(500).json({
            message: 'There was an error while creating a user'
        });
    }
}

// READ
export const readAllUsers: RequestHandler = async (req: Request, res: Response) => {
    try {
        console.log('Received a request to read all user data: ', req.body);

        let users;

        // send query to read all user data
        users = await UserDAO.readAllUsers();

        // send user data in 200 response (OK)
        res.status(200).json(users);
    } catch (err) {
        console.error('[users.controller][readAllUsers][Error] ', err);

        // send 500 response (internal server error)
        res.status(500).json({
            message: 'There was an error when fetching user data'
        });
    }
}

export const readUserByID: RequestHandler = async (req: Request, res: Response) => {
    try {
        console.log(`Received a request to read user data by ID: `, req.body);

        let user;
        let user_id: number = parseInt(req.query.user_id as string);

        // send query to read all user data
        user = await UserDAO.readUserByID(user_id);

        // send user data in 200 response (OK)
        res.status(200).json(user);
    } catch (err) {
        console.error('[users.controller][readUserByID][Error] ', err);

        // send 500 response (internal server error)
        res.status(500).json({
            message: 'There was an error when fetching user data'
        });
    }
}

export const readUserByEmail: RequestHandler = async (req: Request, res: Response) => {
    try {
        console.log(`Received request to read user data by email: `, req.body);

        let user;
        let email: string = req.query.email as string;

        // send query to read all user data
        user = await UserDAO.readUserByEmail(email);

        // send user data in 200 response (OK)
        res.status(200).json(user);
    } catch (err) {
        console.error('[users.controller][readUserByEmail][Error] ', err);

        // send 500 response (internal server error)
        res.status(500).json({
            message: 'There was an error when fetching user data'
        });
    }
}

export const readUserLogin: RequestHandler = async (req: Request, res: Response) => {
    try {
        console.log(`Received request to login user: `, req.body);

        let user;
        let email: string = req.body.email;
        let password: string = req.body.password;

        // send query to read all user data
        user = await UserDAO.readUserLogin(email, password);

        // send user data in 200 response (OK)
        res.status(200).json(user);
    } catch (err) {
        console.error('[users.controller][readUserLogin][Error] ', err);

        // send 500 response (internal server error)
        res.status(500).json({
            message: 'There was an error when fetching user data'
        });
    }
}

export const readUsersByEmailSearch: RequestHandler = async (req: Request, res: Response) => {
    try {
        console.log('Received a request to read user data by email search: ', req.body);

        let users;
        let email: string = req.query.email as string;

        // send query to read all user data
        users = await UserDAO.readUsersByEmailSearch(email);

        // send user data in 200 response (OK)
        res.status(200).json(users);
    } catch (err) {
        console.error('[users.controller][readUsersByEmailSearch][Error] ', err);

        // send 500 response (internal server error)
        res.status(500).json({
            message: 'There was an error when fetching user data'
        });
    }
}

// UPDATE
export const updateUser: RequestHandler = async (req: Request, res: Response) => {
    try {
        console.log('Received an update user request: ', req.body);

        let new_email = req.body.new_email;
        let new_password = req.body.new_password;
        let id = req.body.id;
        let email = req.body.email;
        let password = req.body.password;

        // send create query
        const okPacket: OkPacket = await UserDAO.updateUser(new_email, new_password, id, email, password);

        console.log("Update user result: ", okPacket);

        // send OK packet in 200 response (OK)
        res.status(200).json(okPacket);
    } catch (err) {
        console.error('[users.controller][updateUser][Error] ', err);

        // send 500 response (Internal Server Error)
        res.status(500).json({
            message: 'There was an error while updating a user'
        });
    }
}

// DELETE
export const deleteUser: RequestHandler = async (req: Request, res: Response) => {
    try {
        console.log('Received a delete user request: ', req.body);

        let id = req.body.id;
        let email = req.body.email;
        let password = req.body.password;

        // send create query
        const okPacket: OkPacket = await UserDAO.deleteUser(id, email, password);

        console.log("Delete user result: ", okPacket);

        // send OK packet in 200 response (OK)
        res.status(200).json(okPacket);
    } catch (err) {
        console.error('[users.controller][deleteUser][Error] ', err);

        // send 500 response (Internal Server Error)
        res.status(500).json({
            message: 'There was an error while deleting a user'
        });
    }
}
