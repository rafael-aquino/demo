import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from '../app/module/example/users/users.component';
import { DashboardComponent }   from '../app/module/example/dashboard/dashboard.component';
import { UserDetailComponent }  from '../app/module/example/user-detail/user-detail.component';
import { PostsComponent } from '../app/module/publimovil/posts/posts.component';
import { PostDetailComponent }  from '../app/module/publimovil/post-detail/post-detail.component';
import { HomeComponent } from './module/publimovil/home/home.component';
import { ContactComponent } from './module/publimovil/contact/contact.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'users', component: UsersComponent },
  { path: 'detail/:id', component: UserDetailComponent },
  { path: 'posts', component: PostsComponent },
  { path: 'posts/:id', component: PostDetailComponent },
  { path: 'home', component: HomeComponent },
  { path: 'contact', component: ContactComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }