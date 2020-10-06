import React from 'react'

function ImagePopup(props) {
    return (
        <div className={`popup popup_modal_type_photo ${props.isOpen && 'popup_opened'}`}>
          <div className='popup__image-container'>

            <button type="button" 
                    className="popup__close-btn" 
                    onClick={props.onClose}></button>

            <img  className="popup__full-image" 
                  src={props.card.link} 
                  alt={props.card.name}/>
                  
            <p className="popup__image-title">{props.card.name}</p>
          </div>
        </div>
    );
}

export default ImagePopup