//
// firebase-oskey-example
// Copyright (c) 2021-2023, OSkey SAS. MIT License.
//

import { OSKTBuildingDoor } from './building_door.model';
import { OSKTUser } from './user.model';

export type OSKTBuildingUnit = {
    id: string;
    data: {
        name: string;
        floor: string;
        unitNumber: string;
    };
    doors: OSKTBuildingDoor[];
    managers: OSKTUser[];
    users: OSKTUser[];
    guests: OSKTUser[];
};
