import React from 'react';
import {OwnProps, State} from "./types";
import {GreenPage} from "./style";

export default class NotFound extends React.Component<OwnProps, State>{
    render() {
        return(
            <React.Fragment>
                <GreenPage>
                    404
                </GreenPage>

            </React.Fragment>
        )
    }
}