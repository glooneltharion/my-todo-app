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
    this.todos = this.todoSerrvice.getTodos();
  }
}
