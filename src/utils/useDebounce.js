import {useEffect} from 'react';

export const useDebounce = (callback) => {
    useEffect(() => {
        const delayFetch = setTimeout(() => {
            callback();
        }, 1500);

        return () => clearTimeout(delayFetch);
    })
}