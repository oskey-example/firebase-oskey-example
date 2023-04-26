//
// firebase-oskey-example
// Copyright (c) 2021-2023, OSkey SAS. MIT License.
//

import { OSKTAccessControlDevice } from './access_control_device.model';

import { OSKStreetAddress } from '../../../functions/src/firebase_firestore/models/street_address.model';

export type OSKTBuildingDoor = {
    id: string;
    data: {
        name: string;
        streetAddress: OSKStreetAddress;
    };
    accessControlDevices: OSKTAccessControlDevice[];
};
