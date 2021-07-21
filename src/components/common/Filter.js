import { useRef } from 'react'
import { SearchIcon } from '@heroicons/react/solid'

const Filter = (props) => {
  const inputEl = useRef('')

  const getSearchTerm = () => {
    props.searchKeyword(inputEl.current.value)
  }

  return (
    <>
      <input
        ref={inputEl}
        type='text'
        placeholder='Buscar'
        className='w-full h-9 pl-10 outline-none rounded-2xl bg-transparent border-2 place-gray-500 text-sm text-gray-100 border-gray-500'
        value={props.term}
        onChange={getSearchTerm}
      />
      <SearchIcon className='absolute text-gray-500 ml-3 h-5 w-5' />
    </>
  )
}

export default Filter
