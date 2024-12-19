import { Component, OnInit } from '@angular/core';
import { Dht11Service } from '../../services/dht11.service';

@Component({
  selector: 'app-dht11-table',
  templateUrl: './dht11-table.component.html',
  styleUrls: ['./dht11-table.component.css'],
})
export class Dht11TableComponent implements OnInit {
  records: any[] = []; // Les données du capteur DHT11
  errorMessage: string = '';

  constructor(private dht11Service: Dht11Service) {}

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData(): void {
    this.dht11Service.getData().subscribe(
      (data) => {
        this.records = data;
      },
      (error) => {
        this.errorMessage = 'Erreur lors du chargement des données.';
        console.error(error);
      }
    );
  }
}
