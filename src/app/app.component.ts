import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

interface todoItem {
  id: number,
  description: string,
  details: string,
  done: boolean
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'hello-world-with-api-call';
  apiUrl = 'https://spring-boot-complete-1642649420913.azurewebsites.net';
  result: todoItem[] = [];
  todo = {
    id: null,
    description : '',
    details : '',
    done : null
  }

  constructor(private readonly http: HttpClient) {}

  public callApi(){
    this.http.get<todoItem[]>(this.apiUrl + '/getTodo').subscribe(data => {
      this.result = data;
      }
    );
  }

  public pushToApi(){
    this.http.post<todoItem>(this.apiUrl + '/postTodo', this.todo).subscribe(data => {
      this.callApi();
      this.todo.id = null;
      this.todo.details = '';
      this.todo.description = '';
      this.todo.done = null;
      console.log('Success');
    })
  }
}
