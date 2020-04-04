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

    showIcon = () => {
        let {icon} = this.props;
        if (icon) {
            return (
                <FontAwesomeIcon icon={icon || "stripe-s"} />
            )
        }
    }

    render() {
        library.add(faSearch, faCartPlus, faPlus, faTrashAlt, faStripeS)
        const { title, color, size, action, type, name} = this.props;
        return(
         <ButtonBody color={color || 'lite'} size={size} onClick={() => action()} type={type || "button"} name={name || ''}>
             {this.showIcon()}
                 {title}
         </ButtonBody>
        )
    }
}