import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlertServiceService {

  private apiUrl = 'http://127.0.0.1:8000/api/alerts/';

  constructor(private http: HttpClient) {}

  getAlerts(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
}
