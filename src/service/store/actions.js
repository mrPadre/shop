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

export const deleteBasket = (payload) => {
    return {
        type: T.DELETE_BASKET,
        payload: payload
    }
}

export const cleanIceCream = () => {
    return {
        type: T.CLEAN_ICECREAM,
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

export const addTotalPrice = (payload) => {
    return {
        type: T.ADD_TOTAL_PRICE,
        payload: payload
    }
}

export const deleteTotalPrice = (payload) => {
    return {
        type: T.DELETE_TOTAL_PRICE,
        payload: payload
    }
}

export const cleanTotalPrice = () => {
    return {
        type: T.CLEAN_TOTAL_PRICE,
        payload: ''
    }
}

export const changeValue = (payload) => {
    return {
        type: T.CHANGE_VALUE,
        payload: payload
    }
}

export const selectShop = (payload) => {
    return {
        type: T.SELECT_SHOP,
        payload: payload
    }
}

export const setSellNumber = () => {
    return {
        type: T.SET_SELL_NUMBER,
        payload: ''
    }
}

export const changeSellShow = () => {
    return {
        type: T.CHANGE_SELL_SHOW,
        payload: ''
    }
}