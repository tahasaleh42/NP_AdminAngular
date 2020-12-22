import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrgSocialFormComponent } from './org-social-form.component';

describe('OrgSocialFormComponent', () => {
  let component: OrgSocialFormComponent;
  let fixture: ComponentFixture<OrgSocialFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrgSocialFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrgSocialFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
