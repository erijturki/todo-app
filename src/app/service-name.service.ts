import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from './todo';



@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todoDetailShowModal=false
  todoUpdateShowModal=false
  todoAddShowModal=false

  constructor(private httpClient : HttpClient) { }

  getTodoList():Observable<Todo[]>{
    return this.httpClient.get<Todo[]>("http://localhost:3000/todos")
  }

  deleteTodo(todo:Todo):Observable<Todo[]>{
    return this.httpClient.delete<Todo[]>(`http://localhost:3000/todos/${todo.id}`)
  }

  getTodoById(todo:Todo):Observable<Todo>{
    return this.httpClient.get<Todo>(`http://localhost:3000/todos/${todo.id}`)
  }
  updateTodo(todo:Todo):Observable<Todo>{
    return this.httpClient.put<Todo>(`http://localhost:3000/todos/${todo.id}`,todo)
  }

  addTodo(newTodo:Todo): Observable<Todo> {
    return this.httpClient.post<Todo>("http://localhost:3000/todos", newTodo);
  }
}