import React, { useState } from 'react'
import CardTitleInfo from './CardTitleInfo'
import BtnTextS from './BtnTextS'

const CardInformation = () => {
    return(
        <div>
            <div>
                <CardTitleInfo title='last name' data= '***Handstand' />
                <CardTitleInfo title='first name' data= '***Henri' />
                <CardTitleInfo title='email' data= '***henrihandstand@gmail.com' />
                <CardTitleInfo title='password' data= '***' />
            </div>
            <BtnTextS>edit</BtnTextS>
        </div>
    );
};
export default CardInformation