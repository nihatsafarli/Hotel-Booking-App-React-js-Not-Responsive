import React from 'react';
import "./mailList.css";


const MailList = () => {
  return (
    <div className='mail'>
      <h1 className="mailTitle">Puluna və zamanına qənaət et</h1>
      <span className='mailDesc'>Qeydiyyatdan keçin, uyğun təklifləri sizə göndərək </span>
      <div className="mailInputContainer">
        <input type="text" placeholder='Email Adresiniz'/>
        <button>Abunə ol</button>
      </div>
    </div>
  )
}

export default MailList

