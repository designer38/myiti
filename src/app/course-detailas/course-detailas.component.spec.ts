import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseDetailasComponent } from './course-detailas.component';

describe('CourseDetailasComponent', () => {
  let component: CourseDetailasComponent;
  let fixture: ComponentFixture<CourseDetailasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseDetailasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseDetailasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
