import React, {useState} from 'react';
import SearchComponent from "../../components/Search";
import ListComponent from "../../components/List";
import {PageWrapperStyled} from "./musicPage.style";

const MusicPage = () => {
    const [musicList, setMusicList] = useState([]);
    return (
        <PageWrapperStyled>
                <SearchComponent setMusicList={setMusicList}/>
                <ListComponent musicList={musicList}/>
        </PageWrapperStyled>
    )
};

export default MusicPage;