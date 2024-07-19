import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormControl } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { Observable, of } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-weather',
  standalone: true,
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css'],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatAutocompleteModule,
    HttpClientModule
  ]
})
export class WeatherComponent implements OnInit {
  cityControl = new FormControl();
  cities: string[] = [];
  filteredCities: Observable<string[]> = of([]);
  weatherData: any;

  constructor(private weatherService: WeatherService, private http: HttpClient) {}

  ngOnInit() {
    this.loadCities();
    this.filteredCities = this.cityControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );
  }

  loadCities() {
    this.http.get<any>('assets/cidades_estados.json').subscribe({
      next: data => {
        if (data && data.estados) {
          this.cities = data.estados.flatMap((estado: any) => estado.cidades);
        }
      }
    });
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.cities.filter(city => city.toLowerCase().includes(filterValue));
  }

  getWeather() {
    if (this.cityControl.value.trim() === '') {
      return;
    }
    this.weatherService.getWeather(this.cityControl.value).subscribe(
      data => {
        this.weatherData = data;
      }
    );
  }

  clearWeather() {
    this.cityControl.setValue('');
    this.weatherData = null;
  }
}
