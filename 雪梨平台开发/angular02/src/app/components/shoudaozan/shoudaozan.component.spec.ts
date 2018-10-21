import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoudaozanComponent } from './shoudaozan.component';

describe('ShoudaozanComponent', () => {
  let component: ShoudaozanComponent;
  let fixture: ComponentFixture<ShoudaozanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShoudaozanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoudaozanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
