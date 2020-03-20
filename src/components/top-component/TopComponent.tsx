import React from 'react';
import Block from "../block-component/Block";
import Logo from '../../img/Logo.png';
import {OwnProps, State} from "./types";
import {Colors} from "../../constants/colors";
import {LogoImage} from "./style";

export default class TopComponent extends React.Component <OwnProps, State> {
    render() {
        return(
         <Block size="25vh">
             <LogoImage src={Logo}/>
         </Block>
        )
    }
}