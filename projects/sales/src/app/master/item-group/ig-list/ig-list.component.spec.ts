import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IgListComponent } from './ig-list.component';

describe('IgListComponent', () => {
  let component: IgListComponent;
  let fixture: ComponentFixture<IgListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IgListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IgListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
