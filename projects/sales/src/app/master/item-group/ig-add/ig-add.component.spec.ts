import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IgAddComponent } from './ig-add.component';

describe('IgAddComponent', () => {
  let component: IgAddComponent;
  let fixture: ComponentFixture<IgAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IgAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IgAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
