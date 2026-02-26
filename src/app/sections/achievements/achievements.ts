import { Component } from '@angular/core';
import {Stats} from './stats/stats';
import {StatModel} from './stats/stat/stat.model';
import {MatCardModule} from '@angular/material/card';
import {inject} from 'vitest';
import {Meta, Title} from '@angular/platform-browser';

@Component({
  selector: 'app-achievements',
  imports: [
    Stats,
    MatCardModule,
  ],
  templateUrl: './achievements.html',
  styleUrl: './achievements.scss',
})
export class Achievements implements onInit {
  myStats: StatModel[] = [
    { label: 'лет опыта', value: 6 },
    { label: 'бэкенд языка', value: 2 }
  ];

  private readonly title = inject(Title);
  private readonly meta = inject(Meta);

  ngOnInit() {
    // ✅ Title для поисковой выдачи (50-60 символов)
    this.title.setTitle('Сургутов Михаил — Fullstack Developer (Go, PHP) | Портфолио');

    // ✅ Meta Description для сниппета (150-160 символов)
    this.meta.updateTag({
      name: 'description',
      content: 'Middle+ Fullstack Developer с 6-летним опытом. Специализация: Go, PHP, платёжные системы, highload. Портфолио и контакты.'
    });

    // ✅ Open Graph для соцсетей
    this.meta.updateTag({ property: 'og:title', content: 'Сургутов Михаил — Fullstack Developer' });
    this.meta.updateTag({ property: 'og:description', content: 'Портфолио разработчика: Go, PHP, highload системы' });
    this.meta.updateTag({ property: 'og:type', content: 'profile' });
  }
}
