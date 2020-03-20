import React, {SyntheticEvent} from 'react';
import {OwnProps, State} from "./types";
import {Search, SearchInput} from "./style";

export default class SearchComponent extends React.Component<OwnProps, State>{
    constructor(props: OwnProps){
        super(props);
        this.state = {
            value: ''
        }
    }
    public handleChangeValue = (e:SyntheticEvent<HTMLInputElement>) => {
        let value = e.currentTarget.value;
        this.setState({value: value});
        console.log(this.state.value);
    };

    public render() {
        return (
            <Search>
                <SearchInput onChange={(event) => this.handleChangeValue(event)}/>
            </Search>
        )
    }
}