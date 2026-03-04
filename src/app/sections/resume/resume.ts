import { Component } from '@angular/core';
import {Stats} from "./stats/stats";
import {StatModel} from './stats/stat/stat.model';
import {Intro} from './intro/intro';
import {TechModel} from '../../grids/tech-stack-grid/tech.model';
import {TechStackGrid} from '../../grids/tech-stack-grid/tech-stack-grid';
import {Projects} from './projects/projects';
import {Profit} from './profit/profit';
import {Results} from './results/results';
import {Exp} from './exp/exp';
import {Education} from './education/education';
import {Contact} from './contact/contact';

@Component({
  selector: 'app-resume',
  imports: [
    Stats,
    Intro,
    TechStackGrid,
    Projects,
    Profit,
    Results,
    Exp,
    Education,
    Contact
  ],
  templateUrl: './resume.html',
  styleUrl: './resume.scss',
})
export class Resume {
  myStats: StatModel[] = [
    { label: 'лет опыта', value: 6 },
    { label: 'бэкенд языка', value: 2 }
  ];
  myTechs: TechModel[] = [
    { label: 'BACKEND', values: ['PHP', 'Go'] },
    { label: 'FRONTEND', values: ['Vue.js', 'Angular'] },
    { label: 'DATA', values: ['PostgreSQL', 'Redis', 'Kafka', 'gRPC'] },
    { label: 'INFRA', values: ['Docker', 'Kubernetes', 'Ansible'] }
  ]
}
