
import { IState } from "src/app/models/state.model";
import { createAction, props } from '@ngrx/store';


export const startGame = createAction('[Game] Start Game');
export const decisionMade = createAction('[Game] Decision Made');