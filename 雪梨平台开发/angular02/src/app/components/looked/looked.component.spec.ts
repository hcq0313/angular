import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LookedComponent } from './looked.component';

describe('LookedComponent', () => {
  let component: LookedComponent;
  let fixture: ComponentFixture<LookedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LookedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LookedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
