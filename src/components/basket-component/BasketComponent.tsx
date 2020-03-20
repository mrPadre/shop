import React from 'react';
import {OwnProps, State} from "./types";
import {BasketBody, BasketImage} from "./style";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlus} from "@fortawesome/free-solid-svg-icons";
import {connect} from "react-redux";


class BasketComponent extends React.Component <OwnProps, State> {

    render() {
        const {iceCream} = this.props;
        return(
         <React.Fragment>
             <BasketBody>
                 {Object.keys(iceCream).map((item: any, index: number) => {
                     switch (item){
                         case 'waffle':
                         case 'ice':
                         case 'syrup': {
                  if (iceCream[item].image) {
                      return (
         <React.Fragment>
             <BasketImage src={iceCream[item].image} alt={iceCream[item].name}/>
             <FontAwesomeIcon icon={faPlus}/>
          </React.Fragment>
                      )
                  } else return;
                         }
                         case 'sprinkling': {
                             if (iceCream.sprinkling.length >= 1)
                             return (
    iceCream.sprinkling.map((sweet: any, index: number) => {
        return (
            <React.Fragment key={index}>
                <BasketImage
                    src={sweet.image}
                    alt={sweet.name}
                />
                <FontAwesomeIcon icon={faPlus}/>
            </React.Fragment>

                )


                                 })
                             )
                         }
                     }
                 })}

             </BasketBody>
         </React.Fragment>
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
export default connect(mapStateToProps, mapDispatchToProps) (BasketComponent)