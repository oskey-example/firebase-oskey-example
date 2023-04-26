//
// firebase-oskey-example
// Copyright (c) 2021-2023, OSkey SAS. MIT License.
//

import { OSKCoordinate } from './coordinate.model';

export interface OSKStreetAddress {
    streetName: string;
    houseNumber: string;
    postalCode: string;
    city: string;
    country: string;
    isoCountryCode: string;
    coordinate?: OSKCoordinate;
}
