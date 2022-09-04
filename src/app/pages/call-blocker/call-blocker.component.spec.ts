import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CallBlockerComponent } from './call-blocker.component';

describe('CallBlockerComponent', () => {
  let component: CallBlockerComponent;
  let fixture: ComponentFixture<CallBlockerComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CallBlockerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CallBlockerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
