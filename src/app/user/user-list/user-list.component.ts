import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

import { UserService } from '../../services/user.service';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  constructor(private userService: UserService, private router: Router) { }

  users: any;

  ngOnInit(): void {
    this.getItems();
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

}
