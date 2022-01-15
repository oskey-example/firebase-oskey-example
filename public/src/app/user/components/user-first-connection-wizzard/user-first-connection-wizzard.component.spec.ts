/**
 * firebase-oskey-example
 * @copyright (c) 2020, OSkey.io. MIT License.
 * @license SEE LICENSE IN LICENSE.md
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OSKUserFirstConnectionWizzardComponent } from './user-first-connection-wizzard.component';

describe('OSKUserFirstConnectionWizzardComponent', () => {
  let component: OSKUserFirstConnectionWizzardComponent;
  let fixture: ComponentFixture<OSKUserFirstConnectionWizzardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [OSKUserFirstConnectionWizzardComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OSKUserFirstConnectionWizzardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
