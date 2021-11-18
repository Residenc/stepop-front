import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaleshistoryComponent } from './saleshistory.component';

describe('SaleshistoryComponent', () => {
  let component: SaleshistoryComponent;
  let fixture: ComponentFixture<SaleshistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaleshistoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SaleshistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
