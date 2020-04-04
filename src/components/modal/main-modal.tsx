import React from 'react';
import {MainModal} from "./style";

interface OwnProps{
    show: boolean;
    handleHide: Function;
    children: any;
}

export const  MainModalComponent = (props: OwnProps) => {

    const handleCloseModal = (e: any) => {
        let target = e.target;
        if (target.id === 'modal' ) {
            props.handleHide();
        }
    }

    return (
        <MainModal show={props.show} id="modal" onClick ={(event) => handleCloseModal(event)}>
            {props.children}
        </MainModal>
    )

}
