import React from 'react';
import {OwnProps, State} from "./types";
import {ButtonBody, ButtonIcon} from './style';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {library} from "@fortawesome/fontawesome-svg-core";
import {
    faCartPlus,
    faPlus,
    faSearch, faTrashAlt
} from "@fortawesome/free-solid-svg-icons";
import {faStripeS} from "@fortawesome/free-brands-svg-icons";

export default class ButtonComponent extends React.Component <OwnProps, State> {
    render() {
        library.add(faSearch, faCartPlus, faPlus, faTrashAlt, faStripeS)
        const { title, color, icon, size} =this.props;
        return(
         <ButtonBody color={color} size={size}>
                 <FontAwesomeIcon icon={icon || "stripe-s"} />
                 {title}
         </ButtonBody>
        )
    }
}