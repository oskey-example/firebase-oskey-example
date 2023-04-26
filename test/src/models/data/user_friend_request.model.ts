//
// firebase-oskey-example
// Copyright (c) 2021-2023, OSkey SAS. MIT License.
//

import { OSKTUser } from '@oskey-test/models';

export type OSKTUserFriendRequest = {
    requester: OSKTUser;
    friends: OSKTUser[];
    message: string;
    toBeApproved: boolean;
};
