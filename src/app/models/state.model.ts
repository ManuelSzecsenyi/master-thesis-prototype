import { IJob } from "./job.model";
import { ILiving } from "./living.model";

export interface IState {
    name: string;
    avatar?: string;
    university: boolean;
    job?: IJob;
    apartment?: ILiving; 
    insurance: any;
    mobility: any;
    lifepoints: number;
    money: number;
}