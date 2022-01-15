/**
 * firebase-oskey-example
 * @copyright (c) 2020, OSkey.io. MIT License.
 * @license SEE LICENSE IN LICENSE.md
 */

import { OSKTDUser } from '../models/user.model';
import { OSKTDUserTask } from '../models/user_task.model';

const johnDoe: OSKTDUser = {
  id: 'john-doe',
  auth: {
    email: 'john.doe@oskey.dbg',
    password: 'Test+1234'
  },
  data: {
    privateProfile: {
      fullName: 'John DOE'
    },
    publicProfile: {
      displayName: 'John D.'
    }
  }
};

const janeDoe: OSKTDUser = {
  id: 'jane-doe',
  auth: {
    email: 'jane.doe@oskey.dbg',
    password: 'Test+1234'
  },
  data: {
    privateProfile: {
      fullName: 'Jane DOE'
    },
    publicProfile: {
      displayName: 'Jane D.'
    }
  }
};

const testDeletionUser1: OSKTDUser = {
  id: 'test-deletion-1',
  auth: {
    // uid: "test-deletion-1",
    email: 'test.deletion.1@oskey.dbg',
    password: 'Test+1234'
  }
};

const johnDoeTask: OSKTDUserTask = {
  id: 'task1',
  user: johnDoe,
  data: {
    title: 'Something to do',
    note: 'There\'s quite a bit to do: this, this, more of this, then that'
  }
};

const users = [johnDoe, janeDoe];
const userTasks = [johnDoeTask];

export const data = {
  testDeletionUser1: testDeletionUser1,
  users: users,
  userTasks: userTasks
};
