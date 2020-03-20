import React from 'react';
import {OwnProps, State} from "./types";
import { RedPage } from './style';

export default class BasketPage extends React.Component<OwnProps, State>{
    render() {
        return(
            <React.Fragment>
                <RedPage>
                    Корзина
                </RedPage>
            </React.Fragment>
        )
    }
}