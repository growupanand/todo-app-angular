import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  todos:string[] = [];
  todoInputValue:string = "";

  addTodo() {
    this.todos.push(this.todoInputValue);
    this.todoInputValue = "";
  }
}
