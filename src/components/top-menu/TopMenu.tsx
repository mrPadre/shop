import React from 'react';
import {OwnProps, State} from "./types";
import {NAVI} from "../../service/router/url";
import {TopMenuBody, TopMenuLink, TopMenuIcon, TopMenuBox} from "./style";
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars
} from "@fortawesome/free-solid-svg-icons";

export default class TopMenu extends React.Component <OwnProps, State> {
    constructor(props: OwnProps){
        super(props);
        this.state = {

        }
    }

    public render() {
        return(
            <TopMenuBody isMenu={this.props.isMenu}>
                {NAVI.map((item: any, index: number) => {
                    return (
                        <TopMenuBox key={index}>
                            <TopMenuLink
                                key={item.title}
                                onClick={() => this.props.closeMenu()}
                            ><Link to={item.url}>
                                {item.title}
                            </Link>
                            </TopMenuLink>
                        </TopMenuBox>
                    )
                })}
            </TopMenuBody>
        )
    }
}