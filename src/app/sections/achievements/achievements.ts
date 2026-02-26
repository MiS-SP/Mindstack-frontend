import { Component } from '@angular/core';
import {Stats} from './stats/stats';
import {StatModel} from './stats/stat/stat.model';

@Component({
  selector: 'app-achievements',
  imports: [
    Stats
  ],
  templateUrl: './achievements.html',
  styleUrl: './achievements.scss',
})
export class Achievements {
  myStats: StatModel[] = [
    { label: 'лет опыта', value: 6 },
    { label: 'бэкенд языка', value: 2 }
  ];
}
