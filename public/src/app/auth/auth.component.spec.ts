import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OSKAuthComponent } from './auth.component';

describe('OSKAuthComponent', () => {
  let component: OSKAuthComponent;
  let fixture: ComponentFixture<OSKAuthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OSKAuthComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OSKAuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
