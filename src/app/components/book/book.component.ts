import { Book } from './../../models/book';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  constructor() { }

  @Input() book: Book;
  @Output() openModal = new EventEmitter();

  ngOnInit() {
  }

  private onOpenModal() {
    this.openModal.emit("true");
  }

}
