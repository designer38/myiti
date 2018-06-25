import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReqWorkspacesComponent } from './req-workspaces.component';

describe('ReqWorkspacesComponent', () => {
  let component: ReqWorkspacesComponent;
  let fixture: ComponentFixture<ReqWorkspacesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReqWorkspacesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReqWorkspacesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
