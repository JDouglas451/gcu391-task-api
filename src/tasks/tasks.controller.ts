import { Request, Response, RequestHandler } from "express";
import { OkPacket } from "mysql";
import * as TaskDAO from "./tasks.dao";

// CREATE
export const createTask: RequestHandler = async (req: Request, res: Response) => {
    try {
        console.log('Received a create task request: ', req.body);

        let group_id = req.body.group_id
        let name = req.body.name;
        let content = req.body.description;

        // send create query
        const okPacket: OkPacket = await TaskDAO.createTask(group_id, name, content);

        console.log("Create task result: ", okPacket);

        // send OK packet in 200 response (OK)
        res.status(200).json(okPacket);
    } catch (err) {
        console.error('[tasks.controller][createTask][Error] ', err);

        // send 500 response (Internal Server Error)
        res.status(500).json({
            message: 'There was an error while creating a task'
        });
    }
}

// READ
export const readTasksByGroupID: RequestHandler = async (req: Request, res: Response) => {
    try {
        console.log(`Received a request to read task data by group ID: `, req.body);

        let tasks;
        let group_id: number = parseInt(req.query.group_id as string);

        // send query to read all user data
        tasks = await TaskDAO.readTasksByGroupID(group_id);

        // send user data in 200 response (OK)
        res.status(200).json(tasks);
    } catch (err) {
        console.error('[tasks.controller][readTasksByGroupID][Error] ', err);

        // send 500 response (internal server error)
        res.status(500).json({
            message: 'There was an error when fetching task data'
        });
    }
}

// UPDATE
export const updateTask: RequestHandler = async (req: Request, res: Response) => {
    try {
        console.log('Received an update task request: ', req.body);

        let new_group_id = req.body.new_group_id
        let new_name = req.body.new_name;
        let new_content = req.body.new_content;
        let id = req.body.id;

        // send create query
        const okPacket: OkPacket = await TaskDAO.updateTask(new_group_id, new_name, new_content, id);

        console.log("Update task result: ", okPacket);

        // send OK packet in 200 response (OK)
        res.status(200).json(okPacket);
    } catch (err) {
        console.error('[tasks.controller][updateTask][Error] ', err);

        // send 500 response (Internal Server Error)
        res.status(500).json({
            message: 'There was an error while updating a task'
        });
    }
}

// DELETE
export const deleteTask: RequestHandler = async (req: Request, res: Response) => {
    try {
        console.log('Received a delete task request: ', req.body);

        let id = req.body.id;

        // send create query
        const okPacket: OkPacket = await TaskDAO.deleteTask(id);

        console.log("Delete task result: ", okPacket);

        // send OK packet in 200 response (OK)
        res.status(200).json(okPacket);
    } catch (err) {
        console.error('[tasks.controller][deleteTask][Error] ', err);

        // send 500 response (Internal Server Error)
        res.status(500).json({
            message: 'There was an error while deleting a task'
        });
    }
}
