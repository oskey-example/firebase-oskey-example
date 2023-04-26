//
// firebase-oskey-example
// Copyright (c) 2021-2023, OSkey SAS. MIT License.
//

import { OSKDocument } from '@oskey/core';

import { OSKUserPublicProfile } from './user_public_profile.model';
import { OSKUserPrivateProfile } from './user_private_profile.model';

export type OSKUser = {
    userId: string;
    email: string;
    publicProfile: OSKUserPublicProfile;
    privateProfile: OSKUserPrivateProfile;
};

export type OSKUserDocument = OSKUser & OSKDocument;
