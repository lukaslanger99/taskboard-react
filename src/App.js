import Header from './components/Header'
import DynPopup from './components/DynPopup'
import { useState } from 'react'

function App() {
  const [showAddGroup, setShowAddGroup] = useState(false)
  const [showAddTask, setShowAddTask] = useState(false)
  const [showCreateContent, setShowCreateContent] = useState(false)
  const [showMessagesContent, setShowMessagesContent] = useState(false)
  const [showMainContent, setShowMainContent] = useState(false)


  return (
    <div className="App">
      <Header 
        onAddGroup={() => {
          setShowAddGroup(!showAddGroup)
          setShowCreateContent(!showCreateContent)
          }
        } 
        onAddTask={() => {
          setShowAddTask(!showAddGroup)
          setShowCreateContent(!showCreateContent)
          }
        }
        onCloseCreateDropdown={() => setShowCreateContent(!showCreateContent)}
        showCreateContent={showCreateContent}
        onCloseMessagesDropdown={() => setShowMessagesContent(!showMessagesContent)}
        showMessagesContent={showMessagesContent}
        onCloseMainDropdown={() => setShowMainContent(!showMainContent)}
        showMainContent={showMainContent}
      />
      {showAddGroup && <DynPopup popupType={'addGroupPopup'} onClosePopup={() => setShowAddGroup(!showAddGroup)}/>}
      {showAddTask && <DynPopup popupType={'addTaskPopup'} onClosePopup={() => setShowAddTask(!showAddTask)}/>}
    </div>
  )
}

export default App
