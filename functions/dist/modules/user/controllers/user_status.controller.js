"use strict";
//
// firebase-oskey-example
// Copyright (c) 2021-2023, OSkey SAS. MIT License.
//
Object.defineProperty(exports, "__esModule", { value: true });
exports.OSKUserStatusController = void 0;
const firestore_1 = require("firebase-admin/firestore");
const core_1 = require("../../core");
class OSKUserStatusController extends core_1.OSKDocumentController {
    constructor() {
        super();
    }
    async get(userId) {
        return await OSKUserStatusController.default._get(`/users/${userId}/status`, userId);
    }
    async save(userId, data) {
        await OSKUserStatusController.default._set(`/users/${userId}/status`, userId, data);
    }
    async create(userId) {
        const ts = firestore_1.Timestamp.now();
        const status = {
            isProfileComplete: false,
            isFirstTimeProfileCompletionRequired: true,
            apiVersion: '0.2.0',
            creationDate: ts,
        };
        await OSKUserStatusController.default.save(userId, status);
    }
    async delete(userId) {
        await OSKUserStatusController.default._delete(`/users/${userId}/status`, userId);
    }
    async setUserProfileCompletionStatus(userId, publicProfile, privateProfile) {
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
            }
            else if (status.isProfileComplete) {
                status.isProfileComplete = false;
                await OSKUserStatusController.default.save(userId, status);
            }
        }
    }
}
exports.OSKUserStatusController = OSKUserStatusController;
OSKUserStatusController.default = new OSKUserStatusController();
//# sourceMappingURL=user_status.controller.js.map