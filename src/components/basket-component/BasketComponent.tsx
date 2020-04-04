import React from 'react';
import {connect} from "react-redux";

import {OwnProps, State} from "./types";
import IceImage from '../../img/main4.png';

import {BasketBody, BasketImage, BasketNumber, BasketText} from "./style";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faShoppingBasket} from "@fortawesome/free-solid-svg-icons";
import ButtonComponent from "../button-component/ButtonComponent";
import {BASKET_TEXT} from "./constant";
import {Link} from "react-router-dom";
import {URL_BASKET} from "../../service/router/url";
import {CURRENCY} from "../../constant";
import {changeSellShow} from "../../service/store/actions";






class BasketComponent extends React.Component <OwnProps, State> {

    public handleButtonAction = () => {
        this.props.changeSellShow();
    }

    render() {
        const {iceCream, totalPrice, basket} = this.props;
        let count = basket.length;

        if (basket.length >= 1) {
        return(
         <BasketBody>
             <BasketImage>
                 <Link to={URL_BASKET}>
                     <FontAwesomeIcon icon={faShoppingBasket}/>
                 </Link>
                 <BasketNumber>
                     {count}
                 </BasketNumber>
             </BasketImage>
             <BasketText>
                 {totalPrice.reduce((a:number,b: number)=> a + b)} {CURRENCY.long}
             </BasketText>
             <ButtonComponent title={BASKET_TEXT.button} action={this.handleButtonAction} size="150px"/>
         </BasketBody>
        )
    } else {
            return(
                <React.Fragment/>
            )
        }
    }
}
const mapStateToProps = (store: any) => {
    return {
        iceCream: store.iceCream,
        totalPrice: store.totalPrice,
        basket: store.basket
    }
}
const mapDispatchToProps = (dispatch: any) => {
    return {
        changeSellShow: () => dispatch (changeSellShow())
    }
}
export default connect(mapStateToProps, mapDispatchToProps) (BasketComponent)