import {Component} from '@angular/core';
import {MatListModule} from '@angular/material/list';
import {MatIcon} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatTooltipModule} from '@angular/material/tooltip';

@Component({
  selector: 'app-resume-profit',
  imports: [MatListModule,
    MatIcon,
    MatCardModule, MatTooltipModule],
  templateUrl: './profit.html',
  styleUrl: './profit.scss',
})
export class Profit {

}
