import { Component, Input, OnInit } from '@angular/core';
import { IEvent } from 'src/app/models/event.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() currentEvent?: IEvent;

  constructor() { }

  ngOnInit(): void {
  }

}
