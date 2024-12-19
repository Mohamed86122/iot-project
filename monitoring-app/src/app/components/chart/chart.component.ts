import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { Dht11Service } from '../../services/dht11.service';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css'],
})
export class ChartComponent implements OnInit {
  temperatureData: number[] = [];
  humidityData: number[] = [];
  timeLabels: string[] = [];
  message: string = ''; // Message pour les erreurs ou données vides
  chartInstance: any; // Instance du graphique

  constructor(private dht11Service: Dht11Service) {
    Chart.register(...registerables);
  }

  ngOnInit(): void {
    this.fetchTodayData(); // Charger les données d'aujourd'hui par défaut
  }

  fetchTodayData() {
    this.dht11Service.getTodayData().subscribe(
      (data) => this.updateChart(data),
      (error) => this.handleError(error)
    );
  }

  fetchWeekData() {
    this.dht11Service.getWeekData().subscribe(
      (data) => this.updateChart(data),
      (error) => this.handleError(error)
    );
  }

  fetchMonthData() {
    this.dht11Service.getMonthData().subscribe(
      (data) => this.updateChart(data),
      (error) => this.handleError(error)
    );
  }

  updateChart(data: any) {
    if (this.chartInstance) {
      this.chartInstance.destroy(); // Détruisez l'ancienne instance
    }
  
    if (data.temps.length === 0) {
      this.message = 'Aucune donnée disponible pour cette période.';
      this.temperatureData = [];
      this.humidityData = [];
      this.timeLabels = [];
    } else {
      this.message = ''; // Réinitialisez le message si des données existent
      this.temperatureData = data.temperature;
      this.humidityData = data.humidity;
      this.timeLabels = data.temps;
  
      // Création du graphique avec des styles améliorés
      const ctx = document.getElementById('myChart') as HTMLCanvasElement;
      this.chartInstance = new Chart(ctx, {
        type: 'line',
        data: {
          labels: this.timeLabels,
          datasets: [
            {
              label: 'Température (°C)',
              data: this.temperatureData,
              borderColor: 'rgba(54, 162, 235, 1)',
              backgroundColor: 'rgba(54, 162, 235, 0.2)',
              borderWidth: 2,
              fill: true, // Remplir sous la ligne
              tension: 0.4, // Courbe douce
              pointStyle: 'circle', // Style des points
              pointRadius: 6, // Taille des points
              pointHoverRadius: 8, // Taille des points au survol
            },
            {
              label: 'Humidité (%)',
              data: this.humidityData,
              borderColor: 'rgba(75, 192, 192, 1)',
              backgroundColor: 'rgba(75, 192, 192, 0.2)',
              borderWidth: 2,
              fill: true,
              tension: 0.4,
              pointStyle: 'rect', // Style des points
              pointRadius: 6,
              pointHoverRadius: 8,
            },
          ],
        },
        options: {
          responsive: true,
          plugins: {
            legend: {
              display: true,
              position: 'top',
              labels: {
                color: '#333', // Couleur des labels
                font: {
                  size: 14,
                  family: 'Arial',
                },
              },
            },
            tooltip: {
              enabled: true,
              backgroundColor: 'rgba(0, 0, 0, 0.8)', // Couleur de fond des tooltips
              titleFont: {
                size: 14,
                weight: 'bold',
              },
              bodyFont: {
                size: 12,
              },
              callbacks: {
                label: (tooltipItem) => {
                  const label = tooltipItem.dataset.label ?? 'Valeur';
                  return `${label}: ${tooltipItem.raw} ${label.includes('Température') ? '°C' : '%'}`;
                },
              },
            },
          },
          scales: {
            x: {
              title: {
                display: true,
                text: 'Temps',
                color: '#333',
                font: {
                  size: 16,
                  weight: 'bold',
                },
              },
              ticks: {
                color: '#666',
                font: {
                  size: 12,
                },
              },
              grid: {
                color: 'rgba(200, 200, 200, 0.2)', // Lignes verticales
              },
            },
            y: {
              title: {
                display: true,
                text: 'Valeurs',
                color: '#333',
                font: {
                  size: 16,
                  weight: 'bold',
                },
              },
              ticks: {
                color: '#666',
                font: {
                  size: 12,
                },
              },
              grid: {
                color: 'rgba(200, 200, 200, 0.2)', // Lignes horizontales
              },
            },
          },
          animation: {
            duration: 1000, // Durée de l'animation
            easing: 'easeOutBounce', // Type d'animation
          },
        },
      });
    }
  }
  

  handleError(error: any) {
    console.error('Erreur lors de la récupération des données :', error);
    this.message = 'Erreur lors de la récupération des données.';
  }
}
