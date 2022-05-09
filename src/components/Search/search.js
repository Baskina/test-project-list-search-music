import React from 'react';
import useSearch from "./useSearch";
import {SearchWrapperStyled, ErrorWrapper, LoadingWrapper} from './search.style'

const SearchComponent = ({setMusicList}) => {
    const {
        changeMusic,
        errorMessageFromServer,
        loading
    } = useSearch({setMusicList});

    return (
        <SearchWrapperStyled>
            <ErrorWrapper>{errorMessageFromServer}</ErrorWrapper>
            <LoadingWrapper>{loading && 'loading...'}</LoadingWrapper>
            <input type="search"
                   placeholder={'...lets music play forever'}
                   onChange={changeMusic}/>
        </SearchWrapperStyled>
    )
};

export default SearchComponent;


