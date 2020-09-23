import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WeatherWidgetComponent } from './weather-widget/weather-widget.component';

const routes: Routes = [
  {path: '', component: WeatherWidgetComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
