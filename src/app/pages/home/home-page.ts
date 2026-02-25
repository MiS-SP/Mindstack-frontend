import { Component } from '@angular/core';
import {Achievements} from '../../sections/achievements/achievements';

@Component({
  selector: 'app-home-page',
  imports: [
    Achievements
  ],
  templateUrl: './home-page.html',
  styleUrl: './home-page.scss',
})
export class HomePage {

}
