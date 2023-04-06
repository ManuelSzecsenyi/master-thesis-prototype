export const GAME_CONFIG: IGameConfig = {
    numberOfEventsPerMonth: 3,
    numberOfYears: 10   
}

export interface IGameConfig {
    numberOfEventsPerMonth: number;
    numberOfYears: number;
}