import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserListFavoriteComponent } from './user-list-favorite.component';

describe('UserListFavoriteComponent', () => {
  let component: UserListFavoriteComponent;
  let fixture: ComponentFixture<UserListFavoriteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserListFavoriteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserListFavoriteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
