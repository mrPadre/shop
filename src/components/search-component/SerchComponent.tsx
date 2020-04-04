import React, {SyntheticEvent} from 'react';
import {OwnProps, State} from "./types";
import {Search, SearchBtn, SearchInput, SearchResult} from "./style";
import ButtonComponent from "../button-component/ButtonComponent";
import {connect} from "react-redux";
import {changeValue} from "../../service/store/actions";
import {URL_CATALOG} from "../../service/router/url";
import {Link} from "react-router-dom";
import {SEARCH_TEXT} from "./constants";

class SearchComponent extends React.Component<OwnProps, State>{
    constructor(props: OwnProps){
        super(props);
        this.state = {
            isSearch: false
        }
    }


    public handleCheckValue = () => {
        this.setState({
            isSearch: true
        })
        setTimeout(() => {
            this.setState({
                isSearch: false
            })
        }, 3000)
    };

    public handleSubmit = (e: any) => {
        e.preventDefault()

    };

    public render() {
        const {changeValue} = this.props;
        return (
            <Search onSubmit={(event) => this.handleSubmit(event)}>
                <SearchInput onChange={(event) => changeValue(event)}/>
                <SearchBtn>
                    <Link to={URL_CATALOG}>
                        <ButtonComponent
                            title="Поиск"
                            color="red"
                            size="150px"
                            icon="search"
                            action={this.handleCheckValue}
                            type="submit"
                        />
                    </Link>
                </SearchBtn>
                <SearchResult isSearch={this.state.isSearch}>
                    {SEARCH_TEXT.result}
                </SearchResult>
            </Search>
        )
    }
}

const mapStateToProps = (store: any) => {
    return {

    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        changeValue: (payload: any) => dispatch (changeValue(payload))
    }
}


export default connect(mapStateToProps, mapDispatchToProps) (SearchComponent)