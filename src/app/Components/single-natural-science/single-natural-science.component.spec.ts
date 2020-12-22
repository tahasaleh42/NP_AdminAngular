import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleNaturalScienceComponent } from './single-natural-science.component';

describe('SingleNaturalScienceComponent', () => {
  let component: SingleNaturalScienceComponent;
  let fixture: ComponentFixture<SingleNaturalScienceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleNaturalScienceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleNaturalScienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
