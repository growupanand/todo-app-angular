import { Component } from '@angular/core';



type Todo = {
  id : number;
  value : string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  todos:Todo[] = [];
  todoInputValue:string = "";
  lastId = 1;

  addTodo() {
    this.todos.push({
      id : this.lastId,
      value : this.todoInputValue
    });
    this.todoInputValue = "";
    this.lastId = this.lastId + 1 ;
  }

  deleteTodo(todoId:number) {
    this.todos = this.todos.filter(todo => todo.id !== todoId);
  }

  emptyTodos() {
    this.todos = [];
  }
}
