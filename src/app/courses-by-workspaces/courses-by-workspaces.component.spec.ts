import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesByWorkspacesComponent } from './courses-by-workspaces.component';

describe('CoursesByWorkspacesComponent', () => {
  let component: CoursesByWorkspacesComponent;
  let fixture: ComponentFixture<CoursesByWorkspacesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoursesByWorkspacesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursesByWorkspacesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
