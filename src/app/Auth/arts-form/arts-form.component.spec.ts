import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtsFormComponent } from './arts-form.component';

describe('ArtsFormComponent', () => {
  let component: ArtsFormComponent;
  let fixture: ComponentFixture<ArtsFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtsFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
