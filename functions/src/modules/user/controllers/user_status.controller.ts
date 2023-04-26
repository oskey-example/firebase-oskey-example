//
// firebase-oskey-example
// Copyright (c) 2021-2023, OSkey SAS. MIT License.
//

import { Timestamp } from 'firebase-admin/firestore';
import { OSKDocumentController } from '@oskey/core';

import { OSKUserStatusDocument } from '../models/documents/user_status_document.model';
import { OSKUserPrivateProfile } from '../models/documents/user_private_profile.model';
import { OSKUserPublicProfile } from '../models/documents/user_public_profile.model';

export class OSKUserStatusController extends OSKDocumentController<OSKUserStatusDocument> {
    static default = new OSKUserStatusController();

    constructor() {
        super();
    }

    async get(userId: string): Promise<OSKUserStatusDocument | undefined> {
        return await OSKUserStatusController.default._get(`/users/${userId}/status`, userId);
    }

    async save(userId: string, data: OSKUserStatusDocument) {
        await OSKUserStatusController.default._set(`/users/${userId}/status`, userId, data);
    }

    async create(userId: string) {
        const ts = Timestamp.now();

        const status: OSKUserStatusDocument = {
            isProfileComplete: false,
            isFirstTimeProfileCompletionRequired: true,
            apiVersion: '0.2.0',
            creationDate: ts,
        };

        await OSKUserStatusController.default.save(userId, status);
    }

    async delete(userId: string) {
        await OSKUserStatusController.default._delete(`/users/${userId}/status`, userId);
    }

    async setUserProfileCompletionStatus(userId: string, publicProfile: OSKUserPublicProfile, privateProfile: OSKUserPrivateProfile) {
        const status = await OSKUserStatusController.default.get(userId);
        if (status) {
            // Check user profile is completed
            const firstName = publicProfile.firstName;
            const lastName = publicProfile.lastName;
            const streetAddress = privateProfile.streetAddress;
            const dateOfBirth = privateProfile.dateOfBirth;
            if (firstName.length > 0 && lastName.length > 0 && streetAddress && dateOfBirth) {
                status.isFirstTimeProfileCompletionRequired = false;
                status.isProfileComplete = true;
                await OSKUserStatusController.default.save(userId, status);
            } else if (status.isProfileComplete) {
                status.isProfileComplete = false;
                await OSKUserStatusController.default.save(userId, status);
            }
        }
    }
}
