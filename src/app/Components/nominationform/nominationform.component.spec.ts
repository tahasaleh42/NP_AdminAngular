import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NominationformComponent } from './nominationform.component';

describe('NominationformComponent', () => {
  let component: NominationformComponent;
  let fixture: ComponentFixture<NominationformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NominationformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NominationformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
