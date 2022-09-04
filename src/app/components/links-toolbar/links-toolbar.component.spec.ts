import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { LinksToolbarComponent } from './links-toolbar.component';

describe('LinksToolbarComponent', () => {
  let component: LinksToolbarComponent;
  let fixture: ComponentFixture<LinksToolbarComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ LinksToolbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinksToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
