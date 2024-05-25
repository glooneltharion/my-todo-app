import { Component, OnInit } from '@angular/core';
import { Todo } from '../../models/Todo';
import { CommonModule } from '@angular/common';
import { TodoComponent } from '../todo/todo.component';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [CommonModule, TodoComponent],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.css'
})
export class TodosComponent implements OnInit {
  todos: Todo[] = [];

  constructor(private todoSerrvice: TodoService){}

  ngOnInit(): void {
    this.todoSerrvice.getTodos().subscribe(todos => {
      this.todos = todos;
    });
  }

  deleteTodo(todo: Todo){
    this.todoSerrvice.deleteTodo(todo).subscribe(
      () => (this.todos = this.todos.filter((t) => t.id !== todo.id))
    );
    console.log(todo);
  }

  toggleStatus(todo: Todo){
    switch(todo.status){
      case 'OPEN': 
      todo.status = 'PROGRESS'
      break;
      case 'PROGRESS': 
      todo.status = 'TESTING'
      break;
      case 'TESTING': 
      todo.status = 'DONE'
      break;
      case 'DONE': 
      break;
      default:
      break;
    }
    console.log(todo.status);
    this.todoSerrvice.updateTodoStatus(todo).subscribe();
  }
}
