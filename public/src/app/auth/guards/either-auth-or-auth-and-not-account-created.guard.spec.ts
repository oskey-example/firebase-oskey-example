/**
 * firebase-oskey-example
 * @copyright (c) 2020, OSkey.io. MIT License.
 * @license SEE LICENSE IN LICENSE.md
 */

import { TestBed, inject } from '@angular/core/testing';

import { OSKEitherNotAuthOrAuthAndCompletedGuard } from './either-not-auth-or-auth-and-completed.guard';

describe('OSKEitherNotAuthOrAuthAndCompletedGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OSKEitherNotAuthOrAuthAndCompletedGuard]
    });
  });

  it('should ...', inject(
    [OSKEitherNotAuthOrAuthAndCompletedGuard],
    (guard: OSKEitherNotAuthOrAuthAndCompletedGuard) => {
      expect(guard).toBeTruthy();
    }
  ));
});
