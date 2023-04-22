import { CardItem, Loader } from './'
import { useFetchAgents } from '../hooks/useFetchAgents'

export const CardList = () => {
  const { agents, isLoading } = useFetchAgents()

  return (
    <>
      {isLoading && <Loader />}
      {agents.map(agent => <CardItem key={agent.uuid} {...agent} />)}
    </>
  )
}
