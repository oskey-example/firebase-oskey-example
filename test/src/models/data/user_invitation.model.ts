//
// firebase-oskey-example
// Copyright (c) 2021-2023, OSkey SAS. MIT License.
//

// import { OSKTBuilding } from './building.model';
// import { OSKTBuildingDoor } from './building_door.model';
// import { OSKTBuildingUnit } from './building_unit.model';
// import { OSKTUser } from './user.model';

// export type OSKTUserAccessInvitation = {
//     id: string;
//     accessId: string;
//     data: {
//         buildingId: OSKTBuilding;
//         unitId?: OSKTBuildingUnit;
//         title: string;
//         notes?: string;
//         startDate: Date;
//         endDate: Date;
//         accessRights: {
//             validity: 'oneTime' | 'permanent' | 'recurrent';
//             recurrence?: {
//                 periodicity: 'daily' | 'weekly' | 'monthly';
//                 onWeekDays: {
//                     monday: boolean;
//                     tuesday: boolean;
//                     wednesday: boolean;
//                     thursday: boolean;
//                     friday: boolean;
//                     saturday: boolean;
//                     sunday: boolean;
//                 };
//                 onMonthDay: number;
//             };
//         }[];
//     };
//     invitees: OSKTUser[];
//     doors: OSKTBuildingDoor[];
// };

// import { OSKAccessRight } from '@oskey/core/access';
import { OSKTAccessRight } from './access_rights.model';
import { OSKTBuilding } from './building.model';
import { OSKTBuildingDoor } from './building_door.model';
import { OSKTBuildingUnit } from './building_unit.model';
import { OSKTUser } from './user.model';

export type OSKTUserInvitation = {
    id: string;
    accessId: string;
    data: {
        buildingId: OSKTBuilding;
        unitId?: OSKTBuildingUnit;
        title: string;
        notes?: string;
        startDate: Date;
        endDate: Date;
        accessRights: OSKTAccessRight[];
    };
    inviter: OSKTUser;
    invitees: OSKTUser[];
    doors: OSKTBuildingDoor[];
};
