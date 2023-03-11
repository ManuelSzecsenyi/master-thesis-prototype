export interface IEvent {
    title: string;
    description: string;
    options: IOption[];
    probability: number;
    canHappen: boolean;
    noOfOccurences: number;
    precondition?: any;
}

export interface IOption {
    title: string;
    financialImpact: number;
    precondition: any;
}