import {IceCream, PriceSum} from "../../pages/home-page/types";

export interface OwnProps{
    iceCream: any;
    price: Function;
    addTotalPrice: Function;
}

export interface State {
    show: boolean;
}