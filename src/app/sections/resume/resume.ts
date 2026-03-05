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
import {ProfitModel} from './profit/profit.model';

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
  myProfits: ProfitModel[] = [
    {
      label: 'Решаю задачи, а не создаю новые',
      values: [
        'Быстро погружаюсь в незнакомый код и нахожу причину проблемы, пока другие ещё читают документацию',
        'Проектирую системы, которые выдерживают рост нагрузки — не приходится переписывать через полгода',
        'Интегрирую внешние API и legacy-системы без боли — знаю, где будут подводные камни',
        'Пишу код, который легко поддерживать — следующий разработчик скажет спасибо'
      ]
    },
    {
      label: 'Экономлю ваше время и деньги',
      values: [
        'Один senior вместо команды джунов — меньше коммуникации, быстрее результат',
        'Использую AI для рутины, а голову — для архитектуры и сложных решений',
        'Предупреждаю о рисках до того, как они станут проблемами',
        'Работаю асинхронно и самостоятельно — не нужно микроменеджить',
        'Предпочитаю письменную коммуникацию — так точнее формулирую мысли и всё остаётся в истории'
      ]
    },
    {
      label: 'Подхожу для проектов, где важно',
      values: [
        'Высокая нагрузка — тысячи и миллионы запросов',
        'Надёжность — система должна работать 24/7',
        'Сложная бизнес-логика — платежи, интеграции, real-time',
        'Быстрый запуск — MVP за недели, а не месяцы',
      ]
    }
  ]
}
