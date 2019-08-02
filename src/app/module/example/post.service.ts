import { Injectable } from '@angular/core';
import { Post } from '../../share/model/post';
import { MessageService } from '../../share/service/message.service';
import { Observable, of} from 'rxjs';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private postsUrl = 'api/posts';  // URL to web api
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }
/*   getUsers(): Observable<User[]>{
    this.messageService.add('UserService: fetched users');
    return of(USERS);
  } */

  /** GET heroes from the server */
/*   getUsers (): Observable<User[]> {
    this.messageService.add('UserService: fetched users');
    return this.http.get<User[]>(this.usersUrl)
  }
 */

  getPosts (): Observable<Post[]> {
    return this.http.get<Post[]>(this.postsUrl)
      .pipe(
        tap(_ => this.log('fetched posts')),
        catchError(this.handleError<Post[]>('getPosts', []))
      );
  }
  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`PostService: ${message}`);
  }
/*   getUser(id: number): Observable<User> {
    // TODO: send the message _after_ fetching the hero
    this.messageService.add(`UserService: fetched user id=${id}`);
    return of(USERS.find(user => user.id === id));
  } */

  /** GET hero by id. Will 404 if id not found */
  getPost(id: number): Observable<Post> {
    const url = `${this.postsUrl}/${id}`;
    return this.http.get<Post>(url).pipe(
      tap(_ => this.log(`fetched post id=${id}`)),
      catchError(this.handleError<Post>(`getPost id=${id}`))
    );
  }

  /** PUT: update the hero on the server */
  updatePost (post: Post): Observable<any> {
    return this.http.put(this.postsUrl, post, this.httpOptions).pipe(
      tap(_ => this.log(`updated post id=${post.id}`)),
      catchError(this.handleError<any>('updatePost'))
    );
  }

  /** POST: add a new hero to the server */
  addPost (post: Post): Observable<Post> {
    return this.http.post<Post>(this.postsUrl, post, this.httpOptions).pipe(
      tap((newPost: Post) => this.log(`added post w/ id=${newPost.id}`)),
      catchError(this.handleError<Post>('addPost'))
    );
  }

  /** DELETE: delete the hero from the server */
  deletePost (post: Post | number): Observable<Post> {
    const id = typeof post === 'number' ? post : post.id;
    const url = `${this.postsUrl}/${id}`;

    return this.http.delete<Post>(url, this.httpOptions).pipe(
      tap(_ => this.log(`deleted post id=${id}`)),
      catchError(this.handleError<Post>('deletePost'))
    );
  }

  /* GET users whose name contains search term */
  searchPosts(term: string): Observable<Post[]> {
    if (!term.trim()) {
      // if not search term, return empty hero array.
      return of([]);
    }
    return this.http.get<Post[]>(`${this.postsUrl}/?title=${term}`).pipe(
      tap(_ => this.log(`found posts matching "${term}"`)),
      catchError(this.handleError<Post[]>('searchPosts', []))
    );
  }

  /**
 * Handle Http operation that failed.
 * Let the app continue.
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
