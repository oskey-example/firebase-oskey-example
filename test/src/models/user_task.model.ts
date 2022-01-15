/**
 * firebase-oskey-example
 * @copyright (c) 2020, OSkey.io. MIT License.
 * @license SEE LICENSE IN LICENSE.md
 */

import { OSKTDUser } from './user.model';

export type OSKTDUserTask = {
  id: string;
  user: OSKTDUser;
  data: {
    title: string,
    note: string,
  };
}
