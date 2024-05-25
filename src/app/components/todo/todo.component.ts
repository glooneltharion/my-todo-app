import { Component, Input, Output, EventEmitter} from '@angular/core';
import { Todo } from '../../models/Todo';
import { CommonModule } from '@angular/common'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
export class TodoComponent {
    @Input() todo!: Todo;
    @Output() onDeleteTodo: EventEmitter<Todo> = new EventEmitter;
    @Output() onToggleStatus: EventEmitter<Todo> = new EventEmitter;
    faTimes = faTimes;

    onDelete(todo: Todo){
      this.onDeleteTodo.emit(todo);
    }

    onToggle(todo: Todo){
      this.onToggleStatus.emit(todo);
    }
}
