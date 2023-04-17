import { Injectable } from '@angular/core';
import { IEvent, IOption } from '../models/event.model';
import { IState } from '../models/state.model';
import { StateService } from '../state.service';
import { HttpClient } from '@angular/common/http'; 
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  public events: IEvent[] = [];

  constructor(
    private stateService: StateService,
    private httpClient: HttpClient
  ) {
    this.getJSON().subscribe(data => {
      this.events = data;
      console.log("Loaded " + this.events.length + " events", this.events)
    });
  }

  getNextEvent(): IEvent {
    
    const event = this.events[this.stateService.state.round];
    console.log("Starting round " + this.stateService.state.round + ": " + event.title + "")
    
    this.stateService.state.round++;
    return event;
  }

  public getJSON(): Observable<any> {
    return this.httpClient.get("./assets/events.json");
  }

}
