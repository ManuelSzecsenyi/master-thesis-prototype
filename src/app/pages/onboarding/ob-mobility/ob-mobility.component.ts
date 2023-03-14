import { Component, OnInit } from '@angular/core';
import { StateService } from 'src/app/state.service';

@Component({
  selector: 'app-ob-mobility',
  templateUrl: './ob-mobility.component.html',
  styleUrls: ['./ob-mobility.component.scss']
})
export class ObMobilityComponent implements OnInit {

  constructor(
    public state: StateService,
  ) { }

  ngOnInit(): void {
  }

}
