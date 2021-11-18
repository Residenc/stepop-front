import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditsuscriptionComponent } from './editsuscription.component';

describe('EditsuscriptionComponent', () => {
  let component: EditsuscriptionComponent;
  let fixture: ComponentFixture<EditsuscriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditsuscriptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditsuscriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
