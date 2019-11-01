import { Component, OnInit, Input } from '@angular/core';
import { BlogPost } from '../blog-post';

@Component({
  selector: 'app-blog-post-view',
  templateUrl: './blog-post-view.component.html',
  styleUrls: ['./blog-post-view.component.css']
})
export class BlogPostViewComponent implements OnInit {

  @Input() post: BlogPost;
  constructor() { }

  ngOnInit() {
    // this.title = 'Blog post';
    // this.summary = 'Blog post summary'
  }

}
