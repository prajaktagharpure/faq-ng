import { TestBed } from '@angular/core/testing';

import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing"
import { DataService } from './data.service';
import { Faq } from "./models/faq.model"

describe('DataService', () => {
  let service: DataService
  let httpMock: HttpTestingController

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [DataService]
    })
    service = TestBed.get(DataService)
    httpMock = TestBed.get(HttpTestingController)
  })

  afterEach(() => {
    httpMock.verify();
  })

  it("should retrieve faqs from the API ", () => {
    const dummyFaqs: Faq[] = [{
      "id": "1",
      "question": "What vehicles are covered?",
      "answer": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
      "id": "2",
      "question": "Can anyone drive a vehicle covered by a business policy?",
      "answer": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    }]
    service.getFaqs().subscribe(faqs => {
      expect(faqs.length).toBe(2);
      expect(faqs).toEqual(dummyFaqs);
    })

    const request = httpMock.expectOne(`${service.ROOT_URL}`);

    expect(request.request.method).toBe("GET")

    request.flush(dummyFaqs)
  })
});
