import React from 'react'

function PopupWithForm(props) {
    return (
        <div className={`popup popup_modal_type_${props.name} ${props.isOpen && 'popup_opened'}`}>
            <form name={`${props.name}`} 
                className={`popup__container popup__container_type_${props.name}`} 
                noValidate>
                    
                    <button type="button" 
                            className="popup__close-btn" 
                            onClick={props.onClose}></button>

                    <p className="popup__text">{props.title}</p>
                    {props.children}
                    <button type="submit" className="popup__save-btn">Сохранить</button>
            </form>
        </div>
    )
}

export default PopupWithForm