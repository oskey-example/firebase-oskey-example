//
// firebase-oskey-example
// Copyright (c) 2021-2023, OSkey SAS. MIT License.
//

import { OSKStreetAddress } from '@oskey/core';

export type OSKTOrganization = {
    id: string;
    data: {
        isoCountryCode: string;
        taxNumber: string;
        tenant: string;
        name: string;
        streetAddress: OSKStreetAddress;
        compositeRoles: string[];
        roles: string[];
    };
};
