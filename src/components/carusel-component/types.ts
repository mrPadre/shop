
export interface OwnProps{
    productList: Array<Products>;
    type: 'waffle' | 'ice' | 'syrup' | 'sprinkling';
    select: Function ;
    iceCream: any;
}

export interface State{

}

export interface Products{
    name: string;
    image: string;
    price: number;
    description: string;
}