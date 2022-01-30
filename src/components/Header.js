import React from 'react';
import './Header.css';

const Header = () => {
    function toggleDropdown(targetId, buttonId = '') {
        var container = document.getElementById(targetId)
        if (container) {
          var containerDisplay = getComputedStyle(container).display
          if (containerDisplay === 'none') {
            container.style.display = 'flex'
          } else if (containerDisplay === 'flex') {
            container.style.display = 'none'
          }
        }
    }

    return <div className="topbar">
              <div className="topbar__left">
                  <div className="topbar__title">
                      <a href="./index.js"><p>TaskBoard</p></a>
                  </div>
              </div>
              <div className="topbar__right">
                  <div className="topbar__dropbtn" onClick={() => toggleDropdown('dropdownCreateContent')}>
                      <p><i className="fa fa-plus" aria-hidden="true"></i></p>
                  </div>
                  <div className="topbar__dropdown__content" id="dropdownCreateContent">
                      <div className="topbar__dropdown__button" onClick="printTaskForm()">
                          <p><i className="fa fa-tasks"></i></p>
                          <p>Create Task</p>
                      </div>
                      <div className="topbar__dropdown__button" onClick="printGroupForm()">
                          <p><i className="fa fa-layer-group"></i></p>
                          <p>Create Group</p>
                      </div>
                  </div>
                  <div className="topbar__dropbtn" onClick={() => toggleDropdown('dropdownMessagesContent')}>
                      <p><i className="fa fa-bell" aria-hidden="true"></i></p>
                  </div>
                  <div className="topbar__dropdown__content" id="dropdownMessagesContent">
                  </div>
                  <div className="topbar__dropbtn" id="dropbtnUnfoldButton" onClick={() => toggleDropdown('dropdownMainContent','dropbtnUnfoldButton')}>
                      <p><i className="fa fa-caret-down" aria-hidden="true"></i></p>
                  </div>
                  <div className="topbar__dropdown__content" id="dropdownMainContent">
                      <a href="http://lukaslanger.bplaced.net/taskboard/php/groups.php">
                          <div className="topbar__dropdown__button">
                              <p><i className="fa fa-layer-group"></i></p>
                              <p>Groups</p>
                          </div>
                      </a>
                      <a href="http://lukaslanger.bplaced.net/taskboard/php/archive.php">
                          <div className="topbar__dropdown__button">
                              <p><i className="fa fa-archive"></i></p>
                              <p>Archive</p>
                          </div>
                      </a>
                      <hr className="solid"/>
                      <a href="<?php echo DIR_SYSTEM ?>php/profile.php">
                          <div className="topbar__dropdown__button">
                              <p><i className="fa fa-cog"></i></p>
                              <p>Settings</p>
                          </div>
                      </a>
                      <div className="topbar__dropdown__nightmode">
                          <p><i className="fa fa-moon"></i></p>
                          <p>Nightmode</p>
                          <label className="switch">
                              <input id="nightmode-checkbox" type="checkbox"/>
                              <span className="slider round"></span>
                          </label>
                      </div>
                      <hr className="solid"/>
                      <a href="<?php echo DIR_SYSTEM ?>php/logout.inc.php">
                          <div className="topbar__dropdown__button">
                              <p><i className="fa fa-sign-out"></i></p>
                              <p>Logout</p>
                          </div>
                      </a>
                  </div>
              </div>
            </div>
}

export default Header;