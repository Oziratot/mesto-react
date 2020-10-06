import React, { useState } from 'react'
import api from '../utils/api';
import Card from './Card';


function Main(props) {

  //initial page loading
  const [userName, setUserName] = React.useState('');
  const [userDescription, setUserDescription] = React.useState('');
  const [userAvatar, setUserAvatar] = React.useState('');
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    Promise.all([api.getUserInfo(), api.getInitialCards()])
      .then(([data, cards]) => {
        setUserName(data.name);
        setUserDescription(data.about);
        setUserAvatar(data.avatar);
        setCards(cards);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

    
      return (
        <main className="content">

          <section className="profile">
            <div className="profile__avatar-container" onClick={props.onEditAvatar}>
              <img className="profile__avatar" src={userAvatar} alt="Фото профиля" />
            </div>
            <div className="profile__profile-info">
              <h1 className="profile__name">{userName}</h1>

              <button onClick={props.onEditProfile} 
                      type="button" 
                      className="profile__edit-btn"></button>

              <p className="profile__description">{userDescription}</p>
            </div>

            <button onClick={props.onAddPlace} 
                    type="button" 
                    className="profile__add-btn"></button>

          </section>

          <section className="places">
            <ul className="places-grid">
              {cards.map((card) => (
                <Card key={card._id} 
                      card={card} 
                      onCardClick={props.onCardClick}/>
              ))}
            </ul>
          </section>

        </main>
    );
}


export default Main