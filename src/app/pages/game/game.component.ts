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

  currentEvent!: IEvent;

  constructor(
    public stateService: StateService,
    public eventService: QuestionService
  ) { }

  ngOnInit(): void {

    // Retry until we have an event
    window.setTimeout(() => {
      this.getNewEvent()    
    }, 100);

    // Prevent accidental page reload when the game is running
    window.addEventListener('beforeunload', (event) => {
      event.preventDefault();
      event.returnValue = '';
    });
    
  }

  getNewEvent() {
    this.currentEvent = this.eventService.getNextEvent();
    
    if(this.currentEvent == null) {
      console.log("No more events"); // TODO: End game
    }
  }

  moreInfoClicked() {
    console.log("More info clicked");
    window.alert(this.currentEvent.moreInfo ? this.currentEvent.moreInfo : "Keine zusätzliche Information verfügbar.");
  }

  decisionMade(decision: boolean) {

    // Make the decision
    this.stateService.makeDecision(this.currentEvent, decision ? this.currentEvent.options.accept : this.currentEvent.options.decline);
    
    // Get a new event
    this.getNewEvent()
  }

  getMonth(): number {
    // 12 rounds per year
    return Math.floor(this.stateService.state.round / 12)
  }

}
