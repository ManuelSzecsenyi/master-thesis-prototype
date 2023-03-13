import { IGeneral } from "./general.mode";

export interface ILiving extends IGeneral {
    rent: number;
    distance: number;
    _internalDistanceFactor: number
}