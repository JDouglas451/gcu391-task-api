import { Router } from 'express';
import * as GroupsController from './groups.controller';

const router = Router();

// CREATE
router.route('/groups').post(GroupsController.createGroup);

// READ
router.route('/groups').get(GroupsController.readGroupsByUserID);

// UPDATE
router.route('/groups').put(GroupsController.updateGroup);

// DELETE
router.route('/groups').delete(GroupsController.deleteGroup);

export default router;
