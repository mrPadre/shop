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
            <TopMenuBody>
                <TopMenuIcon>
                    <FontAwesomeIcon icon={faBars}/>
                </TopMenuIcon>
                {NAVI.map((item: any, index: number) => {
                    return (
                        <TopMenuBox key={index}>
                            <TopMenuLink
                                key={item.title}
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