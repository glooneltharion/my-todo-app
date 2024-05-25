import { Injectable } from '@angular/core';
import { TODOS } from '../mock-data'
import { Todo } from '../models/Todo';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private apiUrl = 'http://localhost:5000/todos';

  constructor(private http: HttpClient) { }

  getTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(this.apiUrl);
  }

  deleteTodo(todo: Todo): Observable<Todo>{
    const url = `${this.apiUrl}/${todo.id}`;
    return this.http.delete<Todo>(url);
  }

  updateTodoStatus(todo: Todo): Observable<Todo>{
    const url = `${this.apiUrl}/${todo.id}`;
    return this.http.put<Todo>(url, todo);
  }

}
