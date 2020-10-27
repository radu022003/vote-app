import { Component, OnInit } from '@angular/core';
import { CandidateService } from '../candidate.service';


@Component({
  selector: 'app-app-main',
  templateUrl: './app-main.component.html',
  styleUrls: ['./app-main.component.css'],
  providers: [CandidateService]
})
export class AppMainComponent {
  Urls: string[];
  constructor(candidateList: CandidateService) {
    this.Urls = candidateList.getUrls();
   }
}
