import React from 'react';
import {OwnProps, State} from "./types";
import {BluePage} from "./style";

export default class CatalogPage extends React.Component<OwnProps, State>{
    render() {
        return(
            <React.Fragment>
                <BluePage>
                    Каталог
                </BluePage>

            </React.Fragment>
        )
    }
}