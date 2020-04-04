import React from 'react';
import {OwnProps, State} from "./types";
import {
    ShowBody,
    ShowBtns,
    ShowFrame,
    ShowTitle
} from "./style";
import {connect} from "react-redux";
import ButtonComponent from "../button-component/ButtonComponent";
import AddModalComponent from "../modal/add-modal/AddModalComponent";
import {addTotalPrice} from "../../service/store/actions";
import {ReceiptIceComponent} from "../receipt-ice-component/ReceiptIceComponent";

class ShowSelectIce extends React.Component <OwnProps, State> {
    constructor(props: OwnProps){
        super(props);
        this.state ={
            show: false,
        }
    }

    handleBtnFunction = () => {
        this.handleShow();
    }

    handleShow = () => {
        return this.setState(prevState => ({
            show: !prevState.show
        }))
    }

    visibleOptions = (iceCream: any) => {
        if (iceCream.ice && iceCream.waffle) {
            return (
                <ButtonComponent title="Подтвердить" action={this.handleBtnFunction} size="250px"/>
            )
        }
    }


    render() {
        let {iceCream} = this.props;
        let price = 0;

        Object.keys(iceCream).map((key: string) => {
            switch(key){
                case 'ice':
                case 'waffle':
                case 'syrup':
                    if (iceCream[key].price) {
                        return price += iceCream[key].price;
                    }
                    break
                case 'sprinkling':
                    return iceCream.sprinkling.map((item:any) => {
                        price += item.price;
                    })
                default: return;
            }
        })

        return(
         <ShowFrame>
             <ShowTitle >
                 Ваш заказ :
             </ShowTitle>
                 <ShowBody>
                     <ReceiptIceComponent iceCream={iceCream}/>
                 </ShowBody>
             <ShowBtns>
                 {this.visibleOptions(iceCream)}
             </ShowBtns>
             <AddModalComponent show={this.state.show} handleHide={this.handleShow} price={price}/>
         </ShowFrame>
        )
    }
}
const mapStateToProps = (store: any) => {
    return {
        iceCream: store.iceCream
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        addTotalPrice: (payload: any) => dispatch (addTotalPrice(payload))
    }
}


export default connect(mapStateToProps, mapDispatchToProps) (ShowSelectIce)