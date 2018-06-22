import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WrkspcProfileComponent } from './wrkspc-profile.component';

describe('WrkspcProfileComponent', () => {
  let component: WrkspcProfileComponent;
  let fixture: ComponentFixture<WrkspcProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WrkspcProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WrkspcProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
