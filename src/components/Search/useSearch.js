import {useEffect, useState} from 'react';
import {musicService} from "../../service/musicService";
import {useDebounce} from "../../utils/useDebounce";

const useSearch = (props) => {
    const {setMusicList} = props;

    const [inputState, setInputState] = useState('');
    const [errorMessageFromServer, setErrorMessageFromServer] = useState('');
    const [loading, setLoading] = useState(false);

    const changeMusic = event => {
        setInputState(event.target.value);
    };

    useDebounce(() => {
        musicService(inputState, setMusicList, setErrorMessageFromServer, setLoading);
    })

    useEffect(() => {
        setLoading(true);
        setErrorMessageFromServer('');
    }, [inputState]);

    return {
        changeMusic,
        errorMessageFromServer,
        loading
    }
};

export default useSearch;