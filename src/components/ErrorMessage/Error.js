import React from 'react';
import {ErrorWrapperStyled} from "./Error.style";

export const Error = ({errorMessage}) =>
        <ErrorWrapperStyled>{errorMessage}</ErrorWrapperStyled>;