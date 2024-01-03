import { Component , Input, Output , EventEmitter } from '@angular/core';
import { Todo } from '../../Todo';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-todo-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.css'
})
export class TodoItemComponent {
  @Input() todo!: Todo;
  @Output() todoDelete: EventEmitter<Todo> = new EventEmitter();
  @Output() todoCheckbox: EventEmitter<Todo> = new EventEmitter();
  constructor() {
    
  }
  onClick(todo: Todo){
    this.todoDelete.emit(todo)
    console.log("onClick has been triggered")
  }
  onCheckboxClick(todo : Todo){
    
    this.todoCheckbox.emit(todo)
    console.log(todo)
  }

}
