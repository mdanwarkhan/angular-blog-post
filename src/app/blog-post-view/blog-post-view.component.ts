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
  fullSummary: string;
  constructor(private truncatePipe: TruncatePipe) { }

  ngOnInit() {
    this.fullSummary = this.post.summary;
    this.post.summary = this.truncatePipe.transform(this.post.summary, 30);
  }

  showFullsummary() {
    this.post.summary = this.fullSummary;
  }
  
  togglefav() {
    this.post.isFav = !this.post.isFav;
  }
}
