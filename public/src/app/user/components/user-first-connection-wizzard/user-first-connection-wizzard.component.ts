/**
 * firebase-oskey-example
 * @copyright (c) 2020, OSkey.io. MIT License.
 * @license SEE LICENSE IN LICENSE.md
 */

import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';

import { OSKUserService } from '../../services/user.service';
import { OSKUser } from '../../models/user.model';

@Component({
  selector: 'osk-app-user-first-connection-wizzard',
  templateUrl: './user-first-connection-wizzard.component.html',
  styleUrls: ['./user-first-connection-wizzard.component.scss']
})
export class OSKUserFirstConnectionWizzardComponent /* implements OnInit, OnDestroy */ {
  // isLoading: boolean = false;
  // userAccountFormGroup: FormGroup;
  // userPublicProfileFormGroup: FormGroup;
  // userPrivateProfileFormGroup: FormGroup;

  // private userAccount: UserAccountModel;
  // private userPublicProfile: OSKUserPublicProfile;
  // private userPrivateProfile: OSKUserPrivateProfile;

  // private userAccountSub: Subscription;
  // private userPublicProfileSub: Subscription;
  // private userPrivateProfileSub: Subscription;

  constructor(private userService: OSKUserService) { }

  // ngOnInit() {
  //   this.userAccountFormGroup = new FormGroup({
  //     accountDisplayName: new FormControl('', [Validators.required]),
  //     email: new FormControl('', [Validators.required, Validators.email])
  //   });
  //   this.userPublicProfileFormGroup = new FormGroup({
  //     publicProfileDisplayName: new FormControl('', Validators.required)
  //   });
  //   this.userPrivateProfileFormGroup = new FormGroup({
  //     firstname: new FormControl('', Validators.required),
  //     middlename: new FormControl(''),
  //     lastname: new FormControl('', Validators.required),
  //     streetAddressLevel1: new FormControl('', Validators.required),
  //     streetAddressLevel2: new FormControl(''),
  //     city: new FormControl('', Validators.required),
  //     zipCode: new FormControl('', Validators.required),
  //     stateOrRegion: new FormControl(''),
  //     country: new FormControl('', Validators.required)
  //   });

  //   // User account
  //   this.userAccountSub = this.userService.user$.subscribe(
  //     userAccount => {
  //       this.userAccount = userAccount;
  //       this.accountDisplayName.setValue(this.userAccount.displayName);
  //       this.email.setValue(this.userAccount.email);
  //     }
  //   );

  //   // User public profile
  //   this.userPublicProfileSub = this.userService.userPublicProfile$.subscribe(
  //     userPublicProfile => {
  //       if (userPublicProfile) {
  //         this.userPublicProfile = userPublicProfile;
  //         this.publicProfileDisplayName.setValue(
  //           this.userPublicProfile.displayName
  //         );
  //       }
  //     }
  //   );

  //   // User private profile
  //   this.userPrivateProfileSub = this.userService.userPrivateProfile$.subscribe(
  //     userPrivateProfile => {
  //       if (userPrivateProfile) {
  //         this.userPrivateProfile = userPrivateProfile;
  //         this.firstname.setValue(this.userPrivateProfile.firstname);
  //         this.middlename.setValue(this.userPrivateProfile.middlename);
  //         this.lastname.setValue(this.userPrivateProfile.lastname);
  //         if (this.userPrivateProfile.streetAddress) {
  //           this.streetAddressLevel1.setValue(
  //             this.userPrivateProfile.streetAddress.streetAddressLevel1
  //           );
  //           this.streetAddressLevel2.setValue(
  //             this.userPrivateProfile.streetAddress.streetAddressLevel2
  //           );
  //           this.city.setValue(this.userPrivateProfile.streetAddress.city);
  //           this.zipCode.setValue(
  //             this.userPrivateProfile.streetAddress.zipCode
  //           );
  //           this.stateOrRegion.setValue(
  //             this.userPrivateProfile.streetAddress.stateOrRegion
  //           );
  //           this.country.setValue(
  //             this.userPrivateProfile.streetAddress.country
  //           );
  //         }
  //       }
  //     }
  //   );
  // }

  // ngOnDestroy() {
  //   this.userAccountSub.unsubscribe();
  //   this.userPublicProfileSub.unsubscribe();
  //   this.userPrivateProfileSub.unsubscribe();
  // }

  // get accountDisplayName() {
  //   return this.userAccountFormGroup.get('accountDisplayName');
  // }

  // get email() {
  //   return this.userAccountFormGroup.get('email');
  // }

  // get publicProfileDisplayName() {
  //   return this.userPublicProfileFormGroup.get('publicProfileDisplayName');
  // }

  // get firstname() {
  //   return this.userPrivateProfileFormGroup.get('firstname');
  // }

  // get middlename() {
  //   return this.userPrivateProfileFormGroup.get('middlename');
  // }

  // get lastname() {
  //   return this.userPrivateProfileFormGroup.get('lastname');
  // }

  // get streetAddressLevel1() {
  //   return this.userPrivateProfileFormGroup.get('streetAddressLevel1');
  // }

  // get streetAddressLevel2() {
  //   return this.userPrivateProfileFormGroup.get('streetAddressLevel2');
  // }

  // get city() {
  //   return this.userPrivateProfileFormGroup.get('city');
  // }

  // get zipCode() {
  //   return this.userPrivateProfileFormGroup.get('zipCode');
  // }

  // get stateOrRegion() {
  //   return this.userPrivateProfileFormGroup.get('stateOrRegion');
  // }

  // get country() {
  //   return this.userPrivateProfileFormGroup.get('country');
  // }

  // onSubmit(
  //   accountForm: NgForm,
  //   publicProfileForm: NgForm,
  //   privateProfileForm: NgForm
  // ) {
  //   // Check all form have been validated
  //   if (
  //     accountForm.invalid ||
  //     publicProfileForm.invalid ||
  //     privateProfileForm.invalid
  //   ) {
  //     return;
  //   }

  //   // Spin the spinner
  //   this.isLoading = true;

  //   // Prepare the account data
  //   const userAccountDocument: OSKUser = {
  //     ...this.userAccount
  //   };
  //   userAccountDocument.displayName = accountForm.value.accountDisplayName;
  //   userAccountDocument.email = accountForm.value.email;

  //   // Prepare the public profile data
  //   const userPublicProfileDocument: UserPublicProfileDocumentModel = {
  //     uid: this.userAccount.uid,
  //     displayName: publicProfileForm.value.publicProfileDisplayName
  //   };

  //   // Prepare the private profile data
  //   const userPrivateProfileDocument: UserPrivateProfileDocumentModel = {
  //     uid: this.userAccount.uid,
  //     firstname: privateProfileForm.value.firstname,
  //     middlename: privateProfileForm.value.middlename,
  //     lastname: privateProfileForm.value.lastname,
  //     streetAddress: {
  //       streetAddressLevel1: privateProfileForm.value.streetAddressLevel1,
  //       streetAddressLevel2: privateProfileForm.value.streetAddressLevel2,
  //       city: privateProfileForm.value.city,
  //       zipCode: privateProfileForm.value.zipCode,
  //       stateOrRegion: privateProfileForm.value.stateOrRegion,
  //       country: privateProfileForm.value.country
  //     }
  //   };

  //   // Save the data
  //   this.userService.saveComplete(
  //     userAccountDocument,
  //     userPublicProfileDocument,
  //     userPrivateProfileDocument
  //   );
  // }
}
