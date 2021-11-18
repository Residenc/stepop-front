import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppinghistoryComponent } from './shoppinghistory.component';

describe('ShoppinghistoryComponent', () => {
  let component: ShoppinghistoryComponent;
  let fixture: ComponentFixture<ShoppinghistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShoppinghistoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoppinghistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
