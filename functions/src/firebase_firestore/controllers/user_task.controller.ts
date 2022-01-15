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

export class OSKUserTaskController {
  async onCreate(snapshot: DocumentSnapshot, context: EventContext) {
    const db = admin.firestore();
    const ts = admin.firestore.Timestamp.now();

    const userId = context.params.userId as string;
    const taskId = context.params.taskId as string;

    const userTask: OSKUserTaskDocument = {
      title: snapshot.data()!.title,
      note: snapshot.data()!.note,
      status: 0,
      creationDate: ts
    };

    // Update timestamps
    await db
      .collection(`/users/${userId}/tasks`)
      .doc(taskId)
      .set(userTask);
  }

  async onUpdate(snapshot: Change<DocumentSnapshot>, context: EventContext) {
    const db = admin.firestore();
    const ts = admin.firestore.Timestamp.now();

    const userId = context.params.userId as string;
    const taskId = context.params.taskId as string;

    const userTask = snapshot.after.data() as OSKUserTaskDocument;

    // If the task has been marked completed
    if (userTask.status === 1) {
      // Add to completed task collection
      const userCompletedTask: OSKUserCompletedTaskDocument = {
        ...userTask,
        completionDate: ts
      };
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
