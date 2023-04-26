//
// firebase-oskey-example
// Copyright (c) 2021-2023, OSkey SAS. MIT License.
//

import { initializeApp } from 'firebase-admin/app';
import * as functions from 'firebase-functions';
import { FunctionBuilder } from 'firebase-functions';

import * as coreTriggers from '@oskey/core';
import * as userTriggers from '@oskey/user';

/**
 * Initialize app
 */
initializeApp();
const functionBuilder: FunctionBuilder = functions.region('europe-west1');

/**
 * Storage
 */
coreTriggers.OSKStorageController.default.registerTriggers([{ regExp: userTriggers.profileImageRegExp, exec: userTriggers.OSKUserController.default.updateProfileImage }]);

// /**
//  * Secrets
//  */
// const sengridApiKey = defineSecret('SENDGRID_API_KEY');

/**
 * Triggers
 */
export const core = {
    ...coreTriggers.getStorageTriggers(functionBuilder),
};
export const user = {
    ...userTriggers.getAuthTriggers(functionBuilder),
    ...userTriggers.getFirestoreTriggers(functionBuilder),
    // ...userTriggers.getCallableFunctionTriggers(functionBuilder),
};
