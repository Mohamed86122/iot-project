import { Component, OnInit } from '@angular/core';
import { AlertServiceService } from '../../services/alert.service';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css'],
})
export class AlertComponent implements OnInit {
  alerts: any = {};

  constructor(private alertService: AlertServiceService) {}

  ngOnInit(): void {
    this.checkAlerts();
  }

  checkAlerts(): void {
    this.alertService.getAlerts().subscribe(
      (data) => {
        this.alerts = data;
      },
      (error) => {
        console.error('Erreur lors de la récupération des alertes', error);
      }
    );
  }
}
