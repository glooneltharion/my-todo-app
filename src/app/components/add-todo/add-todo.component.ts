import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoStatus, Todo } from '../../models/Todo';

@Component({
  selector: 'app-add-todo',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './add-todo.component.html',
  styleUrl: './add-todo.component.css'
})
export class AddTodoComponent {
  @Output() onAddTodo: EventEmitter<Todo> = new EventEmitter();
  text!: string;
  deadline!: string;
  status: TodoStatus = 'OPEN';

  onSubmit() {
    if(!this.text || !this.deadline){
      alert('Please set values for text and deadline!');
      return;
    }
    const newTodo: Todo = {
      text: this.text,
      deadline: this.deadline, 
      status: this.status,
    }

    this.onAddTodo.emit(newTodo);

    this.text = "";
    this.deadline = "";
    this.status = 'OPEN';
  }
}
