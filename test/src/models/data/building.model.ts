//
// firebase-oskey-example
// Copyright (c) 2021-2023, OSkey SAS. MIT License.
//

import { OSKTBuildingDoor } from './building_door.model';
import { OSKTBuildingUnit } from './building_unit.model';
import { OSKTUser } from './user.model';

import { OSKStreetAddress } from '@oskey/core';
import { OSKTAccessRight } from './access_rights.model';

export type OSKTBuilding = {
    id: string;
    data: {
        name?: string;
        imageFilename?: string;
        isHiddenFromPublicSearch: boolean;
        streetAddress: OSKStreetAddress;
    };
    image?: {
        filename: string;
        sourceFilename: string;
    };
    doors: OSKTBuildingDoor[];
    units: OSKTBuildingUnit[];
    admins: OSKTUser[];
    users: {
        user: OSKTUser;
        roles: { type: 'composite' | 'simple'; roleId: string }[];
        accessRights: OSKTAccessRight[];
    }[];
};
