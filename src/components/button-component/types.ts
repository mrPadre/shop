import {
    faCartPlus,
    faPlus,
    faSearch,
    faTrashAlt
} from "@fortawesome/free-solid-svg-icons";

export const Search = faSearch;
export const CartPlus = faCartPlus;
export const Plus = faPlus;
export const Minus = faTrashAlt;


export interface OwnProps{
    size?: string;
    color?: "lite" | "dark" | "blue" | "red";
    title: string;
    icon?: "search" | "cart-plus" | "plus" | "trash-alt";
    action: Function;
    type?: "button" | "submit";
    name?: string;
}
export interface State{

}