import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccBankDetailComponent } from './acc-bank-detail.component';

describe('AccBankDetailComponent', () => {
  let component: AccBankDetailComponent;
  let fixture: ComponentFixture<AccBankDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccBankDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccBankDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
