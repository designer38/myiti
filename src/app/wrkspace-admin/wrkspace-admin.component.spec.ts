import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WrkspaceAdminComponent } from './wrkspace-admin.component';

describe('WrkspaceAdminComponent', () => {
  let component: WrkspaceAdminComponent;
  let fixture: ComponentFixture<WrkspaceAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WrkspaceAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WrkspaceAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
