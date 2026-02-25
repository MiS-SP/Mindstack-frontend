import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BaseHeader } from '../../headers/base-header/base-header';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { BaseFooter } from "../../footers/base-footer/base-footer";


@Component({
  selector: 'app-base-layout',
  imports: [RouterOutlet, BaseHeader, MatButtonModule, MatSidenavModule, BaseFooter],
  templateUrl: './base-layout.html',
  styleUrl: './base-layout.scss',
})
export class BaseLayout {

}
