import React from 'react';
import Logo from '../../img/Logo.png';
import {OwnProps, State} from "./types";
import {LogoImage} from "./style";

export default class LogoComponent extends React.Component <OwnProps, State> {
    render() {
        return(
         <React.Fragment>
             <LogoImage src={Logo}/>
         </React.Fragment>
        )
    }
}