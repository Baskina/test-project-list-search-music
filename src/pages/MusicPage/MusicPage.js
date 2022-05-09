import React, {useState} from 'react';
import {SearchComponent, ListComponent} from "../../components";
import {PageWrapperStyled} from "./MusicPage.style";

export const MusicPage = () => {
    const [musicList, setMusicList] = useState([]);
    return (
        <PageWrapperStyled>
                <SearchComponent setMusicList={setMusicList}/>
                <ListComponent musicList={musicList}/>
        </PageWrapperStyled>
    )
};
