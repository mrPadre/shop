import {Colors} from "../../constants/colors";

export interface OwnProps{
    size?: string;
    color?: TypesColor;
    image?: string;
    name?: string;
}

export interface State{

}

export type TypesColor =
    Colors.Cream | Colors.Pink | Colors.Blue | Colors.White;
