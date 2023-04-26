//
// firebase-oskey-example
// Copyright (c) 2021-2023, OSkey SAS. MIT License.
//

import { Timestamp } from 'firebase-admin/firestore';

import { OSKStreetAddress } from '@oskey/core';

export type OSKUserPrivateProfile = {
    streetAddress?: OSKStreetAddress;
    dateOfBirth?: Timestamp;
};
