import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import {BaseMenu} from '../../menus/base-menu/base-menu';

@Component({
  selector: 'app-base-header',
  imports: [MatToolbarModule, BaseMenu],
  templateUrl: './base-header.html',
  styleUrl: './base-header.scss',
})
export class BaseHeader {

}
