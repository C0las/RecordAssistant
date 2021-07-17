import React from 'react'

class AddAssistant extends React.Component {
  state = {
    name: '',
    rut: '',
    email: '',
    fono: ''
  }

  add = (e) => {
    e.preventDefault()
    if (
      this.state.name === '' ||
      this.state.rut === '' ||
      this.state.email === '' ||
      this.state.fono === ''
    ) {
      alert('Todos los campos estan vacios')
      return
    }

    this.props.addAssistantHandler(this.state)
    this.setState({ name: '', rut: '', email: '', fono: '' })
  }

  render() {
    return (
      <div className='flex flex-col items-center'>
        <h2>Add Assistant</h2>
        <form className='flex flex-col gap-3 w-full' onSubmit={this.add}>
          <div className='flex items-center gap-2'>
            <div className='flex flex-col gap-2'>
              <label>Name</label>
              <input
                className='border-2 border-gray-300 h-10 rounded-md p-2 outline-none'
                type='text'
                name='name'
                placeholder='Name'
                value={this.state.name}
                onChange={(e) => this.setState({ name: e.target.value })}
              />
            </div>
            <div className='flex flex-col gap-2'>
              <label>Rut</label>
              <input
                className='border-2 border-gray-300 h-10 rounded-md p-2 outline-none'
                type='text'
                name='rut'
                placeholder='Rut'
                value={this.state.rut}
                onChange={(e) => this.setState({ rut: e.target.value })}
              />
            </div>
          </div>

          <div className='flex flex-col gap-2'>
            <label>Email</label>
            <input
              className='border-2 border-gray-300 h-10 rounded-md p-2 outline-none'
              type='text'
              name='email'
              placeholder='Email'
              value={this.state.email}
              onChange={(e) => this.setState({ email: e.target.value })}
            />
          </div>
          <div className='flex flex-col gap-2'>
            <label>Fono</label>
            <div className='flex items-center gap-2 w-full'>
              <label className='text-gray-500'>+56</label>
              <input
                className='border-2 border-gray-300 h-10 rounded-md p-2 outline-none w-full'
                type='text'
                name='fono'
                placeholder='Fono'
                value={this.state.fono}
                onChange={(e) => this.setState({ fono: e.target.value })}
              />
            </div>
          </div>

          <button className='bg-primary text-white rounded-lg p-3'>
            Add Assistant
          </button>
        </form>
      </div>
    )
  }
}

export default AddAssistant
