import React from 'react';
import {BlockContainer} from "./style";
import {OwnProps, State} from "./type";

class Block extends React.Component<OwnProps, State> {
    constructor (props: OwnProps){
        super(props);
        this.state = {

        }
    }

    public render() {
        const {size, color, image} = this.props;

        return (
            <BlockContainer
                size={size}
                color={color}
                image={image || ""}
            >
                {this.props.children}

            </BlockContainer>
        )
    }
}

export default Block;