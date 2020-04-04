import React from 'react';
import {OwnProps, State} from "./types";

import {connect} from "react-redux";
import {MainModalComponent} from "../main-modal";
import _ from 'lodash';

import {
    SellAddressP,
    SellCloseBtn,
    SellItem,
    SellItemPrice,
    SellItemText,
    SellModalBody,
    SellNumber,
    SellNumberBody,
    SellNumberText,
    SellPayCardBrands,
    SellPayContainer,
    SellPayContent, SellPayImg, SellPaySum,
    SellPayTitle,
    SellReceipt,
    SellReceiptTitle,
    SellShopAddress,
    SellThanksBox,
    SellThanksText,
    SellTotalPrice
} from './style';
import {
    changeSellShow,
    cleanBasket,
    setSellNumber,
    cleanTotalPrice
} from "../../../service/store/actions";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTimes} from "@fortawesome/free-solid-svg-icons";
import {IceCream} from "../../../pages/home-page/types";
import {CURRENCY} from "../../../constant";
import {
    faCcApplePay,
    faCcMastercard,
    faCcVisa
} from "@fortawesome/free-brands-svg-icons";
import {PayCard} from "./constants";
import Imitation from "../../imitation-component/ImitationComponent";
import SellInfo from "../../sell-info-component/SellInfoComponent";



class SellModal extends React.Component<OwnProps, State>{
    constructor(props: OwnProps) {
        super(props);
        this.state = {
            screen: 1
        }
    }


    changeScreenState = (screen: number) => {
          return this.setState({screen});
    }

    endOfImitation = () => {
        this.changeScreenState(1);
        this.props.cleanBasket();
        this.props.cleanTotalPrice();
        if (this.props.sellShow) {
            this.props.changeSellShow();
        }
        this.props.setSellNumber();
    }

    render () {
        let {sellShow,
            changeSellShow,
            basket,
            shop,
            totalPrice,
            sellNumber
        } = this.props;

        let newArr: any = [];
        let uniqArr: any = [];
        let count = 0;
        let price: any = 0;


        if (totalPrice.length) {
           price = totalPrice.reduce((a:number,b: number)=> a + b);
        }


        {basket.map((iceCream: IceCream) => {
            Object.keys(iceCream).map((name: string) => {
                switch(name){
                    case 'ice':
                    case 'waffle':
                    case 'syrup':
                        return newArr.push({
                            image: iceCream[name].image,
                            name: iceCream[name].name,
                            price: iceCream[name].price
                        });
                    case 'sprinkling': iceCream.sprinkling.map((item: any) => {
                        return newArr.push({
                            image: item.image,
                            name: item.name,
                            price: item.price
                        })
                    })
                }
            })

        })}

        uniqArr = _.uniqWith(newArr, _.isEqual);

        return (
            <MainModalComponent handleHide={changeSellShow} show={sellShow}>
                <SellModalBody>
                    <SellCloseBtn onClick={() => changeSellShow()}>
                        <FontAwesomeIcon icon={faTimes}/>
                    </SellCloseBtn>
                    <SellReceipt>
                        <SellShopAddress>
                            <SellAddressP>
                                {shop.address}
                            </SellAddressP>
                            <SellAddressP>
                                Не существующий магазин
                            </SellAddressP>
                            <SellAddressP>
                                {shop.phone}
                            </SellAddressP>
                        </SellShopAddress>
                        <SellReceiptTitle>
                            Кассовый чек:
                        </SellReceiptTitle>

                        {uniqArr.map((item: any, index: number) => {
                            let x = newArr.filter((a: any) => a.name === item.name).length;
                            count += 1;
                            return (
                                <SellItem key={index}>
                                    <SellItemText>
                                        # {count} {item.name}
                                    </SellItemText>
                                    <SellItemPrice>
                                        {x} * {item.price} = {x * item.price} {CURRENCY.shot}
                                    </SellItemPrice>
                                </SellItem>
                            )
                        })}
                        <SellTotalPrice>
                            ИТОГО: {price} {CURRENCY.long}
                        </SellTotalPrice>
                        <SellNumber>
                            <SellNumberText>
                                Номер вашего заказа:
                            </SellNumberText>
                            <SellNumberBody>
                                {sellNumber}
                            </SellNumberBody>
                        </SellNumber>
                        <SellThanksBox>
                            <SellThanksText>
                                СПАСИБО ЧТО ВЫБРАЛИ НАС
                            </SellThanksText>
                            <SellThanksText>
                                хоть это и не настоящий магазин
                            </SellThanksText>
                            <SellThanksText>
                                ПРИЯТНОГО АППЕТИТА
                            </SellThanksText>
                        </SellThanksBox>
                    </SellReceipt>
                    <SellPayContainer>
                        <SellPayTitle>
                            Вставьте карту в платежный терминал
                        </SellPayTitle>
                        <SellPayContent>
                            <SellPayImg src={PayCard} alt="Оплата картой"/>
                            <SellPaySum>
                               <SellInfo screen={this.state.screen} price={price}/>
                            </SellPaySum>
                            <Imitation
                                changeScreen={this.changeScreenState}
                                endOfImitation={this.endOfImitation}
                                screen={this.state.screen}
                                closeSellShow={changeSellShow}
                            />
                        </SellPayContent>
                        <SellPayCardBrands>
                            <FontAwesomeIcon icon={faCcMastercard}/>
                            <FontAwesomeIcon icon={faCcVisa}/>
                            <FontAwesomeIcon icon={faCcApplePay}/>
                        </SellPayCardBrands>
                    </SellPayContainer>
                </SellModalBody>
            </MainModalComponent>

        )
    }
}

const mapStateToProps = (store: any) => {
    return {
        sellShow: store.sellShow,
        basket: store.basket,
        shop: store.shop,
        totalPrice: store.totalPrice,
        sellNumber: store.sellNumber
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        changeSellShow: () => dispatch(changeSellShow()),
        setSellNumber: () => dispatch(setSellNumber()),
        cleanBasket: () => dispatch(cleanBasket()),
        cleanTotalPrice: () => dispatch(cleanTotalPrice())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(SellModal)