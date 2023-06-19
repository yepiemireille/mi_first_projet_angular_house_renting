import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsViewUsersComponent } from './details-view-users.component';

describe('DetailsViewUsersComponent', () => {
  let component: DetailsViewUsersComponent;
  let fixture: ComponentFixture<DetailsViewUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsViewUsersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailsViewUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
