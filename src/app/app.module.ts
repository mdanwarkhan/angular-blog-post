import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BlogListComponent } from './blog-list/blog-list.component';
import { BlogPostViewComponent } from './blog-post-view/blog-post-view.component';
import { TruncatePipe } from './truncate.pipe';
import { PaginatorComponent } from './paginator/paginator.component';
import { BlogDataService } from './blog-data.service';
import { HighlightDirective } from './highlight.directive';

@NgModule({
  declarations: [
    AppComponent,
    BlogListComponent,
    BlogPostViewComponent,
    TruncatePipe,
    PaginatorComponent,
    HighlightDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [TruncatePipe, BlogDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
