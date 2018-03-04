import { Component, OnInit, ChangeDetectionStrategy, TemplateRef, OnDestroy } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BooksService } from '../../services/books.service';
import { Book } from '../../models/book';
import { BookResponse } from '../../models/book-response';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { Subscriber } from 'rxjs/Subscriber';
import { Observable } from 'rxjs/Observable';
import { ISubscription } from 'rxjs/Subscription';

import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  animations: [
    trigger('searchDone', [
      state('false', style({
        marginTop: '12em',
        transform: 'scale(1.1)'
      })),
      state('true',   style({

      })),
      transition('false => true', animate('100ms linear')),
      transition('true => false', animate('100ms linear'))
    ])
  ]
  
})
export class SearchComponent implements OnInit, OnDestroy {

  private searchDone: boolean;
  public pagination: Number;

  public bookTitle: string;
  private books: Book[];
  private size: Number;
  public error: Boolean;

  private bookSubscription: ISubscription;

  modalRef: BsModalRef;
  coverModal: String;
  loadedCoverImg: boolean;

  openModal(template: TemplateRef<any>, cover_i: String) {
    if (cover_i) {
      this.coverModal = 'http://covers.openlibrary.org/b/id/' + cover_i + '-L.jpg';
      this.loadedCoverImg = false;
      this.modalRef = this.modalService.show(template);
    }
  }

  constructor(private bookService: BooksService, private modalService: BsModalService) { }

  ngOnInit() {
      this.bookTitle = '';
      this.searchDone = false;
      this.books = [];
      this.size = 0;
      this.pagination = 10;
      this.error = false;
  }

  public searchBook(event?: any) {
    if (event) {
      if (event.keyCode === 13 && this.bookTitle !== '') {
        this.doSearchBook();
      }
    } else {
      this.doSearchBook();
    }
  }

  private doSearchBook() {
       this.error = false;
       if (this.bookSubscription) {
        this.bookSubscription.unsubscribe();
       }
       this.bookSubscription = this.bookService.getBooks(this.bookTitle).subscribe( (data: BookResponse) => {
          this.books = data.docs as Book[];
          this.size = data.numFound;
          this.searchDone = true;
        },
        error => {
          this.error = true;
          throw error;
        }
      );
  }

  private changePagination(elem: Number) {
     this.pagination = elem;
  }

  private loadedCover() {
    this.loadedCoverImg = true;
  }

  ngOnDestroy() {
    this.bookSubscription.unsubscribe();
  }

}
