import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleSocialFormComponent } from './single-social-form.component';

describe('SingleSocialFormComponent', () => {
  let component: SingleSocialFormComponent;
  let fixture: ComponentFixture<SingleSocialFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleSocialFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleSocialFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
