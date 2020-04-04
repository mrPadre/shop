import React from 'react';
import {OwnProps, State} from "./types";
import {
    CatalogBody,
    CatalogContent,
    CatalogImage,
    CatalogItem, CatalogPaginator, CatalogPrice,
    CatalogText
} from "./style";
import Paginator from "../../components/paginator-component/PaginatorComponent";

import {CURRENCY} from "../../constant";
import {connect} from "react-redux";


class CatalogPage extends React.Component<OwnProps, State>{
    constructor(props: OwnProps) {
        super(props);
        this.state = {
            currentPage: 0
        }
    }

    handleSetPage = (page: number) => {
        this.setState({currentPage: page - 1});
    }


    handleChangePage = (direction: string, max: number) => {
        if (direction === 'minus' && this.state.currentPage > 0) {
            this.setState(prevState => ({
                currentPage: prevState.currentPage - 1
            }));
        } else if (direction === 'plus' && this.state.currentPage < max - 1) {
            this.setState(prevState => ({
                currentPage: prevState.currentPage + 1
            }));
        }
    }

    render() {
        let { catalog, searchValue} = this.props;
        let {currentPage} = this.state;
        let step = 10;
        let a = currentPage * step;
        let b = a + step;

        let newArr: any = [];
        catalog.map((item:any) => {
            if (item.name.toLowerCase().includes(searchValue.toLocaleLowerCase())) {
                newArr.push(item);
            }
        });

        let redactArr = newArr.slice(a, b);

        return(
            <CatalogBody>
                <CatalogPaginator>
                    <Paginator arrLength={newArr.length} step={step} setPage={this.handleSetPage} changePage={this.handleChangePage} select={currentPage}/>
                </CatalogPaginator>
              <CatalogContent>
                  {redactArr.map((item: any, index: number) => {
                      return(
                          <CatalogItem key={index}>
                              <CatalogImage src={item.image} alt={item.name}/>
                              <CatalogText>{item.name}</CatalogText>
                              <CatalogPrice>{item.price} {CURRENCY.long}</CatalogPrice>
                          </CatalogItem>
                      )
                  })}

              </CatalogContent>
                <CatalogPaginator>
                    <Paginator arrLength={newArr.length} step={step} setPage={this.handleSetPage} changePage={this.handleChangePage} select={currentPage}/>
                </CatalogPaginator>
            </CatalogBody>
        )
    }
}

const mapStateToProps = (store: any) => {
    return {
        iceArr: store.iceArr,
        waffleArr: store.waffleArr,
        syrupArr: store.syrupArr,
        sprinklingArr: store.sprinklingArr,
        catalog: store.catalog,
        searchValue: store.searchValue
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
    }
}


export default connect(mapStateToProps, mapDispatchToProps) (CatalogPage);