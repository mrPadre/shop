import {Products} from "../../components/carusel-component/types";

export interface IceCream{
    ice: Products;
    waffle: Products;
    syrup: Products;
    sprinkling: Array<string>;
}

export interface PriceSum{
    icePrice: number;
    wafflePrice: number;
    syrupPrice: number;
    sprinklingArr: Array<number>;
}


export interface OwnProps{
    basket: Array<any>;
    receipt: Array<any>;
    addBasket: Function;
    selectWaffle: Function;
    selectIce: Function;
    selectSyrup: Function;
    selectSprinkling: Function;
    iceCream: any;

}

export interface State {
    price: any;
}