import CardAssistant from './CardAssistant'

const AssistantList = (props) => {
  const deleteAssistantHandler = (id) => {
    props.getAssistantId(id)
  }

  const renderAssistant = props.assistant.map((assistant) => {
    const img = (assistant) => {
      const name = assistant.name.replace(/[a-z]/g, '').substr(-3, 2)
      const lastName = assistant.lastName.replace(/[a-z]/g, '').substr(-3, 2)

      return name + lastName
    }

    const name = (assistant) => {
      const indexName = assistant.name.indexOf(' ')
      const indexLastName = assistant.lastName.indexOf(' ')

      var name = assistant.name.substr(0, indexName)
      var lastName = assistant.lastName.substr(0, indexLastName)

      if (name === '') name = assistant.name
      if (lastName === '') lastName = assistant.lastName

      return name + ' ' + lastName
    }

    return (
      <CardAssistant
        assistant={assistant}
        name={name(assistant)}
        img={img(assistant)}
        key={assistant.id}
        clickHander={deleteAssistantHandler}
      />
    )
  })
  return renderAssistant
}

export default AssistantList
