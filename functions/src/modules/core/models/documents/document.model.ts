//
// firebase-oskey-example
// Copyright (c) 2021-2023, OSkey SAS. MIT License.
//

import { Timestamp } from 'firebase-admin/firestore';
import { OSKDocumentProtocol } from '../../protocols/document.protocol';

export type OSKDocumentRequiredFields = {
    creationDate: Timestamp;
};

export type OSKDocument<T = OSKDocumentProtocol> = T & OSKDocumentRequiredFields;
