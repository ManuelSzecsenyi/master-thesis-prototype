import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { IEvent, IOption } from 'src/app/models/event.model';
import { QuestionService } from 'src/app/services/question.service';
import { StateService } from 'src/app/state.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

  currentEvent?: IEvent;

  constructor(
    public stateService: StateService,
    public eventService: QuestionService
  ) { }

  ngOnInit(): void {
    this.stateService.createNewGame(true);
    this.getNewEvent();    
  }

  onSwipeUp(event: any) {
    console.log("up", event);
  }
  

  decide(option: IOption) {
    if(this.currentEvent === undefined) return;
    this.stateService.makeDecision(this.currentEvent, option);
    this.getNewEvent();
  }

  getNewEvent() {
    
    const newEvent = this.eventService.getRandomEvent()

    if(newEvent.canHappen) {
      this.currentEvent = newEvent
    } else {
      console.log("Skipping event");
      this.getNewEvent();
    }
    
  }

}
