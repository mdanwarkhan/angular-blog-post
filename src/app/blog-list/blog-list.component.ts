import { Component, OnInit } from '@angular/core';
import { BlogPost } from '../blog-post';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css']
})
export class BlogListComponent implements OnInit {

  blogPost: BlogPost[] = [];
  constructor() { }

  ngOnInit() {
    this.blogPost.push(new BlogPost('title 1', 'Summary 1'));
    this.blogPost.push(new BlogPost('title 2', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque eaque quibusdam, deserunt totam molestias quod similique adipisci tempora voluptates eligendi, ex repudiandae iusto blanditiis. Provident aspernatur modi at perspiciat'));
  }

}


