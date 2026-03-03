import { Component } from '@angular/core';
import {MatCard, MatCardContent} from "@angular/material/card";
import {PrimaryDecorator} from '../../../others/primary-decorator/primary-decorator';

@Component({
  selector: 'app-resume-intro',
  imports: [
    MatCard,
    MatCardContent,
    PrimaryDecorator
  ],
  templateUrl: './intro.html',
  styleUrl: './intro.scss',
})
export class Intro {

}
