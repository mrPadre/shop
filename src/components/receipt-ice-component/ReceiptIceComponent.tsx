import React from 'react';
import {OwnProps} from "./type";
import {CURRENCY} from "../../constant";
import {
    ReceiptItem,
    ReceiptName,
    ReceiptNumber,
    ReceiptPrice,
    ReceiptTotalPrice
} from "./style";

export const ReceiptIceComponent: React.FC<OwnProps> = (props: OwnProps) => {
    const {iceCream} = props;
    let count = 0;
    let price = 0;

    return(
        <React.Fragment>
            {Object.keys(iceCream).map((item: string, index: number) => {
                switch (item){
                    case 'waffle':
                    case 'ice':
                    case 'syrup': {
                        if (iceCream[item].image) {
                            price += iceCream[item].price ;
                            return (
                                <ReceiptItem key={index}>
                                    <ReceiptNumber>
                                        # {count += 1}
                                    </ReceiptNumber>
                                    <ReceiptName>
                                        {iceCream[item].name}
                                    </ReceiptName>
                                    <ReceiptPrice>
                                        {iceCream[item].price} {CURRENCY.shot}
                                    </ReceiptPrice>
                                </ReceiptItem>
                            )
                        } else return;
                    }
                    case 'sprinkling': {
                        if (iceCream.sprinkling.length >= 1)
                            return (
                                iceCream.sprinkling.map((sweet: any, index: number) => {
                                    price += sweet.price;
                                    return (
                                        <ReceiptItem key={index}>
                                            <ReceiptNumber>
                                                # {count += 1}
                                            </ReceiptNumber>
                                            <ReceiptName>
                                                {sweet.name}
                                            </ReceiptName>
                                            <ReceiptPrice>
                                                {sweet.price} {CURRENCY.shot}
                                            </ReceiptPrice>
                                        </ReceiptItem>
                                    )
                                })
                            )
                    }
                }
            })}
            <ReceiptTotalPrice>
                Всего : {price} {CURRENCY.long}
            </ReceiptTotalPrice>
        </React.Fragment>
    )
}