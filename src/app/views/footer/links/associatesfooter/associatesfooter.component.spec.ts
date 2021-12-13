import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssociatesfooterComponent } from './associatesfooter.component';

describe('AssociatesfooterComponent', () => {
  let component: AssociatesfooterComponent;
  let fixture: ComponentFixture<AssociatesfooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssociatesfooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssociatesfooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
