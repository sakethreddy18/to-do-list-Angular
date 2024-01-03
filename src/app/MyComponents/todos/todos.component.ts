import { Component , OnInit , Inject , PLATFORM_ID } from '@angular/core';
import { Todo } from '../../Todo';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { TodoItemComponent } from "../todo-item/todo-item.component";
import { AddTodoComponent } from '../add-todo/add-todo.component';



@Component({
    selector: 'app-todos',
    standalone: true,
    templateUrl: './todos.component.html',
    styleUrl: './todos.component.css',
    imports: [CommonModule, TodoItemComponent, AddTodoComponent]
})
export class TodosComponent implements OnInit {
  localItem! : string;
  todos!: Todo[];

   constructor(@Inject(PLATFORM_ID) private platformID: object) {
    if (isPlatformBrowser(this.platformID)) {
      const localItem = localStorage.getItem('todos');
      
      if (localItem === null) {
        this.todos = this.getDefaultTodos();
      } else {
        this.todos = JSON.parse(localItem);
      }
    } else {
      this.todos = this.getDefaultTodos();
    }
  }
  
  ngOnInit(): void {
   
  }
  deleteTodo(todo: Todo){
    console.log(todo)
    const index = this.todos.indexOf(todo)
    this.todos.splice(index , 1)
    localStorage.setItem('todos' , JSON.stringify(this.todos))
  }

  addTodo(todo : Todo){
    console.log(todo)
    this.todos.push(todo)
   localStorage.setItem('todos' , JSON.stringify(this.todos))
    
  }
  private getDefaultTodos(): Todo[] {
    return [
      {
        sno:1,
        title: "this is the title 1",
        desc : "Description 1",
        active: true
      },
      {
        sno:2,
        title: "this is the title 2",
        desc : "Description 2",
        active: true
      },
      {
        sno:3,
        title: "this is the title 3",
        desc : "Description 3",
        active: true
      },
      {
        sno:4,
        title: "this is the title 4",
        desc : "Description 4",
        active: true
      }
    ];
  }

  toggleToDo(todo : Todo){
     const index = this.todos.indexOf(todo)
     this.todos[index].active = !this.todos[index].active;
     localStorage.setItem("todos" , JSON.stringify(this.todos))
  }

 
  
  
}
