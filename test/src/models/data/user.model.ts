//
// firebase-oskey-example
// Copyright (c) 2021-2023, OSkey SAS. MIT License.
//

import { OSKTAuth } from './auth.model';
import { OSKTUserDevice } from './user_device.model';

import { OSKStreetAddress } from '@oskey/core';

export type OSKTUser = {
    id: string;
    auth: OSKTAuth;
    data: {
        publicProfile: {
            firstName: string;
            lastName: string;
            profileImageFilename?: string;
        };
        privateProfile: {
            dateOfBirth: Date;
            streetAddress: OSKStreetAddress;
        };
    };
    devices: OSKTUserDevice[];
    // friends: OSKTUser[];
    // friendRequests: OSKTUser[];
    profileImage?: {
        filename: string;
        sourceFilename: string;
    };
};
