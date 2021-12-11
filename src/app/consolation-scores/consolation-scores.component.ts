import { Component, OnInit, OnDestroy } from '@angular/core';
import { SleeperService } from '../sleeper.service';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-consolation-scores',
  templateUrl: './consolation-scores.component.html',
  styleUrls: ['./consolation-scores.component.scss']
})
export class ConsolationScoresComponent implements OnInit {
  public team1: any = 0
  public team2: any = 0
  public week: number = 0
  public updateScoresSubscription: Subscription | undefined;
  public teamData = [
    { id: 1, name: 'Marinating Youth'},
    { id: 2, name: 'Team alexfleher'},
    { id: 3, name: 'Baby Powder'},
    { id: 4, name: 'Team mwmrox11'},
    { id: 5, name: 'Team Rari'},
    { id: 6, name: 'Team stephenmole'},
    { id: 7, name: 'Team doleson'},
    { id: 8, name: 'Team dbuelter'},
    { id: 9, name: 'Rhamondre\'s Taxi Service'},
    { id: 10, name: 'Team JarrodJerowski'}
  ]
  constructor(
    private sleeperService: SleeperService
  ) { }

  ngOnInit(): void {
  }

  ngOnDestroy() {
    this.updateScoresSubscription?.unsubscribe();
  }

  dropdownUpdated() {
    if ((this.team1 || this.team2) && this.week !== 0) {
      this.updateScoreData();
    }
  }

  private updateScoreData() {
    this.sleeperService.getScoresForWeek(this.week).subscribe((teams: any[]) => {
      this.team1.points = teams.find(team => team.roster_id === Number(this.team1.id)).points;
      this.team2.points = teams.find(team => team.roster_id === Number(this.team2.id)).points;
      const updateInterval = interval(1000);
      this.updateScoresSubscription?.unsubscribe()
      this.updateScoresSubscription = updateInterval.subscribe(() => this.updateScoreData());
    });
  }
}
