"use strict";
/**
 * firebase-oskey-example
 * @copyright (c) 2020, OSkey.io. MIT License.
 * @license SEE LICENSE IN LICENSE.md
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.OSKUserCompletedTaskController = void 0;
const admin = require("firebase-admin");
class OSKUserCompletedTaskController {
    async onUpdate(snapshot, context) {
        const db = admin.firestore();
        const userId = context.params.userId;
        const completedTaskId = context.params.completedTaskId;
        const userCompletedTask = snapshot.after.data();
        // If the task has been marked completed
        if (userCompletedTask.status === 0) {
            // Add to completed task collection
            const userTask = {
                title: userCompletedTask.title,
                note: userCompletedTask.note,
                status: userCompletedTask.status,
                creationDate: userCompletedTask.creationDate
            };
            await db
                .collection(`/users/${userId}/tasks`)
                .doc(completedTaskId)
                .set(userTask);
            // Remove from current task list
            await db
                .collection(`/users/${userId}/completedTasks`)
                .doc(completedTaskId)
                .delete();
        }
    }
}
exports.OSKUserCompletedTaskController = OSKUserCompletedTaskController;
//# sourceMappingURL=user_completed_task.controller.js.map