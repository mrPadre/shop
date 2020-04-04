import React, {SyntheticEvent} from 'react';
import Block from './components/block-component/Block';
import TopMenu from './components/top-menu/TopMenu';
import {Colors} from "./constants/colors";
import Col from "./components/column-component/Col";
import LogoComponent from "./components/logo-component/LogoComponent";
import Router from "./service/router/router";
import SearchComponent from "./components/search-component/SerchComponent";
import {Products} from "./components/carusel-component/types";
import BasketComponent from "./components/basket-component/BasketComponent";
import SellModal from "./components/modal/sell-modal/SellModalComponent";
import {FOOTER} from "./constant";


interface OwnProps{

}

interface State{
    currentURL: string;
    basket: Array<Products>;
    isMenu: boolean;
}



class App extends React.Component<OwnProps, State>{
    constructor(props: OwnProps){
        super(props);
        this.state = {
            currentURL: window.location.pathname,
            basket: [],
            isMenu: false
        }

    }
    public handleChangePage = (page: any) => {
        this.setState({currentURL: page});
    }

    public handleShowMenu = () => {
            this.setState(prevState => ({
                isMenu: !prevState.isMenu
            }))
    }

    render() {
        return (
            <React.Fragment>
                <Block size="60px" color={Colors.White}>
                    <Col width="40vw">
                        <TopMenu changePage={this.handleChangePage} isMenu={this.state.isMenu} closeMenu={this.handleShowMenu}/>
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
                    </Col>

                    <Col align="center">
                        <div onClick={this.handleShowMenu}>
                        <LogoComponent />
                        </div>
                    </Col>
                    <Col align="center">
                    </Col>
                </Block>
                <Block size="80vh">
                    {Router}
                </Block>
                <Block size="10vh" color={Colors.Blue}>
                    <Col>
                        <div className="footer__text">
                            {FOOTER.text}
                        </div>
                    </Col>
                    <Col>
                        <div className="footer__mail">
                            Написать мне : <a href={`mailto:${FOOTER.mail}`}> {FOOTER.mail} </a>
                        </div>
                    </Col>

                </Block>
                <SellModal/>
            </React.Fragment>
        );
    }
}

export default App;
