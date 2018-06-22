import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcceptShwReqComponent } from './accept-shw-req.component';

describe('AcceptShwReqComponent', () => {
  let component: AcceptShwReqComponent;
  let fixture: ComponentFixture<AcceptShwReqComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcceptShwReqComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcceptShwReqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
