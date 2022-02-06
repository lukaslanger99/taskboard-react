import Header from './components/Header'
import DynPopup from './components/DynPopup'
import { useState } from 'react'
import LoginForm from './components/LoginForm'

function App() {
  const [showAddGroup, setShowAddGroup] = useState(false)
  const [showAddTask, setShowAddTask] = useState(false)
  const [showCreateContent, setShowCreateContent] = useState(false)
  const [showMessagesContent, setShowMessagesContent] = useState(false)
  const [showMainContent, setShowMainContent] = useState(false)

  const [user, setUser] = useState({ username: "", usertoken: "" })
  const [error, setError] = useState("")

  const Login = details => {
    //kriegst details.username und details.password rein
    //damit php request die dann userdata returnt, also auch paneldata undso alles außer pw und id dafür aufjedenfall usertoken
    fetch('http://localhost/php/request.php')
    .then((response)=>response.json())
    .then((responseJson)=>
    {
      console.log(responseJson)
    })
    //das was returnt wurde alles reinschreiben in setUser()
    console.log(details)
    // if (details.name && details.password === returnanfrgaeblabla) {
    //   console.log("Logged In")
    //   setUser({
    //     username: details.name,
    //     usertoken: returnauszeug
    //   })
    // } else {
    //   setError("Details do not match!")
    // }
  }

  const Logout = () => {
    setUser({ username: "", usertoken: "" })
  }


  const login = false

  return (
    <div className="App">
      {login ?
        <>
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
            Logout={Logout}
          />
          {showAddGroup && <DynPopup popupType={'addGroupPopup'} onClosePopup={() => setShowAddGroup(!showAddGroup)} />}
          {showAddTask && <DynPopup popupType={'addTaskPopup'} onClosePopup={() => setShowAddTask(!showAddTask)} />}
        </>
        :
        <LoginForm Login={Login} error={error} />
      }
    </div>
  )
}

export default App
