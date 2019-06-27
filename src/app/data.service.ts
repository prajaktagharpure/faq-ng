import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http"
import { Faq } from './models/faq.model'

@Injectable({
  providedIn: 'root'
})
export class DataService {
  ROOT_URL = "http://localhost:3000/faqs"
  constructor(private http: HttpClient) {

  }
  getFaqs() {
    return this.http.get<Faq[]>(this.ROOT_URL)
  }
}
