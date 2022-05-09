import {useEffect, useState} from 'react';

const useList = (props) => {
    const {musicList} = props;
    const [shownList, setShownList] = useState(['A', 'B', 'C', 'D', 'E']);

    const shiftElement = (shownList, musicList) => {
        let lastElement;
        if (musicList.length) {
            shownList.shift();
            lastElement = musicList.shift();
        } else {
            lastElement = shownList.shift();
        }
        return [...shownList, lastElement];
    };

    useEffect(() => {
        const listMovingLoop = setInterval(() => {
            setShownList(shiftElement(shownList, musicList));
        }, 1000);

        return () => clearInterval(listMovingLoop);

    }, [shownList]);

    return {
        shownList
    };
};

export default useList;