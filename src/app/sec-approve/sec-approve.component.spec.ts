import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecApproveComponent } from './sec-approve.component';

describe('SecApproveComponent', () => {
  let component: SecApproveComponent;
  let fixture: ComponentFixture<SecApproveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecApproveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecApproveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
