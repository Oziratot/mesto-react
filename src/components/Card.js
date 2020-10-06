import React from 'react';

function Card(props) {

    function handleClick() {
        props.onCardClick(props.card);
    };

    return (
        <li className="places-grid__element">
            <button type="button" className="places-grid__delete-btn"></button>
            
            <img className='places-grid__image' 
                 src={props.card.link} 
                 alt={props.card.name} 
                 onClick={handleClick}/>

            <div className='places-grid__description'>
                <h2 className="places-grid__text">{props.card.name}</h2>
                <div className="places-grid__like-container">
                    <button type="button" className="places-grid__like-btn"></button>
                    <p className="places-grid__like-counter">{props.card.likes.length}</p>
                </div>
            </div>
        </li>
    )
}

export default Card