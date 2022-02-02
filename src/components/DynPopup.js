import React from 'react'
import './DynPopup.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWindowClose } from "@fortawesome/free-solid-svg-icons"

const DynPopup = ({popupType, onClosePopup}) => {
  function addPopupContent() {
    if (popupType === 'addGroupPopup') {
      return (
        <>
          <div className="popup__header">Add Group<FontAwesomeIcon icon={faWindowClose} onClick={onClosePopup} className="popup__header__close"/></div>
          <form action="php/action.php?action=createGroup" autoComplete="off" method="post" >
            <input className="popup__input__text" placeholder="name" type="text" name="name"/>
            <input className="popup__input__submit" type="submit" name="creategroup-submit" value="Create" />
          </form>
        </>
      )
    } else if (popupType === 'addTaskPopup') {
      return (
        <>
          <div className="popup__header">Add Task<FontAwesomeIcon icon={faWindowClose} onClick={onClosePopup} className="popup__header__close"/></div>
          <form action="php/action.php?action=createTask" autoComplete="off" method="post" >
            <table className="popup__table">
              <tr>
                <td>Priority:</td>
                <td>
                  <div className="popup__select">
                    <select name="priority">
                      <option value="1">Low</option>
                      <option selected="selected" value="2">Normal</option>
                      <option value="3">High</option>
                    </select>
                  </div>
                </td>
                <td>groups todo</td>
              </tr>
            </table>
            <textarea className="popup__input__text" placeholder="title" name="title" cols="40" rows="1"></textarea>
            <textarea className="popup__input__text" placeholder="description" name="description" cols="40" rows="5"></textarea>
            <table className="popup__table">
              <tr>
                <td><input type="checkbox" id="createAnother" name="createAnother"/></td>
                <td><label for="createAnother">Create Another</label></td>
              </tr>
            </table>
            <input className="popup__input__submit" type="submit" name="createtask-submit" value="Create"/>
        </form>
        </>
      )
    }
  }

  return (
    <div id="dynamicPopup">
      <div class="popup__block" id="dynamicPopupBlock">
        <div class="popup__content" id="dynamicPopupContent">
          {addPopupContent()}
        </div>
      </div>
    </div>
  )
}

export default DynPopup
