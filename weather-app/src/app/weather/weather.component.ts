import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-weather',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './weather.component.html',
  styleUrl: './weather.component.css'
})
export class WeatherComponent {

    city: string = '';
    weatherData: any;

    constructor(private weatherService: WeatherService) { }

    getWeather() {
      this.weatherService.getWeather(this.city).subscribe(
        data => this.weatherData = data,
        error => console.error('Error:', error)
      );
    }
}
