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

  // Todo implement random event generation
  public getEvent(): IEvent {
    return events[0];
  }

  public makeDecision(decision: IOption) {

    this.stateService.state.money += decision.financialImpact

  }
}
