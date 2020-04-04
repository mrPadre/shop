import React, {SyntheticEvent} from 'react';
import {OwnProps, State} from "./types";
import {
    CarouselLine,
    CarouselPrice,
    CarouselTitle,
    CarouselBody,
    CarouselImg,
    CarouselItem
} from "./style";
import {connect} from "react-redux";
import {uuid} from "uuidv4";
import {CURRENCY} from "../../constant";


class Carousel extends React.Component<OwnProps, State>{
    constructor(props: OwnProps){
        super(props);
        this.state = {

        }
    }

    render(){
        const {productList, type, select, iceCream} = this.props;
        return (
            <CarouselBody>
                {productList.map((item: any, index: number) => {
                    let checkItem = false;
                    if (iceCream[type].name === item.name || iceCream.sprinkling.includes(item)){
                        checkItem = true;
                    }
                    return (
                        <CarouselItem
                            key={uuid()}
                            onClick={() => select(item)}
                            selected={checkItem}
                        >
                            <CarouselImg
                                src={item.image}
                                alt={item.name}
                            />
                            <CarouselTitle>
                                {item.name}
                            </CarouselTitle>
                            <CarouselPrice>
                                {item.price} {CURRENCY.shot}
                            </CarouselPrice>
                            <CarouselLine/>
                        </CarouselItem>
                    )
                })}
            </CarouselBody>
        )
    }
}
const mapStateToProps = (store: any) => {
    return {
        iceCream: store.iceCream
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
    }
}


export default connect(mapStateToProps, mapDispatchToProps) (Carousel)