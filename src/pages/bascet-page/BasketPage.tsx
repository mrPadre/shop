import React from 'react';
import {OwnProps, State} from "./types";
import {connect} from "react-redux";
import {
    BasketButtons,
    BasketClose,
    BasketContent,
    BasketEmpty,
    BasketItem
} from "./style";
import {ReceiptIceComponent} from "../../components/receipt-ice-component/ReceiptIceComponent";
import {deleteBasket, deleteTotalPrice} from "../../service/store/actions";
import {faTimes} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {BASKET_TEXT} from "./constants";

class BasketPage extends React.Component<OwnProps, State>{
    constructor(props: OwnProps){
        super(props);
        this.state ={
        }
    }

    handleDeleteIceCream = (index: number) => {
        this.props.deleteBasket(index);
        this.props.deleteTotalPrice(index);
    }

    render() {

        const {totalPrice, basket} = this.props;

        if (basket.length >= 1){
            return(
                <BasketContent>
                    {basket.map((iceCream: any, index: number) => {
                       return (
                           <BasketItem key={index} num={index} picture={iceCream.ice.image}>
                                   <BasketClose onClick={()=> this.handleDeleteIceCream(index)}>
                                       <FontAwesomeIcon icon={faTimes}/>
                                   </BasketClose>
                               <ReceiptIceComponent iceCream={iceCream} />
                           </BasketItem>
                       )
                    })}
                </BasketContent>
            )
        } else return (
            <BasketEmpty>
                {BASKET_TEXT.empty}
            </BasketEmpty>
        )

    }
}

const mapStateToProps = (store: any) => {
    return {
        totalPrice: store.totalPrice,
        basket: store.basket
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        deleteBasket: (payload: any) => dispatch (deleteBasket(payload)),
        deleteTotalPrice: (payload: any) => dispatch (deleteTotalPrice(payload))
    }
}
export default connect (mapStateToProps, mapDispatchToProps)(BasketPage)