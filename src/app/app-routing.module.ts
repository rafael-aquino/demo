import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from '../app/module/example/users/users.component';
import { DashboardComponent }   from '../app/module/example/dashboard/dashboard.component';
import { UserDetailComponent }  from '../app/module/example/user-detail/user-detail.component';
import { HomeComponent } from './module/example/home/home.component';
import { PostDetailComponent } from './module/example/post-detail/post-detail.component';
import { PostsComponent } from './module/example/posts/posts.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'posts', component: PostsComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }