import React from 'react';
import {PaginatorBody, PaginatorItem, PaginatorNavigation} from "./style";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowLeft, faArrowRight} from "@fortawesome/free-solid-svg-icons";

interface OwnProps{
    arrLength: number;
    step: number;
    setPage: Function;
    changePage: Function;
    select: number;
}

const Paginator: React.FC<OwnProps> = (props: OwnProps) => {

    const { arrLength, step, setPage, changePage, select} = props;

    const arr = [];
    let count = 0;


    for (let i = 1; i <= arrLength; i += step){
        count += 1;
        arr.push(count);
    }

    return (
        <PaginatorBody>
            <PaginatorNavigation onClick={() => changePage('minus', arr.length)}>
                <FontAwesomeIcon icon={faArrowLeft}/>
            </PaginatorNavigation>
            {arr.map((item: any, index: number) => {
                let isSelect = false;
                if (select === index) {
                    isSelect = true;
                }
                return (
                    <PaginatorItem key={index} onClick={() => setPage(item)} select={isSelect}>
                        {item}
                    </PaginatorItem>
                )
            })}
            <PaginatorNavigation onClick={() => changePage('plus', arr.length)}>
                <FontAwesomeIcon icon={faArrowRight}/>
            </PaginatorNavigation>
        </PaginatorBody>
    )
}

export default React.memo(Paginator);
