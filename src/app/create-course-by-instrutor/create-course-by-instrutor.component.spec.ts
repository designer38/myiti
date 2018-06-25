import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCourseByInstrutorComponent } from './create-course-by-instrutor.component';

describe('CreateCourseByInstrutorComponent', () => {
  let component: CreateCourseByInstrutorComponent;
  let fixture: ComponentFixture<CreateCourseByInstrutorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateCourseByInstrutorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateCourseByInstrutorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
