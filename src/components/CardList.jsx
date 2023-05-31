import { useFetchAgents } from '../hooks/useFetchAgents'
import CardItem from './CardItem'
import Loader from './Loading'

const CardList = () => {
	const { agents, isLoading } = useFetchAgents()

	return (
		<>
			{isLoading && <Loader />}
			{agents.map(agent => (
				<CardItem key={agent.uuid} {...agent} />
			))}
		</>
	)
}

export default CardList
