import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { SearchComponent } from './components/search/search.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BooksService } from './services/books.service';
import {NgxPaginationModule} from 'ngx-pagination';
import { BsDropdownModule, BsModalService, ModalModule } from 'ngx-bootstrap';
import { LoadingModule } from 'ngx-loading';
import { DescriptionComponent } from './components/description/description.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    DescriptionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    NgxPaginationModule,
    BsDropdownModule.forRoot(),
    ModalModule,
    LoadingModule
  ],
  providers: [BooksService, BsModalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
