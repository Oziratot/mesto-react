import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm'
import ImagePopup from './ImagePopup';


function App() {

  //setting opened/closed state of popups
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({});

  //opening functions for popups
  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }
  
  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }
  
  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);

  }

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  //closing all popups
  function closeAllPopups() {
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setSelectedCard({});
  }


  return (
    <div className="App">

      <div className="page">

        <PopupWithForm name="edit" 
                      title="Редактировать профиль" 
                      isOpen={isEditProfilePopupOpen}
                      onClose={closeAllPopups}
                      submitButtonText="Сохранить"
                      children={
                        <>
                          <label className="popup__field">
                            <input type="text"
                                  className="popup__input popup__input_type_name"
                                  placeholder="Имя"
                                  id="name-input"
                                  name="name"
                                  required
                                  minLength="2"
                                  maxLength="40" />
                            <span className="popup__input-error" id="name-input-error"></span>
                          </label>
                          <label className="popup__field">
                            <input type="text" 
                                className="popup__input popup__input_type_description" 
                                placeholder="Описание" 
                                id="description-input" 
                                name="description" 
                                required 
                                minLength="2" 
                                maxLength="200" />
                            <span className="popup__input-error" id="description-input-error"></span>
                          </label>
                      </>
                      }/>
        
        <PopupWithForm  name="add"
                        title="Новое место"
                        isOpen={isAddPlacePopupOpen}
                        onClose={closeAllPopups}
                        submitButtonText="Добавить"
                        children={
                          <>
                            <label className="popup__field">
                              <input  type="text" 
                                      className="popup__input popup__input_type_place" 
                                      id="place-input" 
                                      name="name" 
                                      placeholder="Название" 
                                      required 
                                      minLength="1" 
                                      maxLength="30" />
                              <span className="popup__input-error" id="place-input-error"></span>
                            </label>
                            <label className="popup__field">
                              <input  type="url" 
                                      className="popup__input popup__input_type_image-link" 
                                      id="place-url" 
                                      name="link" 
                                      placeholder="Ссылка на картинку" 
                                      required />
                              <span className="popup__input-error" id="place-url-error"></span>
                            </label>
                          </>
                        }/>

        <PopupWithForm  name="avatar"
                        title="Обновить аватар"
                        isOpen={isEditAvatarPopupOpen}
                        onClose={closeAllPopups}
                        submitButtonText="Обновить"
                        children={
                            <label className="popup__field">
                              <input  type="url" 
                                      className="popup__input popup__input_type_image-link" 
                                      id="place-url" 
                                      name="link" 
                                      placeholder="Ссылка на аватар"
                                      required />
                              <span className="popup__input-error" id="place-url-error"></span>
                            </label>
                        }/>

        <PopupWithForm  name="confirm"
                        title="Вы уверены?"
                        submitButtonText="Да"/>


        <ImagePopup onClose={closeAllPopups}
                    card={selectedCard}/>

        <Header />

          <Main onEditProfile={handleEditProfileClick}
                onAddPlace={handleAddPlaceClick}
                onEditAvatar={handleEditAvatarClick}
                onCardClick={handleCardClick}/>

        <Footer />

      </div>

    </div>
  );

}

export default App;
