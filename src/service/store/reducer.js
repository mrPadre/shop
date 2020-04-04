import * as T from './type-list';
import {ICE, SPRINKLING, SYRUP, WAFFLE} from "./constants";
import {SHOPS} from "../../pages/contact-page/constants";

const initState = {
    basket: [],
    receipt: [ ' ' ],
    iceCream: {
        ice: '',
        waffle: '',
        syrup: '',
        sprinkling: []
    },
    totalPrice: [],
    searchValue: '',
    iceArr: ICE,
    waffleArr: WAFFLE,
    syrupArr: SYRUP,
    sprinklingArr: SPRINKLING,
    catalog: ICE.concat(WAFFLE, SYRUP, SPRINKLING),
    sellShow: false,
    shop: SHOPS[0],
    sellNumber: 1


}

export const reducer = (store = initState, actions) => {
    switch(actions.type) {
        case T.ADD_BASKET: {
            let basket = [...store.basket];
            basket.push(actions.payload);
            return {...store, basket}
    }
        case T.DELETE_BASKET: {
            let basket = [...store.basket];
            basket.splice(actions.payload, 1);
            return {...store, basket}
        }
        case T.CLEAN_BASKET: {
            let basket = [];
            return {...store, basket}
        }
        case T.CLEAN_ICECREAM: {
            let iceCream = {
                ice: '',
                    waffle: '',
                    syrup: '',
                    sprinkling: []
            }
            return {...store, iceCream}
        }
        case T.ADD_RECEIPT: {
            let receipt = [...store.receipt];
            receipt.push(actions.payload);
            return {...store, receipt}
        }
        case T.SELECT_SHOP: {
            let shop = {...store.shop};
            shop = actions.payload;
            return {...store, shop}
        }
        case T.CHANGE_SELL_SHOW: {
            let sellShow = store.sellShow;
            sellShow = !sellShow;
            return {...store, sellShow}
        }
        case T.ADD_TOTAL_PRICE: {
            let totalPrice = store.totalPrice;
            totalPrice.push(actions.payload);
            return {...store, totalPrice}
        }
        case T.CHANGE_VALUE: {
            let searchValue = store.searchValue;
            let target = actions.payload.currentTarget;
            searchValue = target.value;
            return {...store, searchValue}
        }
        case T.SET_SELL_NUMBER: {
            let sellNumber = store.sellNumber;
            if (sellNumber >= 99) {
                sellNumber = 1;
            } else {
                sellNumber += 1;
                return {...store, sellNumber}
            }
        } break
        case T.DELETE_TOTAL_PRICE: {
            let totalPrice = store.totalPrice;
            totalPrice.splice(actions.payload, 1);
            return {...store, totalPrice}
        }
        case T.CLEAN_TOTAL_PRICE: {
            let totalPrice = [];
            return {...store, totalPrice}
        }
        case T.SELECT_WAFFLE: {
            let waffle = {...actions.payload};
            if (waffle.name === store.iceCream.waffle.name) {
                return {...store, iceCream: {
                        ...store.iceCream,
                        waffle: ''
                    }}
            }else {
                return {...store, iceCream: {
                        ...store.iceCream,
                        waffle: waffle
                    }}
            }
        }
        case T.SELECT_ICE: {
            let ice = actions.payload;
            if (ice.name === store.iceCream.ice.name) {
                return {...store, iceCream: {
                        ...store.iceCream,
                        ice: ''
                    }}
            }else {
                return {...store, iceCream: {
                        ...store.iceCream,
                        ice: ice
                    }}
            }
        }
        case T.SELECT_SYRUP: {
            let syrup = actions.payload;
            if (syrup.name === store.iceCream.syrup.name) {
                return {...store, iceCream: {
                        ...store.iceCream,
                        syrup: ''
                    }}
            }else {
                return {...store, iceCream: {
                        ...store.iceCream,
                        syrup: syrup
                    }}
            }
        }
        case T.SELECT_SPRINKLING: {
            let sprinkling = [...store.iceCream.sprinkling];
            if (!sprinkling.includes(actions.payload)) {
                sprinkling.push(actions.payload);
                return {
                    ...store, iceCream: {
                        ...store.iceCream,
                        sprinkling: sprinkling
                    }
                }
            } else if (sprinkling.includes(actions.payload)) {
                sprinkling.splice(sprinkling.indexOf(actions.payload), 1);
                return {
                    ...store, iceCream: {
                        ...store.iceCream,
                        sprinkling: sprinkling
                    }
                }
            }
        } break
        default: return {...store}
    }

}