/**
 * firebase-oskey-example
 * @copyright (c) 2020, OSkey.io. MIT License.
 * @license SEE LICENSE IN LICENSE.md
 */

import * as admin from 'firebase-admin';
import * as functions from 'firebase-functions';

import { OSKFirebaseAuthModule } from './firebase_auth';
import { OSKFirebaseFirestoreModule } from './firebase_firestore';

/** *****************************************************************************
 * Initialize app
 ***************************************************************************** */
admin.initializeApp();

/** *****************************************************************************
 * Authentication trigger
 ***************************************************************************** */

// On user creation
export const onUserAccountCreated = functions
  .region('europe-west1')
  .auth.user()
  .onCreate((user) => OSKFirebaseAuthModule.userAccountController.onUserAccountCreated(user));

// On user deletion
export const onUserAccountDeleted = functions
  .region('europe-west1')
  .auth.user()
  .onDelete((user) => OSKFirebaseAuthModule.userAccountController.onUserAccountDeleted(user));

/** *****************************************************************************
 * DB Trigger : User
 ***************************************************************************** */

export const onUserUpdated = functions
  .region('europe-west1')
  .firestore.document('/users/{userId}')
  .onUpdate((snapshot, context) => OSKFirebaseFirestoreModule.userController.onUpdate(snapshot, context));

/** *****************************************************************************
 * DB Trigger : User Task
 ***************************************************************************** */

export const onUserTaskCreated = functions
  .region('europe-west1')
  .firestore.document('/users/{userId}/tasks/{taskId}')
  .onCreate((snapshot, context) => OSKFirebaseFirestoreModule.userTaskController.onCreate(snapshot, context));

export const onUserTaskUpdated = functions
  .region('europe-west1')
  .firestore.document('/users/{userId}/tasks/{taskId}')
  .onUpdate((snapshot, context) => OSKFirebaseFirestoreModule.userTaskController.onUpdate(snapshot, context));

export const onUserCompletedTaskUpdated = functions
  .region('europe-west1')
  .firestore.document('/users/{userId}/completedTasks/{completedTaskId}')
  .onUpdate((snapshot, context) => OSKFirebaseFirestoreModule.userCompletedTaskController.onUpdate(snapshot, context));
