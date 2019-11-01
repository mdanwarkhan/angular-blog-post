import { Injectable } from '@angular/core';
import { BlogPost } from './blog-post';

@Injectable({
  providedIn: 'root'
})
export class BlogDataService {

  constructor() { }

  getData(): BlogPost[][] {
    return [
      [
          { title: 'Post 1',
         // tslint:disable-next-line:max-line-length
          summary: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque eaque quibusdam, deserunt totam molestias quod similique adipisci tempora voluptates eligendi, ex repudiandae iusto blanditiis. Provident aspernatur modi at perspiciat'},
          { title: 'Post 2',
           // tslint:disable-next-line:max-line-length
          summary: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque eaque quibusdam, deserunt totam molestias quod similique adipisci tempora voluptates eligendi, ex repudiandae iusto blanditiis. Provident aspernatur modi at perspiciat'},
          { title: 'Post 3',
           // tslint:disable-next-line:max-line-length
          summary: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque eaque quibusdam, deserunt totam molestias quod similique adipisci tempora voluptates eligendi, ex repudiandae iusto blanditiis. Provident aspernatur modi at perspiciat'},
          { title: 'Post 4',
          // tslint:disable-next-line:max-line-length
          summary: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque eaque quibusdam, deserunt totam molestias quod similique adipisci tempora voluptates eligendi, ex repudiandae iusto blanditiis. Provident aspernatur modi at perspiciat'},
      ],
      [
          { title: 'Post 5',
         // tslint:disable-next-line:max-line-length
          summary: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque eaque quibusdam, deserunt totam molestias quod similique adipisci tempora voluptates eligendi, ex repudiandae iusto blanditiis. Provident aspernatur modi at perspiciat'},
          { title: 'Post 6',
           // tslint:disable-next-line:max-line-length
          summary: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque eaque quibusdam, deserunt totam molestias quod similique adipisci tempora voluptates eligendi, ex repudiandae iusto blanditiis. Provident aspernatur modi at perspiciat'},
          { title: 'Post 7',
           // tslint:disable-next-line:max-line-length
          summary: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque eaque quibusdam, deserunt totam molestias quod similique adipisci tempora voluptates eligendi, ex repudiandae iusto blanditiis. Provident aspernatur modi at perspiciat'},
          { title: 'Post 8',
          // tslint:disable-next-line:max-line-length
          summary: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque eaque quibusdam, deserunt totam molestias quod similique adipisci tempora voluptates eligendi, ex repudiandae iusto blanditiis. Provident aspernatur modi at perspiciat'},
      ],
      [
          { title: 'Post 9',
         // tslint:disable-next-line:max-line-length
          summary: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque eaque quibusdam, deserunt totam molestias quod similique adipisci tempora voluptates eligendi, ex repudiandae iusto blanditiis. Provident aspernatur modi at perspiciat'},
          { title: 'Post 10',
           // tslint:disable-next-line:max-line-length
          summary: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque eaque quibusdam, deserunt totam molestias quod similique adipisci tempora voluptates eligendi, ex repudiandae iusto blanditiis. Provident aspernatur modi at perspiciat'},
          { title: 'Post 11',
           // tslint:disable-next-line:max-line-length
          summary: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque eaque quibusdam, deserunt totam molestias quod similique adipisci tempora voluptates eligendi, ex repudiandae iusto blanditiis. Provident aspernatur modi at perspiciat'},
          { title: 'Post 12',
          // tslint:disable-next-line:max-line-length
          summary: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque eaque quibusdam, deserunt totam molestias quod similique adipisci tempora voluptates eligendi, ex repudiandae iusto blanditiis. Provident aspernatur modi at perspiciat'},
      ]
    ]; 
  }
}
