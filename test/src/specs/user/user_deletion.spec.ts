//
// firebase-oskey-example
// Copyright (c) 2021-2023, OSkey SAS. MIT License.
//

import { describe, it } from 'mocha';
import { expect } from 'chai';
import { UserCredential } from 'firebase/auth';
import { assertSucceeds } from 'gp-firebase-emulator-unit-test';

import { data } from '@oskey-test/data';
import { OSKTUnitTestApps } from '@oskey-test/models';

export function testUserDeletion(apps: OSKTUnitTestApps) {
    const users = [...data.testDeletionUsers];
    for (const user of users) {
        describe(`User ${user.auth.email} deletion`, async () => {
            it('Delete users (Auth)', async () => {
                await apps.firebaseTestApp.runAuthenticated(user.auth.email, user.auth.password, async (userCredential: UserCredential) => {
                    await assertSucceeds(userCredential.user.delete());
                });
            });
            if (user.id === users[0].id) {
                it('Check user documents have been deleted (Admin/Firestore)', async () => {
                    const db = apps.firebaseAdminTestApp.firestore;
                    const userDoc = await assertSucceeds(db.collection('/emulatorUsers').doc(user.auth.email).get());
                    expect(userDoc.exists, 'There should be one user matching this email').to.be.true;
                    const userId = userDoc.data()?.userId as string;
                    if (userId) {
                        const userDoc = await assertSucceeds(db.collection('/users').doc(userId).get());
                        expect(userDoc.exists, `Document '/users/${userId}' still exists`).to.be.false;
                        const userStatusDoc = await assertSucceeds(db.collection(`/users/${userId}/status`).doc(userId).get());
                        expect(userStatusDoc.exists, `Document '/users/${userId}/status/${userId}' still exists`).to.be.false;
                    }
                }).retries(500);
            }
        });
    }
}
