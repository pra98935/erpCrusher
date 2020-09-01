import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccContactDetailsComponent } from './acc-contact-details.component';

describe('AccContactDetailsComponent', () => {
  let component: AccContactDetailsComponent;
  let fixture: ComponentFixture<AccContactDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccContactDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccContactDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
