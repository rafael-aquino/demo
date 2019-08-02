import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsComponent } from './posts/posts.component';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [PostsComponent, PostDetailComponent, ContactComponent, HomeComponent],
  imports: [
    CommonModule
  ]
})
export class PublimovilModule { }
