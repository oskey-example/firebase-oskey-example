/**
 * firebase-oskey-example
 * @copyright (c) 2020, OSkey.io. MIT License.
 * @license SEE LICENSE IN LICENSE.md
 */

import { OSKUserController } from './controllers/user.controller';
import { OSKUserCompletedTaskController } from './controllers/user_completed_task.controller';
import { OSKUserTaskController } from './controllers/user_task.controller';

export class OSKFirebaseFirestoreModule {
  static userController = new OSKUserController();
  static userCompletedTaskController = new OSKUserCompletedTaskController();
  static userTaskController = new OSKUserTaskController();
}
