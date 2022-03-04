import React from 'react';
import { ReactDOM } from 'react-dom';
import App from './App';
import { isTSAnyKeyword } from "@babel/types";

it("renders without crashing", () => {
    const body = document.createElement("body");
    ReactDOM.render(<div className=''></div>, body)
})