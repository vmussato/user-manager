import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {

  data;
  favorite = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService
  ) { 
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.data = this.router.getCurrentNavigation().extras.state.data;
      }
    })
  }

  ngOnInit(): void {
    console.log(this.data);

    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];

    favorites.forEach(element => {
      if (element === this.data.id) {
        this.favorite = true;
      }
    });
  }

  addFavorite() {
    let favorites = JSON.parse(localStorage.getItem('favorites')) || [];

    favorites.push(this.data.id);

    localStorage.setItem('favorites', JSON.stringify(favorites));

    this.favorite = !this.favorite;
  }

  removeFavorite() {
    let favorites = JSON.parse(localStorage.getItem('favorites')) || [];

    favorites.forEach(element => {
      if (element === this.data.id) {
        const index = favorites.indexOf(element);
        favorites.splice(index, 1);
      }
    });

    localStorage.setItem('favorites', JSON.stringify(favorites));

    this.favorite = !this.favorite;
  }

}
