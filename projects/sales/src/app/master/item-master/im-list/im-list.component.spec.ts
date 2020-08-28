import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImListComponent } from './im-list.component';

describe('ImListComponent', () => {
  let component: ImListComponent;
  let fixture: ComponentFixture<ImListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
