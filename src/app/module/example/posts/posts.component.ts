import { Component, OnInit } from '@angular/core';
import { Post } from '../../../share/model/post';
import { PostService } from '../post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts: Post[];

  constructor(private postService: PostService) { }

  ngOnInit() {
    this.getPost();
  }


  getPost(): void{
    this.postService.getPosts().subscribe(posts => this.posts = posts);
  }
  add(title: string, content: string): void {
    title = title.trim();
    content = content.trim();
    if (!title) { return; }
    this.postService.addPost({ title, content } as Post)
      .subscribe(post => {
        this.posts.push(post);
      });
  }
  delete(post: Post): void {
    this.posts = this.posts.filter(p => p !== post);
    this.postService.deletePost(post).subscribe();
  }

}
