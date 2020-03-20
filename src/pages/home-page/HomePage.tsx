import React from 'react';
import {OwnProps, State} from "./types";
import {HomeBox, MainImage} from "./style";
import Col from "../../components/column-component/Col";
import Carousel from "../../components/carusel-component/CarouselComponent";
import {
    ICE_IMAGE,
    SYRUP_IMAGE,
    WAFFLE_IMAGE,
    SPRINKLING_IMAGE,
    MAIN_IMG
} from "./constant";
import ShowSelectIce
    from "../../components/show-select-ice-component/ShowSelectIce";
import {Products} from "../../components/carusel-component/types";
import {connect} from "react-redux";
import {
    addBasket, selectIce, selectSprinkling, selectSyrup,
    selectWaffle
} from "../../service/store/actions";

class HomePage extends React.Component<OwnProps, State>{
    constructor(props: OwnProps) {
        super(props);
        this.state = {
            price: {
                wafflePrice: 0,
                icePrice: 0,
                syrupPrice: 0,
                sprinklingArr: [0]
            }
        }
    }

    priceSum = () => {
        let sum = 0;
        const {icePrice, sprinklingArr, syrupPrice, wafflePrice} = this.state.price;
        sprinklingArr.map((item: any) => sum += item);
        sum += icePrice;
        sum += syrupPrice;
        sum += wafflePrice;
        return sum;
    }


    render() {
        const { selectIce, selectWaffle, selectSprinkling, selectSyrup } = this.props;

        return(
            <React.Fragment>
                   <Col width='40vw'>
                       <HomeBox>
                           <Carousel productList={WAFFLE_IMAGE} type='waffle' select={selectWaffle}/>
                       </HomeBox>
                       <HomeBox>
                           <Carousel productList={ICE_IMAGE} type='ice' select={selectIce}/>
                       </HomeBox>
                       <HomeBox>
                           <Carousel productList={SYRUP_IMAGE} type='syrup' select={selectSyrup}/>
                       </HomeBox>
                       <HomeBox>
                           <Carousel productList={SPRINKLING_IMAGE} type='sprinkling' select={selectSprinkling}/>
                       </HomeBox>
                   </Col>
                <Col width='20vw'>
                    <MainImage src={MAIN_IMG}/>
                </Col>
                <Col width="40vw">
                    <ShowSelectIce price={this.priceSum}/>
                </Col>
            </React.Fragment>
        )
    }
}
const mapStateToProps = (store: any) => {
    return {
        basket: store.basket,
        receipt: store.receipt,
        iceCream: store.iceCream
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        addBasket: (payload: any) => dispatch (addBasket(payload)),
        selectWaffle: (payload: any) => dispatch (selectWaffle(payload)),
        selectIce: (payload: any) => dispatch (selectIce(payload)),
        selectSyrup: (payload: any) => dispatch (selectSyrup(payload)),
        selectSprinkling: (payload: any) => dispatch (selectSprinkling(payload)),

    }
}


export default connect(mapStateToProps, mapDispatchToProps) (HomePage)