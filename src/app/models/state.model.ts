import { IJob } from "./job.model";
import { ILiving } from "./living.model";

export interface IState {
    name: string;
    avatar?: string;
    university: boolean;
    job?: IJob;
    apartment?: ILiving; 
    insurance: {
        apartment: boolean;
        phone: boolean;
        law: boolean;
    };
    mobility: {
        car: boolean;
        bike: boolean;
        publicTransport: boolean;
    };
    lifepoints: number;
    money: number;
}