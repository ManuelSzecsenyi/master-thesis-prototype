import { Injectable } from '@angular/core';
import { events } from '../data/events.mock';
import { IEvent, IOption } from '../models/event.model';
import { IState } from '../models/state.model';
import { StateService } from '../state.service';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor(
    private stateService: StateService
  ) { }

  getNextEvent(): IEvent {
    const event = events[this.stateService.state.round];
    console.log("Starting round " + this.stateService.state.round + ": " + event.title + "")
    
    this.stateService.state.round++;
    return event;
  }

}
