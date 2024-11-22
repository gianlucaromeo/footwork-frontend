import React, { useState } from 'react'

const CardTitleInfo = ({
    title = "",
    data = ""
  }) => {
    return(
        <div className="content">
            <h5>{title}</h5>
            <div className="entry">{data}</div>
        </div>
)}
export default CardTitleInfo