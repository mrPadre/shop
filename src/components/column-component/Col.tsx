import React from 'react';
import {OwnProps, State} from './types';
import {Column} from "./style";


export default class Col extends React.Component <OwnProps, State> {
    render() {
        return(
         <Column width={this.props.width} align={this.props.align}>
             {this.props.children}
         </Column>
        )
    }
}