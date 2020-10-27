import { Component, OnInit } from '@angular/core';
import { CandidateService } from '../candidate.service';
import { trigger, transition, style, animate, query, stagger } from '@angular/animations';


@Component({
  selector: 'app-app-main',
  templateUrl: './app-main.component.html',
  styleUrls: ['./app-main.component.css'],
  providers: [CandidateService],
  animations: [
    trigger('listAnimation', [
      transition('* => *', [ // each time the binding value changes
        query(':leave', [
          stagger(500, [
            animate('0.9s', style({ opacity: 0 }))
          ])
        ], { optional: true }),
        query(':enter', [
          style({ opacity: 0 }),
          stagger(500, [
            animate('0.5s', style({ opacity: 1 }))
          ])
        ], { optional: true })
      ])
    ])
  ]
})
export class AppMainComponent {
  Urls = [];
  items = [];

  constructor(candidateList: CandidateService) {
    this.Urls = candidateList.getUrls();
    this.toggle();
   }

   logAnimation(event: any): void {
    console.log(event);
  }
   showItems(): void {
    this.Urls.map((i) => {
      this.items.push(i);
    });

  }

  hideItems(): void {
    this.items = [];
  }

  toggle(): void {
    this.items.length ? this.hideItems() : this.showItems();
  }
}
