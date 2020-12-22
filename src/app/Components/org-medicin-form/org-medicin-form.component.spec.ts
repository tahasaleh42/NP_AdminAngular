import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrgMedicinFormComponent } from './org-medicin-form.component';

describe('OrgMedicinFormComponent', () => {
  let component: OrgMedicinFormComponent;
  let fixture: ComponentFixture<OrgMedicinFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrgMedicinFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrgMedicinFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
