import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}

  // Fetch tour data from the 'assets/tour.json' file
  getTourData(): Observable<any> {
    // Use the HttpClient to make an HTTP GET request and return the response as an observable
    return this.http.get('assets/tour.json');
  }

  // Fetch trolley data from the 'assets/trolleys.json' file
  getTrolleyData(): Observable<any> {
    // Use the HttpClient to make an HTTP GET request and return the response as an observable
    return this.http.get('assets/trolleys.json');
  }
}
