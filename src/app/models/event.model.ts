export interface IEvent {
    title: string;
    description: string;
    options: {
        accept: IOption,
        decline: IOption,
    };
    probability: number;
    canHappen: boolean;
    noOfOccurences: number;
    precondition?: any;
    decision?: IOption;
}

export interface IOption {
    title?: string;
    financialImpact: number;
    lifeImpact: number;
    precondition?: any;
}