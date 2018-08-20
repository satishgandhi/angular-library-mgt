import { HttpClientModule } from '@angular/common/http';
import { BooksService } from './services/books.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { BookComponent } from './book/book.component';
import { SelectedBookComponent } from './selected-book/selected-book.component';
import { HighlighterDirective } from './directives/highlighter/highlighter.directive';
import { HoverElementDirective } from './directives/hover-element/hover-element.directive';
import { ShortenPipe } from './pipes/shorten/shorten.pipe';
import { FilterPipe } from './pipes/filter/filter.pipe';
import { PipesExampleComponent } from './pipes-example/pipes-example.component';



@NgModule({
  declarations: [
    AppComponent,
    BookComponent,
    SelectedBookComponent,
    HighlighterDirective,
    HoverElementDirective,
    ShortenPipe,
    FilterPipe,
    PipesExampleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    BooksService,
    FilterPipe
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
