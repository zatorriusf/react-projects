import React, { useState, useEffect } from 'react'
import rgbToHex from './utils'

const SingleColor = ({rgb,weight,index}) => {
  const [alert, setAlert] = useState(false);
  const bgColor = rgb.join(',');
  const hexValule = rgbToHex(...rgb);
  useEffect((alert)=>{
    const clearAlertMessage = setTimeout(() =>{
      setAlert(false);
    },3000)
    return () => clearTimeout(clearAlertMessage)
  },[alert])
  return <article className={`color ${index > 10  && 'color-light'}`} style={{backgroundColor : `rgb(${bgColor})`}}
  onClick={() =>{
    setAlert(true);
    navigator.clipboard.writeText(hexValule)
  }}>
    <p className="percent-value">{weight}%</p>
<p className="color-value">{hexValule}</p>
{alert &&<p className="alert">copied to clipboard</p>}
  </article>
}

export default SingleColor
