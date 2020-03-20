import React from 'react';
import {OwnProps, State} from "./types";
import {ShowFrame, ShowText, ShowTitle} from "./style";
import {connect} from "react-redux";

class ShowSelectIce extends React.Component <OwnProps, State> {


    render() {
        let {iceCream} = this.props;
        let a = iceCream.ice? '' : 'не';
        return(
         <ShowFrame>
             <ShowTitle>
                 Ваш выбор:
             </ShowTitle>
             <ShowText>
                 Вы {a} выбрали мороженное {iceCream.ice.description} {iceCream.waffle.description} {iceCream.syrup.description} {
                     iceCream.sprinkling.map((item: any, index: number) => {
                         return (
                             ' + ' + item.description
                         )
                     })
             }
             </ShowText>

         </ShowFrame>
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


export default connect(mapStateToProps, mapDispatchToProps) (ShowSelectIce)