import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccTaxDetailComponent } from './acc-tax-detail.component';

describe('AccTaxDetailComponent', () => {
  let component: AccTaxDetailComponent;
  let fixture: ComponentFixture<AccTaxDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccTaxDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccTaxDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
