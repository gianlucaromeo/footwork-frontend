import React, { useState } from 'react'

const CardTitleInfo = ({
    title = "",
    data = ""
  }) => {
    return(
        <div>
            <h5>{title}</h5>
            <div>{data}</div>
        </div>
)}
export default CardTitleInfo