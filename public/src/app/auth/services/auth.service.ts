/**
 * firebase-oskey-example
 * @copyright (c) 2020, OSkey.io. MIT License.
 * @license SEE LICENSE IN LICENSE.md
 */

import { Injectable, OnDestroy } from '@angular/core';
import { Auth, authState, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, User } from '@angular/fire/auth';
import { map, take } from 'rxjs/operators';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OSKAuthService {

  constructor(private auth: Auth, private router: Router) { }

  get isAuthenticated$() {
    return authState(this.auth).pipe(map(user => !!user));
  }

  get userId$() {
    return authState(this.auth).pipe(map(user => (user ? user.uid : null)));
  }

  get user$() {
    return authState(this.auth);
  }

  async signInWithEmailAndPassword(email: string, password: string) {
    return await signInWithEmailAndPassword(this.auth, email, password)
  }

  async createUserWithEmailAndPassword(email: string, password: string) {
    return await createUserWithEmailAndPassword(this.auth, email, password)
  }

  signOut() {
    signOut(this.auth)
      .then(() => {
        this.router.navigate(['/']);
      })
      .catch(err => console.error(err));
  }
}
