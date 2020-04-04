import React from 'react';
import ButtonComponent from "../button-component/ButtonComponent";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheck, faSyncAlt} from "@fortawesome/free-solid-svg-icons";
import {ImitationSync, ImitationSyncAnim} from "./style";

interface OwnProps{
    screen: number;
    changeScreen: Function;
    endOfImitation: Function;
    closeSellShow: Function;
}

const Imitation: React.FC <OwnProps> = (props: OwnProps): any => {

    let {screen, changeScreen, endOfImitation, closeSellShow} = props;

    if (screen === 1) {
        return (
            <ButtonComponent title="Имитировать оплату" action={() => changeScreen(2)}/>
        )
    } else if (screen === 2) {
            setTimeout(() => changeScreen(3), 3000);
        return (
                <ImitationSyncAnim>
                    <FontAwesomeIcon icon={faSyncAlt}/>
                </ImitationSyncAnim>
        )
    }else if (screen === 3) {
        setTimeout(() => changeScreen(4), 2000);
        return (
            <ImitationSync>
                <FontAwesomeIcon icon={faCheck}/>
            </ImitationSync>
        )
    }else if (screen === 4) {
        setTimeout(() => endOfImitation(), 2000);
        return (
                <ButtonComponent title="Закрыть" action={() => closeSellShow()}/>
        )
    }
}

export default React.memo(Imitation);