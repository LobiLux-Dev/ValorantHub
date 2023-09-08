import { useEffect, useState } from 'react'

import { fetchAgents } from '../helpers'

export const useFetchAgents = () => {
	const [agents, setAgents] = useState([])
	const [isLoading, setIsLoading] = useState(true)

	const getAgents = async () => {
		const newAgents = await fetchAgents()

		setAgents(newAgents)
		setIsLoading(false)
	}

	useEffect(() => {
		getAgents()
	}, [])

	return { agents, isLoading }
}
