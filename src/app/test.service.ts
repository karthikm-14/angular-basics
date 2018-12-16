import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  postService(arg) {
    console.log(arg);
  }
}
