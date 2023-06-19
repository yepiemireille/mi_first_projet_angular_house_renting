import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsAddUsersComponent } from './details-add-users.component';

describe('DetailsAddUsersComponent', () => {
  let component: DetailsAddUsersComponent;
  let fixture: ComponentFixture<DetailsAddUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsAddUsersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailsAddUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
