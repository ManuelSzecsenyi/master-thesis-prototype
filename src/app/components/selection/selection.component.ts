import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-selection',
  templateUrl: './selection.component.html',
  styleUrls: ['./selection.component.scss']
})
export class SelectionComponent implements OnInit {

  @Input() active: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
