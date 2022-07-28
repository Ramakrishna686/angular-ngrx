import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http'
import { Subject} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class TutorialsService {

  constructor(private http: HttpClient) { }

  private selectedBook = new Subject<any>();
    bookSelected = this.selectedBook.asObservable();
  
    getBooks(){
        return this.http.get('http://localhost/BookLoan.Catalog.API/api/Book/List'); //, config);
    }
 
    getBook(id: number)
    {
        return this.http.get('http://localhost/BookLoan.Catalog.API/api/Book/Details/' + id); 
    }
 
    selectBook(book: any) {
        this.selectedBook.next(book)
    }
}
