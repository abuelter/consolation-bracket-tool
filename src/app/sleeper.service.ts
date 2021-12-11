import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SleeperService {

  constructor(
    private http: HttpClient
  ) { }

  getScoresForWeek(week: number): Observable<any> {
    return this.http.get('https://api.sleeper.app/v1/league/653119272008114176/matchups/' + week);
  }
}
