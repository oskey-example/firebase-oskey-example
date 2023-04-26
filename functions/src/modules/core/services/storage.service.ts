//
// firebase-oskey-example
// Copyright (c) 2021-2023, OSkey SAS. MIT License.
//
import { ObjectMetadata } from 'firebase-functions/v1/storage';
import { EventContext } from 'firebase-functions';

import { OSKStorageController } from '../controllers/storage.controller';

export class OSKStorageService {
    static async onFinalize(object: ObjectMetadata, context: EventContext) {
        await OSKStorageController.default.processFile(object, context);
    }
}
