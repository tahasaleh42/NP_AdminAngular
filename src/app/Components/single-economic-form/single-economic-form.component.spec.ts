import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleEconomicFormComponent } from './single-economic-form.component';

describe('SingleEconomicFormComponent', () => {
  let component: SingleEconomicFormComponent;
  let fixture: ComponentFixture<SingleEconomicFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleEconomicFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleEconomicFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
