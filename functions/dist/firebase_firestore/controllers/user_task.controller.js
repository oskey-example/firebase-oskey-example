"use strict";
/**
 * firebase-oskey-example
 * @copyright (c) 2020, OSkey.io. MIT License.
 * @license SEE LICENSE IN LICENSE.md
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.OSKUserTaskController = void 0;
const admin = require("firebase-admin");
class OSKUserTaskController {
    async onCreate(snapshot, context) {
        const db = admin.firestore();
        const ts = admin.firestore.Timestamp.now();
        const userId = context.params.userId;
        const taskId = context.params.taskId;
        const userTask = {
            title: snapshot.data().title,
            note: snapshot.data().note,
            status: 0,
            creationDate: ts
        };
        // Update timestamps
        await db
            .collection(`/users/${userId}/tasks`)
            .doc(taskId)
            .set(userTask);
    }
    async onUpdate(snapshot, context) {
        const db = admin.firestore();
        const ts = admin.firestore.Timestamp.now();
        const userId = context.params.userId;
        const taskId = context.params.taskId;
        const userTask = snapshot.after.data();
        // If the task has been marked completed
        if (userTask.status === 1) {
            // Add to completed task collection
            const userCompletedTask = Object.assign(Object.assign({}, userTask), { completionDate: ts });
            await db
                .collection(`/users/${userId}/completedTasks`)
                .doc(taskId)
                .set(userCompletedTask);
            // Remove from current task list
            await db
                .collection(`/users/${userId}/tasks`)
                .doc(taskId)
                .delete();
        }
    }
}
exports.OSKUserTaskController = OSKUserTaskController;
//# sourceMappingURL=user_task.controller.js.map