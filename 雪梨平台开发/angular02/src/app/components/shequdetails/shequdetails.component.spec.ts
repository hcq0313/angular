import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShequdetailsComponent } from './shequdetails.component';

describe('ShequdetailsComponent', () => {
  let component: ShequdetailsComponent;
  let fixture: ComponentFixture<ShequdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShequdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShequdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
