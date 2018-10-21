import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WodezanComponent } from './wodezan.component';

describe('WodezanComponent', () => {
  let component: WodezanComponent;
  let fixture: ComponentFixture<WodezanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WodezanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WodezanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
