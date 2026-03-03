import {Component, Input} from '@angular/core';
import {StatModel} from './stat/stat.model';
import {Stat} from './stat/stat';

@Component({
  selector: 'app-resume-stats',
  imports: [
    Stat
  ],
  templateUrl: './stats.html',
  styleUrl: './stats.scss',
})
export class Stats {
  @Input() stats!: StatModel[];

}
