/**
 * firebase-oskey-example
 * @copyright (c) 2020, OSkey.io. MIT License.
 * @license SEE LICENSE IN LICENSE.md
 */

import { firestore } from 'firebase-admin';
import { OSKUserTaskDocument } from './user_task_document.model';

export type OSKUserCompletedTaskDocument = OSKUserTaskDocument & {
  completionDate: firestore.Timestamp;
}
