import React from "react";
import { useDispatch } from 'react-redux';
import * as sessionActions from '../store/session';

function DemoButton() {
    const dispatch = useDispatch()

    const handleClick = (e) => {
        e.preventDefault();
        return dispatch(sessionActions.login({credential: 'admin', password: 'test'}))
            .catch(async (res) => {
            let data;
            try {
            data = await res.clone().json();
            } catch {
            data = await res.text();
            }
        });
    }

    return (
        <button onClick={handleClick}>Demo</button>
    )
}

export default DemoButton;



