import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'hello-world-with-api-call';
  apiUrl = '';
  result = '';

  constructor(private readonly http: HttpClient) {}

  public callApi(){
    this.http.get<string>(this.apiUrl).subscribe(data => {
      this.result = 'test';
      }
    );
  }
}
