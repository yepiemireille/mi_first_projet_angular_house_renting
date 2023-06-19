import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsEditUsersComponent } from './details-edit-users.component';

describe('DetailsEditUsersComponent', () => {
  let component: DetailsEditUsersComponent;
  let fixture: ComponentFixture<DetailsEditUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsEditUsersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailsEditUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
