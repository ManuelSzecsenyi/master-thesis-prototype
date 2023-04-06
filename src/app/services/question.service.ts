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

  /**
   * Returns a random event from the events array
   * Will not be used in the first version
   * @returns 
   */
  getRandomEvent(): IEvent {
    const totalProbability = events.reduce((acc, event) => acc + event.probability, 0);
    const normalizedEvents = events.map(event => ({ ...event, probability: event.probability / totalProbability }));
    
    const randomNumber = Math.random();
    let runningTotal = 0;
  
    for (const event of normalizedEvents) {
      runningTotal += event.probability;
  
      if (randomNumber <= runningTotal) {
        return event;
      }
    }
  
    // If we reach this point, something went wrong
    throw new Error('Failed to select a random event');
  }
}

/**
 * 
  - Calculate the sum of all probabilities in the array.
  - Normalize the probabilities by dividing each probability by the sum of probabilities, so that they add up to 1.0.
  - Generate a random number between 0.0 and 1.0.
  - Iterate through the normalized probabilities in the array, adding each probability to a running total.
  - If the running total exceeds the random number generated in step 3, return the event corresponding to the current probability as the selected event.
  - If no event has been selected after iterating through all normalized probabilities, return an error or null value indicating that no event was selected.
  The key insight behind this algorithm is that each probability in the array represents the likelihood of the corresponding event occurring. 
  By normalizing the probabilities so that they add up to 1.0, we effectively convert the probabilities into a probability distribution, 
  which we can use to randomly select an event based on its likelihood.
 * 
 */