import * as T from './type-list';

export const addBasket = (payload) => {
    return {
        type: T.ADD_BASKET,
        payload: payload
    }
}

export const cleanBasket = () => {
    return {
        type: T.CLEAN_BASKET,
        payload: ''
    }
}

export const addReceipt = (payload) => {
    return {
        type: T.ADD_RECEIPT,
        payload: payload
    }
}

export const selectWaffle = (payload) => {
    return {
        type: T.SELECT_WAFFLE,
        payload: payload
    }
}

export const selectIce = (payload) => {
    return {
        type: T.SELECT_ICE,
        payload: payload
    }
}

export const selectSyrup = (payload) => {
    return {
        type: T.SELECT_SYRUP,
        payload: payload
    }
}

export const selectSprinkling = (payload) => {
    return {
        type: T.SELECT_SPRINKLING,
        payload: payload
    }
}