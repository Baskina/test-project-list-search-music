import React from 'react';
import useSearch from "./useSearch";
import {SearchWrapperStyled} from './Search.style'
import {Error} from "../ErrorMessage/Error";
import {Loader} from "../Loader/Loader";

export const SearchComponent = ({setMusicList}) => {
    const {
        changeMusic,
        errorMessageFromServer,
        loading
    } = useSearch({setMusicList});

    return (
        <SearchWrapperStyled>
            <Error errorMessage={errorMessageFromServer}/>
            <Loader loading={loading} />
            <input type="search"
                   placeholder={'...lets music play forever'}
                   onChange={changeMusic}/>
        </SearchWrapperStyled>
    )
};

