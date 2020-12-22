import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleEqiteFormComponent } from './single-eqite-form.component';

describe('SingleEqiteFormComponent', () => {
  let component: SingleEqiteFormComponent;
  let fixture: ComponentFixture<SingleEqiteFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleEqiteFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleEqiteFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
