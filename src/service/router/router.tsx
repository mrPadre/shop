import React from 'react';
import * as URL from './url';
import {Switch, Route} from 'react-router-dom';
import HomePage from "../../pages/home-page/HomePage";
import CatalogPage from "../../pages/Catalog-page/CatalogPage";
import ContactPage from "../../pages/contact-page/ContactPage";
import BasketPage from "../../pages/bascet-page/BasketPage";
import NotFound from "../../pages/not-found-page/NotFound";

export default (
    <Switch>
        <Route exact path={URL.URL_HOME} component={HomePage}/>
        <Route exact path={URL.URL_CATALOG} component={CatalogPage}/>
        <Route exact path={URL.URL_CONTACT} component={ContactPage}/>
        <Route exact path={URL.URL_BASKET} component={BasketPage}/>
        <Route exact component={NotFound}/>
    </Switch>
)