import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserDetailComponent } from './user/user-detail/user-detail.component';
import { UserListFavoriteComponent } from './user/user-list-favorite/user-list-favorite.component';
import { UserListComponent } from './user/user-list/user-list.component';

const routes: Routes = [
  { path: 'user-list', component: UserListComponent },
  { path: 'favorites', component: UserListFavoriteComponent },
  { path: 'user/:id', component: UserDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
