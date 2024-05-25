import { Injectable } from '@angular/core';
import { TODOS } from '../mock-data'
import { Todo } from '../models/Todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor() { }

  getTodos(): Todo[] {
    return TODOS;
  }
}
