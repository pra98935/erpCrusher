import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImAddComponent } from './im-add.component';

describe('ImAddComponent', () => {
  let component: ImAddComponent;
  let fixture: ComponentFixture<ImAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
