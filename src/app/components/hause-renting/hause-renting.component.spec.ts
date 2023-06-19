import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HauseRentingComponent } from './hause-renting.component';

describe('HouseRentingComponent', () => {
  let component: HauseRentingComponent;
  let fixture: ComponentFixture<HauseRentingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HauseRentingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HauseRentingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
