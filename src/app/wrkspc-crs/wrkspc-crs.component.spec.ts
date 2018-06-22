import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WrkspcCrsComponent } from './wrkspc-crs.component';

describe('WrkspcCrsComponent', () => {
  let component: WrkspcCrsComponent;
  let fixture: ComponentFixture<WrkspcCrsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WrkspcCrsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WrkspcCrsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
