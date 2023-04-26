//
// firebase-oskey-example
// Copyright (c) 2021-2023, OSkey SAS. MIT License.
//

export type OSKTUserCompanionDevice = {
    id: string;
    data: {
        type: 'watch';
        name: string;
    };
};

export const create: (data: { id: string; name: string }) => OSKTUserCompanionDevice = (data) => {
    return {
        id: data.id,
        data: { name: data.name, type: 'watch' },
    };
};
