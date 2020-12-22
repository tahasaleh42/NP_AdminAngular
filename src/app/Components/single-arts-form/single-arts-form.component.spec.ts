import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleArtsFormComponent } from './single-arts-form.component';

describe('SingleArtsFormComponent', () => {
  let component: SingleArtsFormComponent;
  let fixture: ComponentFixture<SingleArtsFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleArtsFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleArtsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
