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

  constructor() {
    const initialTodos = localStorage.getItem("todos");
    this.todos = initialTodos ? JSON.parse(initialTodos) : [];
    this.lastId = this.todos.length > 0 ? this.todos[this.todos.length - 1].id + 1 : 1;
  }

  addTodo() {
    const newTodo = {
      id : this.lastId,
      value : this.todoInputValue
    };
    this.todos.push(newTodo);
    this.saveTodos();
    this.todoInputValue = "";
    this.lastId = this.lastId + 1 ;
  }

  deleteTodo(todoId:number) {
    this.todos = this.todos.filter(todo => todo.id !== todoId);
    this.saveTodos();
  }

  emptyTodos() {
    this.todos = [];
    localStorage.setItem("todos", JSON.stringify([]));
  }

  saveTodos() {
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }
}
