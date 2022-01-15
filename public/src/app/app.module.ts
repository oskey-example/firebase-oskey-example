import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [OSKAppComponent]
})
export class OSKAppModule { }
