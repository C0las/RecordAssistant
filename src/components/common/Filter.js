import { useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import { SearchIcon } from '@heroicons/react/solid'

const Filter = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [searchResult, setSearchResult] = useState([])

  const inputEl = useRef('')
  const assistants = useSelector((state) => state.assistants)
  console.log(assistants)

  /*const searchHandler = (searchTerm) => {
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
  }*/

  return (
    <>
      <input
        ref={inputEl}
        type='text'
        placeholder='Buscar'
        className='w-full h-9 pl-10 outline-none rounded-2xl bg-transparent border-2 place-gray-500 text-sm text-gray-100 border-gray-500'
        value={searchTerm}
      />
      <SearchIcon className='absolute text-gray-500 ml-3 h-5 w-5' />
    </>
  )
}

export default Filter
