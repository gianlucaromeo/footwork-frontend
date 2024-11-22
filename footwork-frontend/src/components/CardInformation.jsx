import React, { useState } from 'react'
import CardTitleInfo from './CardTitleInfo'
import Button from './Button'
import editIcon from '../assets/icons/edit.png';

const CardInformation = () => {
    return(
        <div className="card">
            <div className="informationContainer">
                <div className="column">
                    <CardTitleInfo title='last name' data= '***Handstand' />
                    <CardTitleInfo title='first name' data= '***Henri' />
                </div>
                <div className="column">
                    <CardTitleInfo title='email' data= '***henrihandstand@gmail.com' />
                    <CardTitleInfo title='password' data= '***' />
                </div>
            </div>
            <div className="buttonContainer">
                <Button 
                    iconName ={editIcon}
                    className="btn-text s"
                    text="Edit"
                />
            </div>
        </div>

    );
};
export default CardInformation