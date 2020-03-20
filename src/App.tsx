import React from 'react';
import Block from './components/block-component/Block';
import TopMenu from './components/top-menu/TopMenu';
import {Colors} from "./constants/colors";
import Col from "./components/column-component/Col";
import LogoComponent from "./components/logo-component/LogoComponent";
import Router from "./service/router/router";
import SearchComponent from "./components/search-component/SerchComponent";
import ButtonComponent from "./components/button-component/ButtonComponent";
import {Products} from "./components/carusel-component/types";
import BasketComponent from "./components/basket-component/BasketComponent";

interface OwnProps{

}

interface State{
    currentURL: string;
    basket: Array<Products>;
}



class App extends React.Component<OwnProps, State>{
    constructor(props: OwnProps){
        super(props);
        this.state = {
            currentURL: window.location.pathname,
            basket: []
        }

    }
    public handleChangePage = (page: any) => {
        this.setState({currentURL: page});
    }

    public addBasketProduct = (product: Products) => {
        let basketProducts = this.state.basket;
        basketProducts.push(product);
        return this.setState({basket: basketProducts})

    }

    render() {
        return (
            <React.Fragment>
                <Block size="60px" color={Colors.White}>
                    <Col width="40vw">
                        <TopMenu changePage={this.handleChangePage}/>
                    </Col>
                    <Col width="20vw">

                    </Col>
                    <Col width="40vw">
                        <BasketComponent/>
                    </Col>
                </Block>
                <Block size='10vh' color={Colors.Blue}>
                    <Col align="center">
                        <SearchComponent/>
                        <ButtonComponent
                            title="Поиск"
                            color="red"
                            size="150px"
                            icon="search"/>
                    </Col>
                    <Col align="center">
                        <LogoComponent />
                    </Col>
                    <Col align="center">
                    </Col>
                </Block>
                <Block size="80vh">
                    {Router}
                </Block>
                <Block size="20vh" color={Colors.Blue}>
                </Block>
            </React.Fragment>
        );
    }
}

export default App;
