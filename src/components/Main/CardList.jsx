import { useFetchAgents } from '../../hooks'
import { CardItem, Loader } from './'

export const CardList = () => {
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
