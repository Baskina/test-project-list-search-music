import React from 'react';
import {LoadingWrapperStyled} from "./Loader.style";

export const Loader = ({loading}) =>
        <LoadingWrapperStyled>{loading && 'loading...'}</LoadingWrapperStyled>;