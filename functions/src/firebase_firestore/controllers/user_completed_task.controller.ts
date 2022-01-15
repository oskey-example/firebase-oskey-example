/**
 * firebase-oskey-example
 * @copyright (c) 2020, OSkey.io. MIT License.
 * @license SEE LICENSE IN LICENSE.md
 */

import * as admin from 'firebase-admin';

import { DocumentSnapshot } from 'firebase-functions/lib/providers/firestore';
import { Change, EventContext } from 'firebase-functions';

import { OSKUserTaskDocument } from '../models/user_task_document.model';
import { OSKUserCompletedTaskDocument } from '../models/user_completed_task_document.model';

export class OSKUserCompletedTaskController {
  async onUpdate(snapshot: Change<DocumentSnapshot>, context: EventContext) {
    const db = admin.firestore();

    const userId = context.params.userId as string;
    const completedTaskId = context.params.completedTaskId as string;

    const userCompletedTask = snapshot.after.data() as OSKUserCompletedTaskDocument;

    // If the task has been marked completed
    if (userCompletedTask.status === 0) {
      // Add to completed task collection
      const userTask: OSKUserTaskDocument = {
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
