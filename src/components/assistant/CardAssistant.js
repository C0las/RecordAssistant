import { TrashIcon, PencilIcon } from '@heroicons/react/solid'

const CardAssistant = (props) => {
  const { id, name, rut } = props.assistant
  const img = props.img

  return (
    <div className='flex flex-col items-center justify-center rounded-md gap-3 p-3 shadow-md border border-gray-100 '>
      <div className='flex items-center justify-end gap-2 w-full text-gray-400'>
        <button className='flex items-center justify-center rounded-full border border-dashed border-gray-400 bg-transparent w-6 h-6'>
          <PencilIcon className='h-4 w-4 hover:text-green-600' />
        </button>
        <button
          onClick={() => props.clickHander(id)}
          className='flex items-center justify-center rounded-full border border-dashed border-gray-400 bg-transparent w-6 h-6'
        >
          <TrashIcon className='h-4 w-4 hover:text-red-600' />
        </button>
      </div>
      <div className='flex items-center justify-center rounded-full w-20 h-20 bg-primary'>
        <span className='text-2xl font-bold text-white'>{img}</span>
      </div>
      <div className='flex flex-col items-center gap-1'>
        <h1 className='font-semibold'>{name}</h1>
        <p className='text-xs font-light'>{rut}</p>
      </div>

      <button className='text-xs text-white font-medium border-2 bg-primary-light rounded-2xl p-2'>
        VER DETALLES
      </button>
    </div>
  )
}

export default CardAssistant
