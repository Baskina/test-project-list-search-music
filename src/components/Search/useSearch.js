import {useEffect, useState} from 'react';
import axios from "axios";
import config from "./search.config";

const useSearch = (props) => {
    const {setMusicList} = props;

    const [inputState, setInputState] = useState('');
    const [errorMessageFromServer, setErrorMessageFromServer] = useState('');
    const [loading, setLoading] = useState(false);

    const changeMusic = event => {
        setInputState(event.target.value);
    };

    useEffect(() => {
        setLoading(true);
        setErrorMessageFromServer('');
        const delayFetch = setTimeout(() => {
            const fetch = async () => {
                await axios(`${config.url}${inputState}`)
                    .then((res) => {
                        res.data.resultCount && setMusicList(res.data.results
                            .sort((a, b) => {
                                if (a.collectionName < b.collectionName) return -1;
                                if (a.collectionName > b.collectionName) return 1;
                                return 0;
                            })
                            .slice(0, 5)
                            .map(item => item.collectionName));
                    })
                    .catch(err => {
                        console.error(err);
                        setErrorMessageFromServer(err.message);
                    })
                    .finally(() => {
                        setLoading(false);
                    });
            };
            fetch();
        }, 1500);

        return () => clearTimeout(delayFetch);

    }, [inputState]);

    return {
        changeMusic,
        errorMessageFromServer,
        loading
    }
};

export default useSearch;