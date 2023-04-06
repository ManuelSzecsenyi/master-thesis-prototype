import { IEvent } from "../models/event.model";
import { IState } from "../models/state.model";

export const events: IEvent[] = [
    {
        title: "StartUp",
        description: "Dein Freund möchte sich gerne € 2.000,- für die Gründung seines StartUps ausborgen. Er verspricht dir, dass er dir das Geld in 2 Jahren zurückzahlt plus 10% Zinsen.",
        options: {
            accept: {
                financialImpact: -2000,
                lifeImpact: 2,
            },
            decline: {
                financialImpact: 0,
                lifeImpact: -1,
            }
        },
        probability: 4,
        canHappen: true,
        noOfOccurences: 0,
        precondition: (state: IState) => { 
            return true //state.insurance == "SPECIAL_INSURANCE" 
        }
    }
]