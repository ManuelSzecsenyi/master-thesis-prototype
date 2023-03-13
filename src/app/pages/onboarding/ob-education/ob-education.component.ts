import { Component, OnInit } from '@angular/core';
import { StateService } from 'src/app/state.service';

@Component({
  selector: 'app-ob-education',
  templateUrl: './ob-education.component.html',
  styleUrls: ['./ob-education.component.scss']
})
export class ObEducationComponent implements OnInit {

  constructor(
    public state: StateService
  ) { }

  ngOnInit(): void {
  }

}
