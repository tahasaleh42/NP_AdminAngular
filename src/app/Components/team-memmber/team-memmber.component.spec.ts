import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamMemmberComponent } from './team-memmber.component';

describe('TeamMemmberComponent', () => {
  let component: TeamMemmberComponent;
  let fixture: ComponentFixture<TeamMemmberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamMemmberComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamMemmberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
