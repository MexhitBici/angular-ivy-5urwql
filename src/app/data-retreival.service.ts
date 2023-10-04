import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}

  getTourData(): Observable<any> {
    return this.http.get('assets/tour.json');
  }

  getTrolleyData(): Observable<any> {
    return this.http.get('assets/trolleys.json');
  }
}
