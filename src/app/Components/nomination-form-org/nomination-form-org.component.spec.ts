import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NominationFormOrgComponent } from './nomination-form-org.component';

describe('NominationFormOrgComponent', () => {
  let component: NominationFormOrgComponent;
  let fixture: ComponentFixture<NominationFormOrgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NominationFormOrgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NominationFormOrgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
