import React from 'react'
import './Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faTasks, faLayerGroup, faBell, faCaretDown, faArchive, faCog, faMoon, faSignOutAlt } from "@fortawesome/free-solid-svg-icons"

const Header = () => {
    function toggleDropdown(targetId, buttonId = '') {
        var container = document.getElementById(targetId)
        if (buttonId != '') {
            var button = document.getElementById(buttonId)
        }

        if (container) {
          var containerDisplay = getComputedStyle(container).display
          if (containerDisplay === 'none') {
            container.style.display = 'flex'
            if (buttonId != '') {
                button.style.webkitTransform = 'rotate(180deg)'
            }
          } else if (containerDisplay === 'flex') {
            container.style.display = 'none'
            if (buttonId != '') {
                button.style.webkitTransform = 'rotate(0deg)'
            }
          }
        }
    }

    return (
        <div className="topbar">
          <div className="topbar__left">
              <div className="topbar__title">
                  <a href="./index.js"><p>TaskBoard</p></a>
              </div>
          </div>
          <div className="topbar__right">
              <div className="topbar__dropbtn" onClick={() => toggleDropdown('dropdownCreateContent')}>
                  <p><FontAwesomeIcon icon={faPlus} className="fontawesome__button"/></p>
              </div>
              <div className="topbar__dropdown__content" id="dropdownCreateContent">
                  <div className="topbar__dropdown__button" onClick="printTaskForm()">
                      <p><FontAwesomeIcon icon={faTasks} className="fontawesome__button"/></p>
                      <p>Create Task</p>
                  </div>
                  <div className="topbar__dropdown__button" onClick="printGroupForm()">
                      <p><FontAwesomeIcon icon={faLayerGroup} className="fontawesome__button"/></p>
                      <p>Create Group</p>
                  </div>
              </div>
              <div className="topbar__dropbtn" onClick={() => toggleDropdown('dropdownMessagesContent')}>
                  <p><FontAwesomeIcon icon={faBell} className="fontawesome__button"/></p>
              </div>
              <div className="topbar__dropdown__content" id="dropdownMessagesContent">
              </div>
              <div className="topbar__dropbtn" id="dropbtnUnfoldButton" onClick={() => toggleDropdown('dropdownMainContent','dropbtnUnfoldButton')}>
                  <p><FontAwesomeIcon icon={faCaretDown} className="fontawesome__button"/></p>
              </div>
              <div className="topbar__dropdown__content" id="dropdownMainContent">
                  <a href="http://lukaslanger.bplaced.net/taskboard/php/groups.php">
                      <div className="topbar__dropdown__button">
                          <p><FontAwesomeIcon icon={faLayerGroup} className="fontawesome__button"/></p>
                          <p>Groups</p>
                      </div>
                  </a>
                  <a href="http://lukaslanger.bplaced.net/taskboard/php/archive.php">
                      <div className="topbar__dropdown__button">
                          <p><FontAwesomeIcon icon={faArchive} className="fontawesome__button"/></p>
                          <p>Archive</p>
                      </div>
                  </a>
                  <hr className="solid"/>
                  <a href="<?php echo DIR_SYSTEM ?>php/profile.php">
                      <div className="topbar__dropdown__button">
                          <p><FontAwesomeIcon icon={faCog} className="fontawesome__button"/></p>
                          <p>Settings</p>
                      </div>
                  </a>
                  <div className="topbar__dropdown__nightmode">
                      <p><FontAwesomeIcon icon={faMoon} className="fontawesome__button"/></p>
                      <p>Nightmode</p>
                      <label className="nightmode__switch">
                          <input id="nightmode-checkbox" type="checkbox"/>
                          <span className="nightmode__slider round"></span>
                      </label>
                  </div>
                  <hr className="solid"/>
                  <a href="<?php echo DIR_SYSTEM ?>php/logout.inc.php">
                      <div className="topbar__dropdown__button">
                          <p><FontAwesomeIcon icon={faSignOutAlt} className="fontawesome__button"/></p>
                          <p>Logout</p>
                      </div>
                  </a>
              </div>
          </div>
        </div>
    )}

export default Header