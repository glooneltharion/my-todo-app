import { Component, Input } from '@angular/core';
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
    faTimes = faTimes;
}
