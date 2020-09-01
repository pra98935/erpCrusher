import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccAddComponent } from './acc-add.component';

describe('AccAddComponent', () => {
  let component: AccAddComponent;
  let fixture: ComponentFixture<AccAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
