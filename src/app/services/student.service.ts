import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http: HttpClient) { }

  getStudents(): Observable<any> {
    return this.http.get("https://jsonblob.com/api/jsonblob/6c5f37cd-5d69-11ea-80ec-9550e40bacaa");
  }

  getWeather(): Observable<any> {
    return this.http.get("http://api.openweathermap.org/data/2.5/weather?q=Galway&APPID=c8ce2b807cf65cec9a783b26a8c87566")
  }
}
