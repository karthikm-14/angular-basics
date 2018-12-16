import { Component, OnInit } from '@angular/core';
import { TestService } from './../test.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  constructor(private test: TestService) {
    this.test.postService('Calling service from view component');
  }

  ngOnInit() {
  }

}
