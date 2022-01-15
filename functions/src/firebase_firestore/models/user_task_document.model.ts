/**
 * firebase-oskey-example
 * @copyright (c) 2020, OSkey.io. MIT License.
 * @license SEE LICENSE IN LICENSE.md
 */

import { firestore } from 'firebase-admin';

export type OSKUserTaskDocument = {
  title: string;
  note: string;
  status: 0 | 1;
  creationDate: firestore.Timestamp;
}
