import axios from 'axios'

interface Data {
	status: number
	data: Agent[]
}

interface Agent {
	uuid: string
	displayName: string
	description: string
	developerName: string
	characterTags: string[] | null
	displayIcon: string
	displayIconSmall: string
	bustPortrait: string
	fullPortrait: string
	fullPortraitV2: string
	killfeedPortrait: string
	background: string
	backgroundGradientColors: string[]
	assetPath: string
	isFullPortraitRightFacing: boolean
	isPlayableCharacter: boolean
	isAvailableForTest: boolean
	isBaseContent: boolean
	role: Role
	recruitmentData: RecruitmentData | null
	abilities: Ability[]
	voiceLine: null
}

interface Ability {
	slot: Slot
	displayName: string
	description: string
	displayIcon: null | string
}

enum Slot {
	Ability1 = 'Ability1',
	Ability2 = 'Ability2',
	Grenade = 'Grenade',
	Passive = 'Passive',
	Ultimate = 'Ultimate',
}

interface RecruitmentData {
	counterId: string
	milestoneId: string
	milestoneThreshold: number
	useLevelVpCostOverride: boolean
	levelVpCostOverride: number
	startDate: Date
	endDate: Date
}

interface Role {
	uuid: string
	displayName: DisplayName
	description: string
	displayIcon: string
	assetPath: string
}

enum DisplayName {
	Controller = 'Controller',
	Duelist = 'Duelist',
	Initiator = 'Initiator',
	Sentinel = 'Sentinel',
}

export const fetchAgents = async () => {
	const url = 'https://valorant-api.com/v1/agents?isPlayableCharacter=true'
	const { data: axiosData } = await axios.get<Data>(url)
	const { data } = axiosData

	return data
}
