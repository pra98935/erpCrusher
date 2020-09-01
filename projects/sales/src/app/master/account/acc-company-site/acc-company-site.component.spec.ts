import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccCompanySiteComponent } from './acc-company-site.component';

describe('AccCompanySiteComponent', () => {
  let component: AccCompanySiteComponent;
  let fixture: ComponentFixture<AccCompanySiteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccCompanySiteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccCompanySiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
