export interface IEvent {
    image?: string;
    title: string;
    description: string;
    options: {
        accept: IOption,
        decline: IOption,
    };
    insurance?: string;
    decision?: IOption;
    moreInfo?: string;
}

export interface IOption {
    title?: string;
    financialImpact: number;
    lifeImpact: number;
    precondition?: any;
}