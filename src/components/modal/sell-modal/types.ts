export interface OwnProps{
    sellShow: boolean;
    changeSellShow: Function;
    basket: any;
    shop: any;
    totalPrice: any;
    sellNumber: number;
    setSellNumber: Function;
    cleanBasket: Function;
    cleanTotalPrice: Function;

}

export interface State{
    screen: number;

}