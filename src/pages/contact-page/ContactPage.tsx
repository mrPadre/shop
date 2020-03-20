import React from 'react';
import {OwnProps, State} from "./types";
import {PinkPage} from "./style";

export default class ContactPage extends React.Component<OwnProps, State>{
    render() {
        return(
            <React.Fragment>
                <PinkPage>
                    Контакты
                </PinkPage>

            </React.Fragment>
        )
    }
}