/**
 * firebase-oskey-example
 * @copyright (c) 2020, OSkey.io. MIT License.
 * @license SEE LICENSE IN LICENSE.md
 */

import { describe, it } from 'mocha';
import { expect } from 'chai';
import { UserCredential } from 'firebase/auth';
import * as firebaseFirestore from 'firebase/firestore';
import { assertSucceeds } from 'gp-firebase-emulator-unit-test';

import { data } from '../includes/data';
import { OSKUnitTestApps } from '../models/unit_test_apps.model';

import { checkField } from '../helpers/field_checkers.helper';
import { OSKTDUserTask } from '../models/user_task.model';
import { Timestamp } from 'firebase/firestore';

function checkUserTaskDocumentCreated(userTaskDoc: firebaseFirestore.DocumentSnapshot<any>, userTask: OSKTDUserTask, documentPath: string) {
  expect(userTaskDoc.exists(), `Missing document ${documentPath}`).to.be.true;

  const userTaskData = userTaskDoc.data();

  expect(userTaskData.creationDate, 'Creation date is not set').to.exist;
  checkField(documentPath, 'title', 'string', userTaskData.title, `${userTask.data.title}`);
  checkField(documentPath, 'note', 'string', userTaskData.note, `${userTask.data.note}`);
  checkField(documentPath, 'status', 'number', userTaskData.status, 0);
};

function checkUserCompletedTaskDocumentCreated(userCompletedTaskDoc: firebaseFirestore.DocumentSnapshot<any>, userTask: OSKTDUserTask, documentPath: string) {
  expect(userCompletedTaskDoc.exists(), `Missing document ${documentPath}`).to.be.true;

  const userCompletedTaskData = userCompletedTaskDoc.data();

  expect(userCompletedTaskData.creationDate, 'Creation date is not set').to.exist;
  checkField(documentPath, 'title', 'string', userCompletedTaskData.title, `${userTask.data.title}`);
  checkField(documentPath, 'note', 'string', userCompletedTaskData.note, `${userTask.data.note}`);
  checkField(documentPath, 'status', 'number', userCompletedTaskData.status, 1);
  expect(userCompletedTaskData.completionDate, 'Completion date is not set').to.exist;
  const completionDate = userCompletedTaskData.completionDate as Timestamp;
  const creationDate = userCompletedTaskData.creationDate as Timestamp;
  expect(completionDate.toDate(), 'Completion date should be after creation date').to.be.greaterThanOrEqual(creationDate.toDate());
};

export function testUserTask(apps: OSKUnitTestApps) {
  const userTasks = [...data.userTasks];
  for (const userTask of userTasks) {
    describe(`User ${userTask.user.auth.email} - Task ${userTask.data.title}`, async () => {
      it('Create user task (Firestore)', async () => {
        await apps.firebaseTestApp.runAuthenticated(userTask.user.auth.email, userTask.user.auth.password, async (userCredential: UserCredential) => {
          const db = apps.firebaseTestApp.firestore;
          await assertSucceeds(firebaseFirestore.setDoc(firebaseFirestore.doc(db, `/users/${userCredential.user.uid}/tasks/${userTask.id}`), userTask.data));
        });
      });
      it('Check user task document has been created (Firestore)', async () => {
        await apps.firebaseTestApp.runAuthenticated(userTask.user.auth.email, userTask.user.auth.password, async (userCredential: UserCredential) => {
          const db = apps.firebaseTestApp.firestore;
          const userTaskDoc = await assertSucceeds(firebaseFirestore.getDoc(firebaseFirestore.doc(db, `/users/${userCredential.user.uid}/tasks/${userTask.id}`)));
          checkUserTaskDocumentCreated(userTaskDoc, userTask, `/users/${userCredential.user.uid}/tasks/${userTask.id}`);
        });
      }).retries(20);
      it('Complete user task (Firestore)', async () => {
        await apps.firebaseTestApp.runAuthenticated(userTask.user.auth.email, userTask.user.auth.password, async (userCredential: UserCredential) => {
          const db = apps.firebaseTestApp.firestore;
          await assertSucceeds(firebaseFirestore.setDoc(firebaseFirestore.doc(db, `/users/${userCredential.user.uid}/tasks/${userTask.id}`), { ...userTask.data, status: 1 }, { merge: true }));
        });
      });
      it('Check user completed task document has been created (Firestore)', async () => {
        await apps.firebaseTestApp.runAuthenticated(userTask.user.auth.email, userTask.user.auth.password, async (userCredential: UserCredential) => {
          const db = apps.firebaseTestApp.firestore;
          const userCompletedTaskDoc = await assertSucceeds(firebaseFirestore.getDoc(firebaseFirestore.doc(db, `/users/${userCredential.user.uid}/completedTasks/${userTask.id}`)));
          checkUserCompletedTaskDocumentCreated(userCompletedTaskDoc, userTask, `/users/${userCredential.user.uid}/completedTasks/${userTask.id}`);
        });
      }).retries(20);
      it('Check user task document has been deleted (Firestore)', async () => {
        await apps.firebaseTestApp.runAuthenticated(userTask.user.auth.email, userTask.user.auth.password, async (userCredential: UserCredential) => {
          const db = apps.firebaseTestApp.firestore;
          const userTaskDoc = await assertSucceeds(firebaseFirestore.getDoc(firebaseFirestore.doc(db, `/users/${userCredential.user.uid}/tasks/${userTask.id}`)));
          expect(userTaskDoc.exists(), 'Document has not been removed').to.be.false;
        });
      }).retries(20);
      it('Cancel user task completion (Firestore)', async () => {
        await apps.firebaseTestApp.runAuthenticated(userTask.user.auth.email, userTask.user.auth.password, async (userCredential: UserCredential) => {
          const db = apps.firebaseTestApp.firestore;
          await assertSucceeds(firebaseFirestore.setDoc(firebaseFirestore.doc(db, `/users/${userCredential.user.uid}/completedTasks/${userTask.id}`), { ...userTask.data, status: 0 }, { merge: true }));
        });
      });
      it('Check user task document has been created (Firestore)', async () => {
        await apps.firebaseTestApp.runAuthenticated(userTask.user.auth.email, userTask.user.auth.password, async (userCredential: UserCredential) => {
          const db = apps.firebaseTestApp.firestore;
          const userTaskDoc = await assertSucceeds(firebaseFirestore.getDoc(firebaseFirestore.doc(db, `/users/${userCredential.user.uid}/tasks/${userTask.id}`)));
          checkUserTaskDocumentCreated(userTaskDoc, userTask, `/users/${userCredential.user.uid}/tasks/${userTask.id}`);
        });
      }).retries(20);
      it('Check user completed task document has been deleted (Firestore)', async () => {
        await apps.firebaseTestApp.runAuthenticated(userTask.user.auth.email, userTask.user.auth.password, async (userCredential: UserCredential) => {
          const db = apps.firebaseTestApp.firestore;
          const userTaskDoc = await assertSucceeds(firebaseFirestore.getDoc(firebaseFirestore.doc(db, `/users/${userCredential.user.uid}/completedTasks/${userTask.id}`)));
          expect(userTaskDoc.exists(), 'Document has not been removed').to.be.false;
        });
      }).retries(20);
    });
  }
}
