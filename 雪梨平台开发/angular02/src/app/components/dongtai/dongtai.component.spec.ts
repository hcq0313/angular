import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DongtaiComponent } from './dongtai.component';

describe('DongtaiComponent', () => {
  let component: DongtaiComponent;
  let fixture: ComponentFixture<DongtaiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DongtaiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DongtaiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
