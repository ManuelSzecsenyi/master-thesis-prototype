import { Component, OnInit } from '@angular/core';
import { StateService } from 'src/app/state.service';

@Component({
  selector: 'app-game-over',
  templateUrl: './game-over.component.html',
  styleUrls: ['./game-over.component.scss']
})
export class GameOverComponent implements OnInit {

  constructor(
    public stateService: StateService,
  ) { }

  ngOnInit(): void {
  }

}
