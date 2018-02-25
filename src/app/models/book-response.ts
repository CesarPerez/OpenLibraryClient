import { Book } from './book';

export interface BookResponse {
    numFound: Number;
    docs: Book[];
}
