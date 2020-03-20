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


class Carousel extends React.Component<OwnProps, State>{
    constructor(props: OwnProps){
        super(props);
        this.state = {

        }
    }
    handleScroll = (e: any) => {
        let target = e.currentTarget;
        let position = target.scrollTop;
        let deti = target.children;
        let posledniy = target.lastChild;
        if (position >= target.scrollTopMax) {
            console.log('все пиздец');
        } else {
            console.log(posledniy, position, target, deti);
        }
    }

    render(){
        const {productList, type, select, iceCream} = this.props;
        return (
            <CarouselBody onScroll={(event) => this.handleScroll(event)}>
                {productList.map((item: any, index: number) => {
                    let checkItem = false;
                    if (iceCream[type].name === item.name || iceCream.sprinkling.includes(item)){
                        checkItem = true;
                    }
                    return (
                        <CarouselItem
                            key={item.index}
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
                                {item.price} руб.
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