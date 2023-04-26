//
// firebase-oskey-example
// Copyright (c) 2021-2023, OSkey SAS. MIT License.
//

import { FunctionBuilder } from 'firebase-functions/v1';
import { OSKStorageService } from './services/storage.service';

/**
 * Models
 */

export { OSKDocument } from './models/documents/document.model';
export { OSKDocumentList } from './models/documents/document_list.model';
export { OSKDocumentId } from './models/documents/document_id.model';
export { OSKCoordinate } from './models/shared/coordinate.model';
export { OSKDoorInfo } from './models/shared/door_info.model';
export { OSKPhoneNumber } from './models/shared/phone_number.model';
export { OSKStreetAddress } from './models/shared/street_address.model';

/**
 * Controllers
 */

export { OSKQueryFilter, OSKDocumentController } from './controllers/document.controller';
export { OSKDocumentAndMessageController } from './controllers/document_and_message.controller';
export { OSKMessageController } from './controllers/message.controller';
export { OSKStorageController } from './controllers/storage.controller';

/**
 * Trigger
 */
export function getStorageTriggers(functionBuilder: FunctionBuilder) {
    const storage = functionBuilder.region('europe-west1').storage;
    return {
        onStorageFileFinalized: storage.bucket().object().onFinalize(OSKStorageService.onFinalize),
    };
}
