import { Router } from 'express';
import * as UsersController from './users.controller';

const router = Router();

// CREATE
router.route('/users').post(UsersController.createUser);

// READ
router.route('/users').get(UsersController.readUsers);
router.route('/users/id').get(UsersController.readUserByID);
router.route('/users/login').get(UsersController.readUserLogin);
router.route('/users/search/email').get(UsersController.readUsersSearchEmail);

// UPDATE
router.route('/users').put(UsersController.updateUser);

// DELETE
router.route('/users').delete(UsersController.deleteUser);

export default router;
