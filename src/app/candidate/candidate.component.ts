import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-candidate',
  templateUrl: './candidate.component.html',
  styleUrls: ['./candidate.component.css']
})
export class CandidateComponent implements OnInit {
  @Input() imageUrl: string;

  constructor() { }

  ngOnInit(): void {
  }

}
