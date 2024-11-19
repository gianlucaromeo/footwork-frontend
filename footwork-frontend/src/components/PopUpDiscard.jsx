import React, { useState } from 'react'
import TitleSubtitleBig from './TitleSubtitleBig'
import BtnPrimaryMEnabled from './BtnPrimaryMEnabled'
import BtnTextS from './BtnTextS'

const PopUpDiscard = () => {

return (
    <div>
        <TitleSubtitleBig title="discard changes?" subtitle="Are you sure you want to discard all changes?"/>
        <BtnPrimaryMEnabled>Cancel</BtnPrimaryMEnabled>
        <BtnTextS>discard</BtnTextS>
    </div>
)
}
export default PopUpDiscard