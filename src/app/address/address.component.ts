import { Component, OnInit, Input } from '@angular/core';
import { User } from './user.module';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {
  @Input() city: string;
  @Input() user: User;
  address: any;
  isCollapsed = true;
  isCollapsedText = 'Expand';
  inputString = 'Initial Value';
  constructor() { }

  ngOnInit() {

  }

  toggleAddress() {
    this.isCollapsed = !this.isCollapsed;
    this.isCollapsedText = this.isCollapsed ? 'Expand' : 'Collapse';
  }

}
