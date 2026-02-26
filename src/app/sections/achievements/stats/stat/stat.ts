import { Component, input } from '@angular/core';
import { StatModel } from './stat.model';

@Component({
  selector: 'app-achievements-stats-stat',
  imports: [],
  templateUrl: './stat.html',
  styleUrl: './stat.scss',
})
export class Stat {
  item = input.required<StatModel>();
}
