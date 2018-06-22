import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShwReqComponent } from './shw-req.component';

describe('ShwReqComponent', () => {
  let component: ShwReqComponent;
  let fixture: ComponentFixture<ShwReqComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShwReqComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShwReqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
