import * as T from './type-list';

const initState = {
    basket: [ ' ' ],
    receipt: [ ' ' ],
    iceCream: {
        ice: '',
        waffle: '',
        syrup: '',
        sprinkling: []
    }
}

export const reducer = (store = initState, actions) => {
    switch(actions.type) {
        case T.ADD_BASKET: {
            let basket = [...store.basket];
            basket.push(actions.payload);
            return {...store, basket}
    }
        case T.CLEAN_BASKET: {
            let basket = [];
            return {...store, basket}
        }
        case T.ADD_RECEIPT: {
            let receipt = [...store.receipt];
            receipt.push(actions.payload);
            return {...store, receipt}
        }
        case T.SELECT_WAFFLE: {
            let waffle = {...actions.payload};
            return {...store, iceCream: {
                ...store.iceCream,
                waffle: waffle
            }}
        }
        case T.SELECT_ICE: {
            let ice = actions.payload;
            return {...store, iceCream: {
                ...store.iceCream,
                ice: ice
                }}
        }
        case T.SELECT_SYRUP: {
            let syrup = actions.payload;
            return {...store, iceCream: {
                ...store.iceCream,
                syrup: syrup
                }}
        }
        case T.SELECT_SPRINKLING: {
            let sprinkling = [...store.iceCream.sprinkling];
            if (!sprinkling.includes(actions.payload)) {
                sprinkling.push(actions.payload);
                return {...store, iceCream: {
                        ...store.iceCream,
                        sprinkling: sprinkling
                    }}
            }else return {...store}
        }
        default: return {...store}
    }

}