import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrgNaturalScienceComponent } from './org-natural-science.component';

describe('OrgNaturalScienceComponent', () => {
  let component: OrgNaturalScienceComponent;
  let fixture: ComponentFixture<OrgNaturalScienceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrgNaturalScienceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrgNaturalScienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
