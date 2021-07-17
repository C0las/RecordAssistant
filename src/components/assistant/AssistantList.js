import CardAssistant from './CardAssistant'

const AssistantList = (props) => {
  console.log(props)

  const deleteAssistantHandler = (id) => {
    props.getAssistantId(id)
  }
  const renderAssistant = props.assistant.map((assistant) => {
    const img = assistant.name.replace(/[a-z]/g, '')

    return (
      <CardAssistant
        assistant={assistant}
        img={img}
        key={assistant.id}
        clickHander={deleteAssistantHandler}
      />
    )
  })
  return <div className='flex flex-row gap-5 h-full'>{renderAssistant}</div>
}

export default AssistantList
