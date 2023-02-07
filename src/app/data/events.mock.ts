import { IEvent } from "../models/event.model";
import { IState } from "../models/state.model";

export const events: IEvent[] = [
    {
        title: "Lorem ipsum this is a question",
        description: "This is a description",
        options: [
            {
                title: "Answer A",
                financialImpact: +500,
                precondition: (state: IState) => { 
                    return state.insurance == "SPECIAL_INSURANCE" 
                }
            },
            {
                title: "Answer B",
                financialImpact: -1500,
                precondition: undefined // no precondition for this test
            }
        ],
        probability: 4,
        canHappen: true,
        noOfOccurences: 0,
    }
]