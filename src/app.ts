import express, {Request, Response} from 'express';
import cors from 'cors';
import helmet from 'helmet';
import logger from './middleware/logger.middleware';
import { APP_ENV, APP_PORT } from './config.env';
import usersRouter from './users/users.routes';
import groupsRouter from './groups/groups.routes';
import tasksRouter from './tasks/tasks.routes';

const app = express();

// enable logging
if (APP_ENV === 'development') {
    app.use(logger);
    console.log('Warning: Task API is running in development mode');
}

// enable JSON and URL middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// enable cross-origin requests (React and Angular compatiblity)
app.use(cors());

// enable HTTP security headers
app.use(helmet());

// root as info page
app.get('/', (req: Request, res: Response) => {
    res.send('Task API version 1.0');
});

// set up API routing
app.use('/', [usersRouter, groupsRouter, tasksRouter]);

// begin accepting requests
app.listen(APP_PORT, () => {
    console.log(`Task API listening on port ${APP_PORT}`);
});
