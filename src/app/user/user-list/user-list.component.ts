import { Component, OnInit } from '@angular/core';

import { UserService } from '../../services/user.service';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  constructor(private userService: UserService) { }

  users: any;

  ngOnInit(): void {
    this.getItems();
  }

  getItems() {
    this.userService.getUsers().subscribe( response => {
      this.users = response ;
      console.log(this.users)
    });
  }

}
