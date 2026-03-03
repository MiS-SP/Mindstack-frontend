import { Component } from '@angular/core';
import {Resume} from '../../sections/resume/resume';

@Component({
  selector: 'app-home-page',
  imports: [
    Resume
  ],
  templateUrl: './home-page.html',
  styleUrl: './home-page.scss',
})
export class HomePage {

}
