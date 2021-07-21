import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { uuid } from 'uuidv4'
import api from '../api/assistants'
import Main from './layouts/Main'
import Assistant from './views/Assistant'
import Scheduler from './views/Sheduler'
import AssistantDetail from './views/AssistantDetail'
import AddAssistant from './assistant/AddAssistant'

function App() {
  const LOCAL_STORAGE_KEY = 'assistants'

  // Estado de Ayudantes, almacena y cambia los objetos dentro de ella
  const [assistants, setAssistants] = useState([])

  const [searchTerm, setSearchTerm] = useState('')

  const [searchResult, setSearchResult] = useState([])

  // RetrieveAssistants
  const retrieveAssistants = async () => {
    const response = await api.get('/assistants')
    return response.data
  }

  // Cambia el estado de los ayudantes
  const addAssistantHandler = async (assistant) => {
    const request = {
      id: uuid(),
      ...assistant
    }

    const response = await api.post('/assistants', request)
    setAssistants([...assistants, response.data])
  }

  // Elimina un objeto(assistant)
  const removeAssistantHandler = async (id) => {
    await api.delete(`/assistants/${id}`)
    const newAssistantList = assistants.filter((assistant) => {
      return assistant.id !== id
    })
    setAssistants(newAssistantList)
  }

  const searchHandler = (searchTerm) => {
    setSearchTerm(searchTerm)
    if (searchTerm !== '') {
      const newAssistantList = assistants.filter((assistant) => {
        const data =
          assistant.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          assistant.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
          assistant.rut.toLowerCase().includes(searchTerm.toLowerCase())

        return data
      })

      setSearchResult(newAssistantList)
    } else {
      setSearchResult(assistants)
    }
  }

  // Obtiene los objetos(assistants) guardados en el LocalStorage
  useEffect(() => {
    /*const retriveAssistants = JSON.parse(
      localStorage.getItem(LOCAL_STORAGE_KEY)
    )
    if (retriveAssistants) setAssistants(retriveAssistants)*/

    const getAllAssistants = async () => {
      const allAssistants = await retrieveAssistants()
      if (allAssistants) setAssistants(allAssistants)
    }

    getAllAssistants()
  }, [])

  // Guarda el objeto(assistants) en el LocalStorage
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(assistants))
  }, [assistants])

  return (
    <Router>
      {/* Contenedor de la vista principal */}
      <Main term={searchTerm} searchKeyword={searchHandler}>
        <Switch>
          <Route
            path='/scheduler'
            component={(props) => <Scheduler {...props} />}
          />
          <Route
            path='/assistant'
            render={(props) => (
              <Assistant
                {...props}
                assistant={searchTerm.length < 1 ? assistants : searchResult}
                removeAssistantHandler={removeAssistantHandler}
              />
            )}
          />
          <Route path='/assistantDetail/:id' component={AssistantDetail} />
          <Route
            path='/add'
            render={(props) => (
              <AddAssistant
                {...props}
                addAssistantHandler={addAssistantHandler}
              />
            )}
          />
        </Switch>
      </Main>
    </Router>
  )
}

export default App
