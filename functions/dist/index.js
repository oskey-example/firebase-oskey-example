"use strict";
/**
 * firebase-oskey-example
 * @copyright (c) 2020, OSkey.io. MIT License.
 * @license SEE LICENSE IN LICENSE.md
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.onUserCompletedTaskUpdated = exports.onUserTaskUpdated = exports.onUserTaskCreated = exports.onUserUpdated = exports.onUserAccountDeleted = exports.onUserAccountCreated = void 0;
const admin = require("firebase-admin");
const functions = require("firebase-functions");
const firebase_auth_1 = require("./firebase_auth");
const firebase_firestore_1 = require("./firebase_firestore");
/** *****************************************************************************
 * Initialize app
 ***************************************************************************** */
admin.initializeApp();
/** *****************************************************************************
 * Authentication trigger
 ***************************************************************************** */
// On user creation
exports.onUserAccountCreated = functions
    .region('europe-west1')
    .auth.user()
    .onCreate((user) => firebase_auth_1.OSKFirebaseAuthModule.userAccountController.onUserAccountCreated(user));
// On user deletion
exports.onUserAccountDeleted = functions
    .region('europe-west1')
    .auth.user()
    .onDelete((user) => firebase_auth_1.OSKFirebaseAuthModule.userAccountController.onUserAccountDeleted(user));
/** *****************************************************************************
 * DB Trigger : User
 ***************************************************************************** */
exports.onUserUpdated = functions
    .region('europe-west1')
    .firestore.document('/users/{userId}')
    .onUpdate((snapshot, context) => firebase_firestore_1.OSKFirebaseFirestoreModule.userController.onUpdate(snapshot, context));
/** *****************************************************************************
 * DB Trigger : User Task
 ***************************************************************************** */
exports.onUserTaskCreated = functions
    .region('europe-west1')
    .firestore.document('/users/{userId}/tasks/{taskId}')
    .onCreate((snapshot, context) => firebase_firestore_1.OSKFirebaseFirestoreModule.userTaskController.onCreate(snapshot, context));
exports.onUserTaskUpdated = functions
    .region('europe-west1')
    .firestore.document('/users/{userId}/tasks/{taskId}')
    .onUpdate((snapshot, context) => firebase_firestore_1.OSKFirebaseFirestoreModule.userTaskController.onUpdate(snapshot, context));
exports.onUserCompletedTaskUpdated = functions
    .region('europe-west1')
    .firestore.document('/users/{userId}/completedTasks/{completedTaskId}')
    .onUpdate((snapshot, context) => firebase_firestore_1.OSKFirebaseFirestoreModule.userCompletedTaskController.onUpdate(snapshot, context));
//# sourceMappingURL=index.js.map