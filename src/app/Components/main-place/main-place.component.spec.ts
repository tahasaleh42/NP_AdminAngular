import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainPlaceComponent } from './main-place.component';

describe('MainPlaceComponent', () => {
  let component: MainPlaceComponent;
  let fixture: ComponentFixture<MainPlaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainPlaceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainPlaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
