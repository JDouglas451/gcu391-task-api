import { Request, Response, RequestHandler } from "express";
import { OkPacket } from "mysql";
import * as GroupDAO from "./groups.dao";

// CREATE
export const createGroup: RequestHandler = async (req: Request, res: Response) => {
    try {
        console.log('Received a create group request: ', req.body);

        let name = req.body.name;
        let description = req.body.description;

        // send create query
        const okPacket: OkPacket = await GroupDAO.createGroup(name, description);

        console.log("Create group result: ", okPacket);

        // send OK packet in 200 response (OK)
        res.status(200).json(okPacket);
    } catch (err) {
        console.error('[groups.controller][createGroup][Error] ', err);

        // send 500 response (Internal Server Error)
        res.status(500).json({
            message: 'There was an error while creating a group'
        });
    }
}

// READ
export const readGroupsByUserID: RequestHandler = async (req: Request, res: Response) => {
    try {
        console.log(`Received a request to read group data by user ID: `, req.body);

        let groups;
        let user_id: number = parseInt(req.query.user_id as string);

        // send query to read all user data
        groups = await GroupDAO.readGroupsByUserID(user_id);

        // send user data in 200 response (OK)
        res.status(200).json(groups);
    } catch (err) {
        console.error('[groups.controller][readGroupsByUserID][Error] ', err);

        // send 500 response (internal server error)
        res.status(500).json({
            message: 'There was an error when fetching group data'
        });
    }
}

// UPDATE
export const updateGroup: RequestHandler = async (req: Request, res: Response) => {
    try {
        console.log('Received an update group request: ', req.body);

        let new_name = req.body.new_name;
        let new_description = req.body.new_description;
        let id = req.body.id;

        // send create query
        const okPacket: OkPacket = await GroupDAO.updateGroup(new_name, new_description, id);

        console.log("Update group result: ", okPacket);

        // send OK packet in 200 response (OK)
        res.status(200).json(okPacket);
    } catch (err) {
        console.error('[groups.controller][updateGroup][Error] ', err);

        // send 500 response (Internal Server Error)
        res.status(500).json({
            message: 'There was an error while updating a group'
        });
    }
}

// DELETE
export const deleteGroup: RequestHandler = async (req: Request, res: Response) => {
    try {
        console.log('Received a delete group request: ', req.body);

        let id = req.body.id;

        // send create query
        const okPacket: OkPacket = await GroupDAO.deleteGroup(id);

        console.log("Delete group result: ", okPacket);

        // send OK packet in 200 response (OK)
        res.status(200).json(okPacket);
    } catch (err) {
        console.error('[groups.controller][deleteGroup][Error] ', err);

        // send 500 response (Internal Server Error)
        res.status(500).json({
            message: 'There was an error while deleting a group'
        });
    }
}
