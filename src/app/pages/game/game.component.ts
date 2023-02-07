import { Component, OnInit } from '@angular/core';
import { IEvent, IOption } from 'src/app/models/event.model';
import { QuestionService } from 'src/app/services/question.service';
import { StateService } from 'src/app/state.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

  currentEvent?: IEvent 

  constructor(
    public stateService: StateService,
    public eventService: QuestionService
  ) { }

  ngOnInit(): void {
    this.stateService.createNewGame(
      "Manuel",
      undefined,
      undefined,
      undefined,
      undefined,
    )

    this.getNewEvent();
    
  }

  decide(option: IOption) {
    this.eventService.makeDecision(option);
    this.getNewEvent();
  }

  getNewEvent() {
    this.currentEvent = this.eventService.getEvent()
  }

}
