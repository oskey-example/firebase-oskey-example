/**
 * firebase-oskey-example
 * @copyright (c) 2020, OSkey.io. MIT License.
 * @license SEE LICENSE IN LICENSE.md
 */

import { AbstractControl, FormGroup } from '@angular/forms';

export class OSKValidators {

  constructor() { }

  static mustMatch(matchingControlName: string) {
    return (control: AbstractControl) => {
      //safety check
      if (control.value === control.parent?.get(matchingControlName)?.value) { return null }
      return { error: 'Passwords don\'t match' };
    };
  }
}