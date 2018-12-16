import { BlogPost } from './../blog-post';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-block-tile',
  templateUrl: './block-tile.component.html',
  styleUrls: ['./block-tile.component.css']
})
export class BlockTileComponent implements OnInit {
  @Input() post: BlogPost;
  constructor() { }

  ngOnInit() {
  }

}
