import React from 'react';
import {OwnProps, State} from "./types";
import {Map, Placemark, YMaps} from "react-yandex-maps";
import {
    AddressIcon,
    AddressItem,
    ContactAddress,
    ContactMap,
    ContactMapButton
} from "./style";
import {ADDRESS_FOOTER_TEXT, PLACEHOLDER_IMG, SHOPS} from "./constants";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faMapMarkerAlt
} from "@fortawesome/free-solid-svg-icons";
import ButtonComponent from "../../components/button-component/ButtonComponent";
import {
    selectShop
} from "../../service/store/actions";
import {connect} from "react-redux";

class ContactPage extends React.Component<OwnProps, State>{
    constructor(props: OwnProps) {
        super(props);
        this.state = {
            point: this.props.shop.coordinates,
            zoom: 14,
            selectItem: 0
        }
    }

    handleChangeMarc = (point: any, index: number) => {
        this.setState({point: point.coordinates});
        this.setState({selectItem: index});
        this.props.selectShop(point);
    }

    setMapZoom = (set: any) => {
        if (set === 'minus'){
            this.setState(prevState => ({
                zoom: prevState.zoom - 1
            }))
        } else if (set === 'plus'){
            this.setState(prevState => ({
                zoom: prevState.zoom + 1
            }))
        }

    }

    render() {

        let {point, zoom, selectItem} = this.state;

        return(
            <React.Fragment>
                <ContactAddress>
                    {SHOPS.map((item: any, index: number) => {
                        let select = false;
                        if (item.coordinates === point){
                            select = true
                        }
                        return (
                            <AddressItem key={index} select={select} onClick={() => this.handleChangeMarc(item, index)}>
                                <AddressIcon>
                                    <FontAwesomeIcon icon={faMapMarkerAlt}/>
                                </AddressIcon>
                                {item.address}
                            </AddressItem>
                        )
                    })}
                </ContactAddress>
                <ContactMap>
                    <YMaps>
                        <Map
                            state={{ center: point, zoom: zoom }}
                            width="100%"
                            height='80vh'
                            modules={['geoObject.addon.balloon', 'geoObject.addon.hint']}
                        >
                            <ContactMapButton>
                                <ButtonComponent title="+" action={() => this.setMapZoom('plus')} size="30px"/>
                                <ButtonComponent title="-" action={() => this.setMapZoom('minus')} size="30px"/>
                            </ContactMapButton>
                            {SHOPS.map((pointItem: any, index: number) => {
                                let size = [25, 54];

                                if (point === pointItem.coordinates){
                                    size = [45, 99]
                                }
                                return (
                                    <Placemark key={index} geometry={pointItem.coordinates}  properties={{
                                        hintContent: pointItem.address,
                                        balloonContentHeader: pointItem.address,
                                        balloonContentBody: `<div style="display: flex; flex-direction: row">
 <img src=${PLACEHOLDER_IMG.standart} alt="мороженое" style= "width: 70px; height: 150px"/> 
 <div style="display: flex; flex-direction: column; justify-content: space-around">
 <p style="margin: 10px; font-size: 14px;"> ${pointItem.description}</p> 
 <a style="margin: 10px; font-size: 18px; align-self: center; color: #80BBFF" href="tel:${pointItem.phone}">Телефон:  ${pointItem.phone} </a>
</div>
 </div>`,
                                        balloonContentFooter: `<div style="display: flex; flex-direction: column; align-items: center">
<p style="margin: 5px;">${ADDRESS_FOOTER_TEXT.workTime}</p>
<p style="margin: 5px;">${ADDRESS_FOOTER_TEXT.brand}</p>
</div>`
                                    }}
                                               options={{
                                                   iconLayout: 'default#image',
                                                   iconImageHref: PLACEHOLDER_IMG.standart,
                                                   iconImageSize: size,
                                                   iconImageOffset: [0, 0],
                                               }}/>
                                )
                            }) }

                        </Map>
                    </YMaps>
                </ContactMap>

            </React.Fragment>
        )
    }
}

const mapStateToProps = (store: any) => {
    return {
        shop: store.shop
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        selectShop: (payload: any) => dispatch (selectShop(payload)),
    }
}
export default connect (mapStateToProps, mapDispatchToProps)(ContactPage)