import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OSKUserComponent } from './user.component';

describe('OSKUserComponent', () => {
  let component: OSKUserComponent;
  let fixture: ComponentFixture<OSKUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OSKUserComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OSKUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
