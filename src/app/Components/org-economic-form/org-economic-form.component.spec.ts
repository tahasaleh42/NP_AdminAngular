import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrgEconomicFormComponent } from './org-economic-form.component';

describe('OrgEconomicFormComponent', () => {
  let component: OrgEconomicFormComponent;
  let fixture: ComponentFixture<OrgEconomicFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrgEconomicFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrgEconomicFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
