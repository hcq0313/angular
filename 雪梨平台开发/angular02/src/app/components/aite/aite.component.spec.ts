import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AiteComponent } from './aite.component';

describe('AiteComponent', () => {
  let component: AiteComponent;
  let fixture: ComponentFixture<AiteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AiteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
