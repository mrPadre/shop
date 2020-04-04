import React from 'react';
import {OwnProps, State} from "./types";
import {HomeBox, MainImage} from "./style";
import Col from "../../components/column-component/Col";
import Carousel from "../../components/carusel-component/CarouselComponent";
import {
    MAIN_IMG
} from "./constant";
import ShowSelectIce
    from "../../components/show-select-ice-component/ShowSelectIce";
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
        const { selectIce, selectWaffle, selectSprinkling, selectSyrup, sprinklingArr, iceArr, waffleArr, syrupArr } = this.props;

        return(
            <React.Fragment>
                   <Col width='40vw'>
                       <HomeBox>
                           <Carousel productList={waffleArr} type='waffle' select={selectWaffle}/>
                       </HomeBox>
                       <HomeBox>
                           <Carousel productList={iceArr} type='ice' select={selectIce}/>
                       </HomeBox>
                       <HomeBox>
                           <Carousel productList={syrupArr} type='syrup' select={selectSyrup}/>
                       </HomeBox>
                       <HomeBox>
                           <Carousel productList={sprinklingArr} type='sprinkling' select={selectSprinkling}/>
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
        iceCream: store.iceCream,
        iceArr: store.iceArr,
        waffleArr: store.waffleArr,
        syrupArr: store.syrupArr,
        sprinklingArr: store.sprinklingArr
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