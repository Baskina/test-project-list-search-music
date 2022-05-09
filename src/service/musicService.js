import {musicAPI} from '../api/musicAPI';
import axios from "axios";

export const musicService = (searchItem, setMusicList, setErrorMessageFromServer, setLoading) => {
    return axios
        .get(`${musicAPI}${searchItem}`)
        .then((res) => {
            return setMusicList(res?.data?.results
                .sort((a, b) => {
                    if (a.collectionName < b.collectionName) return -1;
                    if (a.collectionName > b.collectionName) return 1;
                    return 0;
                })
                .slice(0, 5)
                .map(item => item.collectionName))

        })
        .catch((error) => {
            console.error(error);
            setErrorMessageFromServer(error.message);
        })
        .finally(() => {
            setLoading(false)
        })
};