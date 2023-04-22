import axios from 'axios'

export const fetchAgents = async () => {
  const url = 'https://valorant-api.com/v1/agents?isPlayableCharacter=true'
  const { data: axiosData } = await axios.get(url)
  const { data } = axiosData

  const agents = data.map(({ background, description, displayIcon, displayName, role, uuid }) => ({
    background,
    description,
    displayIcon,
    displayName,
    role: {
      displayIcon: role.displayIcon,
      displayName: role.displayName,
    },
    uuid,
  }))

  return agents
}
