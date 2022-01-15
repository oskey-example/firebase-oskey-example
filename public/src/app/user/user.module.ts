/**
 * firebase-oskey-example
 * @copyright (c) 2020, OSkey.io. MIT License.
 * @license SEE LICENSE IN LICENSE.md
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OSKCoreModule } from '../core/core.module';
import { OSKUserRoutingModule } from './user-routing.module';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,

    OSKCoreModule,
    OSKUserRoutingModule
  ]
})
export class OSKUserModule { }
