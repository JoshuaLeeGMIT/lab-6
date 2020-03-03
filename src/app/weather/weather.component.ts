import { Component, OnInit } from '@angular/core';

import { StudentService } from '../services/student.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  weather: any;

  constructor(private ss: StudentService) { }

  ngOnInit(): void {
    this.ss.getWeather().subscribe((data) => {
      this.weather = data.weather;
    })
  }

}
