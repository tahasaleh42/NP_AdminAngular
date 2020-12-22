import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrgEqiteFormComponent } from './org-eqite-form.component';

describe('OrgEqiteFormComponent', () => {
  let component: OrgEqiteFormComponent;
  let fixture: ComponentFixture<OrgEqiteFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrgEqiteFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrgEqiteFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
