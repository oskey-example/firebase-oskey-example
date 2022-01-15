"use strict";
/**
 * firebase-oskey-example
 * @copyright (c) 2020, OSkey.io. MIT License.
 * @license SEE LICENSE IN LICENSE.md
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.OSKFirebaseFirestoreModule = void 0;
const user_controller_1 = require("./controllers/user.controller");
const user_completed_task_controller_1 = require("./controllers/user_completed_task.controller");
const user_task_controller_1 = require("./controllers/user_task.controller");
class OSKFirebaseFirestoreModule {
}
exports.OSKFirebaseFirestoreModule = OSKFirebaseFirestoreModule;
OSKFirebaseFirestoreModule.userController = new user_controller_1.OSKUserController();
OSKFirebaseFirestoreModule.userCompletedTaskController = new user_completed_task_controller_1.OSKUserCompletedTaskController();
OSKFirebaseFirestoreModule.userTaskController = new user_task_controller_1.OSKUserTaskController();
//# sourceMappingURL=index.js.map