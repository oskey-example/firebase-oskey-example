//
// firebase-oskey-example
// Copyright (c) 2021-2023, OSkey SAS. MIT License.
//

import { OSKStreetAddress } from './street_address.model';

export interface OSKDoorInfo {
    buildingId: string;
    doorId: string;
    name: string;
    streetAddress: OSKStreetAddress;
}
