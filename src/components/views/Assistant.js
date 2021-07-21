import React, { useState } from 'react'
import { ViewGridIcon, ViewListIcon } from '@heroicons/react/solid'

import AssistantList from '../assistant/AssistantList'

function Assistant(props) {
  const { assistant, removeAssistantHandler } = props
  var n = Object.keys(assistant).length

  return (
    <div className='flex flex-col bg-white p-10 gap-5 h-screen w-full'>
      <div className='flex flex-row items-center justify-between'>
        <span className='text-xl font-bold text-gray-700'>
          Listado de Ayudantes
        </span>
      </div>
      <div className='flex items-center justify-between'>
        <div className='flex items-center'>
          <h1 className='text-xl font-semibold'>
            Todos
            <span className='text-sm font-light ml-2'>( {n} ) Ayudantes</span>
          </h1>
        </div>

        <div className='flex items-center gap-3'>
          <ViewListIcon className='h-6 w-6 text-gray-500' />
          <ViewGridIcon className='h-7 w-7 text-blue-900' />
        </div>
      </div>
      <div className='grid md:grid-cols-2 lg:grid-cols-4 items-center gap-10'>
        <AssistantList
          assistant={assistant}
          getAssistantId={removeAssistantHandler}
        />
      </div>
    </div>
  )
}

export default Assistant
