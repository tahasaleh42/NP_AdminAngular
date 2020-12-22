import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleMedicinFormComponent } from './single-medicin-form.component';

describe('SingleMedicinFormComponent', () => {
  let component: SingleMedicinFormComponent;
  let fixture: ComponentFixture<SingleMedicinFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleMedicinFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleMedicinFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
