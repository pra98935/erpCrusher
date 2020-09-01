import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccAddressComponent } from './acc-address.component';

describe('AccAddressComponent', () => {
  let component: AccAddressComponent;
  let fixture: ComponentFixture<AccAddressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccAddressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
