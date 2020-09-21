import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-list-favorite',
  templateUrl: './user-list-favorite.component.html',
  styleUrls: ['./user-list-favorite.component.scss']
})
export class UserListFavoriteComponent implements OnInit {

  constructor(private userService: UserService, private router: Router) { }

  users: any;
  favorites;

  ngOnInit(): void {
    this.getItems();
    this.favorites = JSON.parse(localStorage.getItem('favorites')) || [];
  }

  getItems() {
    this.userService.getUsers().subscribe( response => {
      this.users = response ;
    });
  }

  navigate(user) {
    const navigationExtras: NavigationExtras = {
      state: {
        data: user
      }
    };

    this.router.navigate([`/user/${user.id}`], navigationExtras);
  }

  isFavorite(user) {
    return this.favorites.includes(user.id);
  }

}
