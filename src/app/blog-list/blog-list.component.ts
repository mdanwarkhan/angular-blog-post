import { Component, OnInit, ViewChild, ViewChildren, QueryList } from '@angular/core';
import { BlogPost } from '../blog-post';
import { BlogPostViewComponent } from '../blog-post-view/blog-post-view.component'
import { BlogDataService } from '../blog-data.service';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css']
})
export class BlogListComponent implements OnInit {

  blogPost: BlogPost[][];
  currentPage: number;
  // @ViewChild('view') blogPostViewComponent: BlogPostViewComponent;
  @ViewChildren('view') blogPostViewComponents: QueryList<BlogPostViewComponent>
  constructor(public blogDataService: BlogDataService) { }

  ngOnInit() {
    this.currentPage = 0;
    this.blogPost = this.blogDataService.getData();
    // this.blogPost.push(new BlogPost('title 1', 'Summary 1'));
    // this.blogPost.push(new BlogPost('title 2', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque eaque quibusdam, deserunt totam molestias quod similique adipisci tempora voluptates eligendi, ex repudiandae iusto blanditiis. Provident aspernatur modi at perspiciat'));
  }

  updatePage(newPage) {
    this.currentPage = newPage;
  }

  expandAll() {
    // this.blogPostViewComponent.showFullsummary();
    this.blogPostViewComponents
    .forEach( bp => bp.showFullsummary());
  }
}


