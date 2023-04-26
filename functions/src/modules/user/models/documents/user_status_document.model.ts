//
// firebase-oskey-example
// Copyright (c) 2021-2023, OSkey SAS. MIT License.
//

import { OSKDocument } from '@oskey/core';

export type OSKUserStatus = {
    isFirstTimeProfileCompletionRequired: boolean;
    isProfileComplete: boolean;
    apiVersion: string;
};

export type OSKUserStatusDocument = OSKUserStatus & OSKDocument;
