import { Component, OnInit } from '@angular/core';
import { User } from './address/user.module';
import { TestService } from './test.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular6-basics-javabrains';
  user: User;
  constructor(private test: TestService, private http: HttpClient) {

    this.test.postService('Hello service from app component');

    this.user = new User();
    this.user.firstname = 'karthik';
    this.user.lastname = 'mahadevaiah';
    this.user.phone = ['9449791224', '6361784171'];
  }

  ngOnInit() {
    const user = this.http.get('https://api.github.com/users/karthikm-14');
    user.subscribe((response) => {
      console.log(response);
    });
  }
}
