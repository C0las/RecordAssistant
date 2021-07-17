import { useState, useEffect } from 'react'
import { uuid } from 'uuidv4'
import Main from './layouts/Main'
import AddAssistant from './assistant/AddAssistant'
import AssistantList from './assistant/AssistantList'

function App() {
  const LOCAL_STORAGE_KEY = 'assistants'

  // Estado de Ayudantes, almacena y cambia los objetos dentro de ella
  const [assistants, setAssistants] = useState([])

  // Cambia el estado de los ayudantes
  const addAssistantHandler = (assistant) => {
    setAssistants([...assistants, { id: uuid(), ...assistant }])
  }

  // Elimina un objeto(assistant)
  const removeAssistantHandler = (id) => {
    const newAssistantList = assistants.filter((assistant) => {
      return assistant.id !== id
    })
    setAssistants(newAssistantList)
  }

  // Obtiene los objetos(assistants) guardados en el LocalStorage
  useEffect(() => {
    const retriveAssistants = JSON.parse(
      localStorage.getItem(LOCAL_STORAGE_KEY)
    )
    if (retriveAssistants) setAssistants(retriveAssistants)
  }, [])

  // Guarda el objeto(assistants) en el LocalStorage
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(assistants))
  }, [assistants])

  return (
    <Main>
      <AddAssistant addAssistantHandler={addAssistantHandler} />
      <AssistantList
        assistant={assistants}
        getAssistantId={removeAssistantHandler}
      />
    </Main>
  )
}

export default App
