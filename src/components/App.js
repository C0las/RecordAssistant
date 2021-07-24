import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import { uuid } from 'uuidv4'
import api from '../api/assistants'
import Main from './layouts/Main'
import Assistant from './views/Assistant'
import Scheduler from './views/Sheduler'
import AssistantDetail from './views/AssistantDetail'
import AddAssistant from './assistant/AddAssistant'
import {
  fetchAssitants,
  setAssistants
} from '../redux/actions/assistantActions'

function App() {
  const dispatch = useDispatch()

  // Cambia el estado de los ayudantes
  const addAssistantHandler = async (assistant) => {
    const request = {
      id: uuid(),
      ...assistant
    }

    const response = await api.post('/assistants', request)
    dispatch(setAssistants(response.data))
  }

  // Obtiene los objetos(assistants) guardados en el LocalStorage
  useEffect(() => {
    dispatch(fetchAssitants())
  }, [dispatch])

  return (
    <Router>
      {/* Contenedor de la vista principal */}
      <Main>
        <Switch>
          <Route path='/scheduler' component={Scheduler} />
          <Route path='/assistant' component={Assistant} />
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
