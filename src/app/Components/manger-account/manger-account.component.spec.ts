import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MangerAccountComponent } from './manger-account.component';

describe('MangerAccountComponent', () => {
  let component: MangerAccountComponent;
  let fixture: ComponentFixture<MangerAccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MangerAccountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MangerAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
