import { IGeneral } from "./general.mode";

export interface IJob extends IGeneral {
    description: string;
    salary: number;
    stress: number;
    universityNeded: boolean;
}