import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditpaysComponent } from './editpays.component';

describe('EditpaysComponent', () => {
  let component: EditpaysComponent;
  let fixture: ComponentFixture<EditpaysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditpaysComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditpaysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
