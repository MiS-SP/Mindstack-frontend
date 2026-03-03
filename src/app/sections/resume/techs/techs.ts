import {Component, Input} from '@angular/core';
import {MatListModule} from '@angular/material/list';
import {TechModel} from './tech.model';
import {MatIcon} from '@angular/material/icon';
import {MatGridListModule} from '@angular/material/grid-list';

@Component({
  selector: 'app-resume-techs',
  imports: [
    MatGridListModule,
    MatListModule,
    MatIcon,
  ],
  templateUrl: './techs.html',
  styleUrl: './techs.scss',
})
export class Techs {
  @Input() techs!: TechModel[];
}
