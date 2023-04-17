export interface IEvent {
    title: string;
    description: string;
    options: {
        accept: IOption,
        decline: IOption,
    };
    precondition?: any;
    decision?: IOption;
    moreInfo?: string;
}

export interface IOption {
    title?: string;
    financialImpact: number;
    lifeImpact: number;
    precondition?: any;
}