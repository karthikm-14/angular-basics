import { BlogPost } from './../blog-post';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-block-list',
  templateUrl: './block-list.component.html',
  styleUrls: ['./block-list.component.css']
})
export class BlockListComponent implements OnInit {
  blogPosts: BlogPost[] = [];
  constructor() { }

  ngOnInit() {
    this.blogPosts.push(new BlogPost('title1', 'summary1'));
    this.blogPosts.push(new BlogPost('title2', 'summary2'));
  }

}
