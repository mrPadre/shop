import React from 'react';
import ButtonComponent from "../button-component/ButtonComponent";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheck, faSyncAlt} from "@fortawesome/free-solid-svg-icons";
import {CURRENCY} from "../../constant";
import {SellPaySum} from "../modal/sell-modal/style";

interface OwnProps{
    screen: number;
    price: number;
}

const SellInfo: React.FC <OwnProps> = (props: OwnProps): any => {

    let {screen, price} = props;

    if (screen === 1) {
        return (
            <React.Fragment>
                К оплате : {price} {CURRENCY.long}
            </React.Fragment>
        )
    } else if (screen === 2) {
        return (
            <React.Fragment>
                Связь с банком ...
            </React.Fragment>
        )
    }else if (screen === 3) {
        return (
            <React.Fragment>
               Ответ получен
            </React.Fragment>
        )
    }else if (screen === 4) {
        return (
            <React.Fragment>
                Успешно
            </React.Fragment>
        )
    }
}

export default React.memo(SellInfo);