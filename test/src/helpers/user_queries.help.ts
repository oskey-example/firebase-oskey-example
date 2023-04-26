//
// firebase-oskey-example
// Copyright (c) 2021-2023, OSkey SAS. MIT License.
//

import { GPFirebaseEmulatorAdminTestApp } from 'gp-firebase-emulator-unit-test';

export async function getUidFromEmail(firebaseAdminTestApp: GPFirebaseEmulatorAdminTestApp, email: string): Promise<string> {
    // const db = firebaseAdminTestApp.firestore;
    // const docs = (await (await db.collection('/emulatorUsers').where('email', '==', email).get()).docs);

    // if (docs.length === 1) return docs[0].data().uid as string;
    // else if (docs.length === 0) throw Error(`No user could be found for email '${email}''`);
    // else throw Error(`${docs.length} users found for email '${email}''`);
    const auth = firebaseAdminTestApp.auth;
    const userRecord = await auth.getUserByEmail(email);

    return userRecord.uid;
}
