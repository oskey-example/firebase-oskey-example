//
// firebase-oskey-example
// Copyright (c) 2021-2023, OSkey SAS. MIT License.
//

import { OSKTUserCompanionDevice } from './user_companion_device.model';

type OSKUserDeviceType = 'mobile' | 'watch' | 'nfcTag';

export type OSKTUserDevice = {
    id: string;
    data: {
        type: OSKUserDeviceType;
        name: string;
    };
    companionDevices: OSKTUserCompanionDevice[];
};

export const create: (data: { id: string; name: string; type: OSKUserDeviceType; companionDevices: OSKTUserCompanionDevice[] }) => OSKTUserDevice = (data) => {
    return {
        id: data.id,
        data: { name: data.name, type: data.type },
        companionDevices: [...data.companionDevices],
    };
};
