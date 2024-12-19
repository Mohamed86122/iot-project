import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChartComponent } from './components/chart/chart.component';
import { HomeComponent } from './components/home/home.component';
import { Dht11TableComponent } from './components/dht11-table/dht11-table.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' }, // Redirection par défaut
  { path: 'home', component: HomeComponent },          // Route vers la page d'accueil
  { path: 'charts', component: ChartComponent },       // Route vers le composant des graphiques
  { path: 'dht', component: Dht11TableComponent },       // Route vers le composant des graphiques
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
