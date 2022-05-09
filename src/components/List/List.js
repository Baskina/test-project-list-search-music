import React from 'react';
import useList from './useList';
import {ListStyled} from './List.style';

export const ListComponent = ({musicList}) => {
    const {shownList} = useList({musicList});

    return (
        <ListStyled>
            {
                shownList.map((item, index) => (
                    <li key={item + index}>{item}</li>
                ))
            }
        </ListStyled>
    )
};

