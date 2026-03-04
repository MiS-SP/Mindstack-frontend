import {Component, Input} from '@angular/core';
import {MatListModule} from '@angular/material/list';
import {TechModel} from './tech.model';
import {MatIcon} from '@angular/material/icon';
import {MatGridListModule} from '@angular/material/grid-list';


@Component({
  selector: 'app-tech-stack-grid',
  imports: [MatListModule,
    MatIcon,
    MatGridListModule],
  templateUrl: './tech-stack-grid.html',
  styleUrl: './tech-stack-grid.scss',
})
export class TechStackGrid {
  @Input() techs!: TechModel[];
}
