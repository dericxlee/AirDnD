import React from "react";
import { useDispatch } from 'react-redux';
import * as sessionActions from '../../store/session';
import './DemoButton.css'

function DemoButton() {
    const dispatch = useDispatch()

    const handleClick = (e) => {
        e.preventDefault();
        return dispatch(sessionActions.login({email: 'admin@test.com', password: 'test'}))
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
        <ul id='community-btn-box'>
            <li id='community-btn-item'>
                <button id='community-btn' onClick={handleClick}>Demo</button>
            </li>
            <li id='community-btn-item'>
                <button id='community-btn'>Continue with Facebook</button>
            </li>
            <li id='community-btn-item'>
                <button id='community-btn'>Continue with Google</button>
            </li>
            <li id='community-btn-item'>
                <button id='community-btn'>Continue with Apple</button>
            </li>
        </ul>

    )
}

export default DemoButton;



