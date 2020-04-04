import {Products} from "../../components/carusel-component/types";

export interface OwnProps{
    iceArr: Array<Products>;
    waffleArr: Array<Products>;
    syrupArr: Array<Products>;
    sprinklingArr: Array<Products>;
    catalog: Array<Products>;
    searchValue: string;
}
export interface State{
    currentPage: number;

}