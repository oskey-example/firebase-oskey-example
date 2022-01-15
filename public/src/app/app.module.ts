import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { provideFirebaseApp, getApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getAuth, provideAuth } from '@angular/fire/auth';

import { environment } from 'src/environments/environment';
import { OSKAppRoutingModule } from './app-routing.module';
import { OSKAppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OSKAuthComponent } from './auth/auth.component';
import { OSKUserComponent } from './user/user.component';

@NgModule({
  declarations: [
    OSKAppComponent,
    OSKAuthComponent,
    OSKUserComponent
  ],
  imports: [
    BrowserModule,
    OSKAppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    provideFirebaseApp(() => initializeApp({ ...environment.firebaseConfig })),
    provideFirestore(() => getFirestore()),
    provideAuth(() => getAuth()),
  ],
  providers: [],
  bootstrap: [OSKAppComponent]
})
export class OSKAppModule { }
