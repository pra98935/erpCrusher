import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LibTableComponent } from './lib-table.component';

describe('LibTableComponent', () => {
  let component: LibTableComponent;
  let fixture: ComponentFixture<LibTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LibTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LibTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
