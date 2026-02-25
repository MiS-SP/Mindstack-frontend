import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';

@Component({
  selector: 'app-base-menu',
  imports: [MatIconModule, MatButtonModule, MatToolbarModule],
  templateUrl: './base-menu.html',
  styleUrl: './base-menu.scss',
})
export class BaseMenu {

}
