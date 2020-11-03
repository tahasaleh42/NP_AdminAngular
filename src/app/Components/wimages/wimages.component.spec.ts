import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WimagesComponent } from './wimages.component';

describe('WimagesComponent', () => {
  let component: WimagesComponent;
  let fixture: ComponentFixture<WimagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WimagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WimagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
