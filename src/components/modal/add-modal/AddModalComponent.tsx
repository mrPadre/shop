import React from 'react';
import {OwnProps, State} from "./type";
import {MainModalComponent} from "../main-modal";
import {
    CloseBtn,
    ModalBody,
    ModalButton,
    ModalContent, ModalImg, ModalInfo, ModalPrice,
    ModalTitle
} from "./style";
import {connect} from "react-redux";
import ButtonComponent from "../../button-component/ButtonComponent";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTimes} from "@fortawesome/free-solid-svg-icons";
import IceCream from '../../../img/main3.png';
import {
    addBasket,
    addTotalPrice, changeSellShow,
    cleanIceCream
} from "../../../service/store/actions";
import {CURRENCY} from "../../../constant";

class AddModalComponent  extends React.Component <OwnProps, State>{

    public addFunction = (ice: any, price: number): any => {
        this.props.addBasket(ice);
        this.props.addTotalPrice(price);
        this.props.handleHide();
        this.props.cleanIceCream();
    }

    public sellFunction = (ice: any, price: number) => {
        this.props.addBasket(ice);
        this.props.addTotalPrice(price);
        this.props.handleHide();
        this.props.cleanIceCream();
        this.props.changeSellShow();
    }




    render() {
        const {show, handleHide, iceCream, price, changeSellShow} = this.props;
        let a = iceCream.ice? '' : 'не';
        return (
            <MainModalComponent show={show} handleHide={handleHide}>
                <ModalBody>
                    <ModalImg src={IceCream} alt="iceCream">
                    </ModalImg>
                    <ModalInfo>
                    <CloseBtn onClick={() => handleHide()}>
                        <FontAwesomeIcon icon={faTimes}/>
                    </CloseBtn>
                    <ModalTitle>
                        Приятного аппетита
                    </ModalTitle>
                    <ModalContent>
                        Вы {a} выбрали мороженное {iceCream.ice.description} {iceCream.waffle.description} {iceCream.syrup.description} {
                        iceCream.sprinkling.map((item: any, index: number) => {
                            return (
                                ' + ' + item.description
                            )
                        })
                    }
                    </ModalContent>
                        <ModalPrice>
                            На сумму: {price} {CURRENCY.long}
                        </ModalPrice>
                    <ModalButton>
                        <ButtonComponent title="Положить в корзину и выбрать еще" action={() => this.addFunction(iceCream, price)} color="blue" size="50%"/>
                        <ButtonComponent title="Оплатить" action={() => this.sellFunction(iceCream, price)}/>
                    </ModalButton>
                    </ModalInfo>
                </ModalBody>
            </MainModalComponent>
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
        addTotalPrice: (payload: any) => dispatch (addTotalPrice(payload)),
        addBasket: (payload: any) => dispatch (addBasket(payload)),
        cleanIceCream: () => dispatch (cleanIceCream()),
        changeSellShow: () => dispatch(changeSellShow())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(AddModalComponent)