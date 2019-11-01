import { Component, OnInit, Input } from '@angular/core';
import { BlogPost } from '../blog-post';
import { TruncatePipe } from '../truncate.pipe';

@Component({
  selector: 'app-blog-post-view',
  templateUrl: './blog-post-view.component.html',
  styleUrls: ['./blog-post-view.component.css']
})
export class BlogPostViewComponent implements OnInit {

  @Input() post: BlogPost;
  constructor(private truncatePipe: TruncatePipe) { }

  ngOnInit() {
   this.post.summary = this.truncatePipe.transform(this.post.summary, 30);
  }

}