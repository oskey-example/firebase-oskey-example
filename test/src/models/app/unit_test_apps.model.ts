//
// firebase-oskey-example
// Copyright (c) 2021-2023, OSkey SAS. MIT License.
//

import { GPFirebaseEmulatorTestApp, GPFirebaseEmulatorAdminTestApp, GPFirebaseEmulatorTestAppOption } from 'gp-firebase-emulator-unit-test';

export type OSKTUnitTestApps = {
    config: GPFirebaseEmulatorTestAppOption;
    firebaseTestApp: GPFirebaseEmulatorTestApp;
    firebaseAdminTestApp: GPFirebaseEmulatorAdminTestApp;
};
