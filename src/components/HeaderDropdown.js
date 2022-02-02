import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faTasks, faLayerGroup, faArchive, faCog, faMoon, faSignOutAlt } from "@fortawesome/free-solid-svg-icons"


const HeaderDropdown = ({dropdownType, onAddGroup, onAddTask}) => {
    function dropdownContent() {
        if (dropdownType === 'createContent') {
            return (
                <div className="topbar__dropdown__content" id="dropdownCreateContent">
                    <div className="topbar__dropdown__button" onClick={onAddTask}>
                        <p><FontAwesomeIcon icon={faTasks} className="fontawesome__button"/></p>
                        <p>Create Task</p>
                    </div>
                    <div className="topbar__dropdown__button" onClick={onAddGroup}>
                        <p><FontAwesomeIcon icon={faLayerGroup} className="fontawesome__button"/></p>
                        <p>Create Group</p>
                    </div>
                </div>
            )
        } else if (dropdownType === 'messagesContent') {
            return (
                <div className="topbar__dropdown__content" id="dropdownMessagesContent"></div>
            )
        } else if (dropdownType === 'mainContent') {
            return (
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
            )
        }
    }


  return (
      <>
        {dropdownContent()}
      </>
  )
};

export default HeaderDropdown
