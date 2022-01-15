/**
 * firebase-oskey-example
 * @copyright (c) 2020, OSkey.io. MIT License.
 * @license SEE LICENSE IN LICENSE.md
 */

import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { OSKAuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'osk-layout-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class OSKHeaderComponent implements OnDestroy {
  public isAuthenticated = false;
  private isAuthenticatedSub: Subscription;

  constructor(
    public authService: OSKAuthService
  ) {
    this.isAuthenticatedSub = this.authService.isAuthenticated$.subscribe((isAuthenticated) => {
      this.isAuthenticated = isAuthenticated;
    })
  }

  ngOnDestroy(): void {
    this.isAuthenticatedSub.unsubscribe();
  }

  onSignOut() {
    this.authService.signOut();
  }
}
