import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NearestBarsComponent } from './nearest-bars.component';

describe('NearestBarsComponent', () => {
  let component: NearestBarsComponent;
  let fixture: ComponentFixture<NearestBarsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NearestBarsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NearestBarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
