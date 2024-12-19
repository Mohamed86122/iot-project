import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Dht11Service {
  private apiUrl = 'http://127.0.0.1:8000/api/dht11'; // URL de l'API Django

  constructor(private http: HttpClient) {}

  // Récupérer les données de l'API Django (GET)
  getData(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  // Envoyer des données au backend (POST)
  sendData(data: any): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post(this.apiUrl, data, { headers });
  }

  getTemperatureData(): Observable<any> {
    return this.http.get(`${this.apiUrl}/chart-data-jour/`);
  }

   // Récupérer les données d'aujourd'hui
   getTodayData(): Observable<any> {
    return this.http.get(`${this.apiUrl}/chart-data-jour/`);
  }

  // Récupérer les données de la semaine
  getWeekData(): Observable<any> {
    return this.http.get(`${this.apiUrl}/chart-data-semaine/`);
  }

  // Récupérer les données du mois
  getMonthData(): Observable<any> {
    return this.http.get(`${this.apiUrl}/chart-data-mois/`);
  }
}
