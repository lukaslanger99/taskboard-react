import React from 'react'
import './Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faBell, faCaretDown} from "@fortawesome/free-solid-svg-icons"
import HeaderDropdown from './HeaderDropdown'

const Header = ({onAddGroup, onAddTask, onCloseCreateDropdown, showCreateContent, 
    onCloseMessagesDropdown, showMessagesContent, 
    onCloseMainDropdown, showMainContent}) => {

    return (
        <div className="topbar">
          <div className="topbar__left">
              <div className="topbar__title">
                  <a href="./index.js"><p>TaskBoard</p></a>
              </div>
          </div>
          <div className="topbar__right">
              <div className="topbar__dropbtn" onClick={onCloseCreateDropdown}>
                  <p><FontAwesomeIcon icon={faPlus} className="fontawesome__button"/></p>
              </div>
              {showCreateContent && <HeaderDropdown dropdownType="createContent" onAddGroup={onAddGroup} onAddTask={onAddTask}/>}
              <div className="topbar__dropbtn" onClick={onCloseMessagesDropdown}>
                  <p><FontAwesomeIcon icon={faBell} className="fontawesome__button"/></p>
              </div>
              {showMessagesContent && <HeaderDropdown dropdownType="messagesContent"/>}
              <div className="topbar__dropbtn" id="dropbtnUnfoldButton" onClick={onCloseMainDropdown}>
                  <p><FontAwesomeIcon icon={faCaretDown} className="fontawesome__button"/></p>
              </div>
              {showMainContent && <HeaderDropdown dropdownType="mainContent"/>}
          </div>
        </div>
    )}

export default Header