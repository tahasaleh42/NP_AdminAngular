import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrgArtsFormComponent } from './org-arts-form.component';

describe('OrgArtsFormComponent', () => {
  let component: OrgArtsFormComponent;
  let fixture: ComponentFixture<OrgArtsFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrgArtsFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrgArtsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
