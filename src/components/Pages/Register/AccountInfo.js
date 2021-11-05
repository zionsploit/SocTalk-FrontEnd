import '../../Layouts/CSS/RegisterInfo.css';
import bgImage from '../../../assets/images/registrationbg.png';
import React, { useState, useEffect } from 'react';
import { Maybe } from '@fpc/maybe';
import { useSelector } from 'react-redux';
import jwt from 'jsonwebtoken';
import { useHistory } from 'react-router';
import { createAccountInfoController } from '../../../controllers/account.controllers';

export const AccountInfo = () => {
    const [getAccountInfo, setAccountInfo] = useState({})
    const tokenSelector = useSelector((state) => state.tokenReducer.value);
    const history = useHistory();

    const onChangeHandle = (e) => {
        Maybe(setAccountInfo({ ...getAccountInfo, [e.target.name]: e.target.value }))
    }

    useEffect(() => {
        const tokenDecoded = jwt.decode(tokenSelector);

        if (!tokenDecoded) {
            history.replace('/login')
        }
    }, [])

    const onClickHandler = (e) => {
        e.preventDefault()
        createAccountInfoController(getAccountInfo)
    }
    return (
        <div>
            <div className="accountInfoContiner">
                <div className="accountInfoLeftContainer">
                    <div className="accountInfoContainer">
                        <div className="accountInfoContainer_2nd">
                            <div className="accountInfoLeftTextContainer">
                                <div>
                                    <img className="accountImage" src={bgImage} alt="bg image" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="accountInfoRightContaiener">
                    <div className="accountFormContainer">
                        <form>
                            <div className="accountHeaderContainer">
                                <span className="accountHead">Let's get started.</span>
                                <span className="accountText">This will be an amazing experience.</span>
                            </div>
                            <div className="accountFormName">
                                <div className="accountInfoInputContainer">
                                    <input className="accountInfoInput" type="text" name="firstName" placeholder="First name" autoComplete="off" onChange={onChangeHandle} />
                                </div>
                                <div className="accountInfoInputContainer">
                                    <input className="accountInfoInput" type="text" name="lastName" placeholder="Last name" autoComplete="off" onChange={onChangeHandle} />
                                </div>
                            </div>
                            <div className="accountInfobuttonContainer">
                                <button className="accountInfoButton" type="submit" onClick={onClickHandler}>Proceed</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
