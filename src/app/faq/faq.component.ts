import { Component, OnInit } from '@angular/core'
import { DataService } from './../data.service'

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FaqComponent implements OnInit {

  faqs: Object;

  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.getFaqs().subscribe(data => {
      this.faqs = data
    })
  }
  toggleAnswer(faq) {

    return faq.show ? faq.show = false : faq.show = true;
  }

}
