//
// firebase-oskey-example
// Copyright (c) 2021-2023, OSkey SAS. MIT License.
//

import { OSKStreetAddress } from '@oskey/core';

export function streetAddressToString(streetAddress: OSKStreetAddress): string {
    return `${streetAddress.houseNumber} ${streetAddress.streetName}, ${streetAddress.postalCode}, ${streetAddress.city}, ${streetAddress.country}`;
}
