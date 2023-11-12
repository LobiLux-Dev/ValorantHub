import Image from 'next/image'

import { fetchAgents } from '@/helpers/fetchAgents'

const AgentsPage = async () => {
	const agents = await fetchAgents()

	return (
		<div className="container flex flex-wrap gap-5 justify-center mx-auto py-1">
			{agents.map(({ background, description, displayIcon, displayName, role, uuid }) => (
				<div
					className=" bg-accent border border-black card card-compact hover:shadow-2xl rounded-lg shadow-slate-800 w-80"
					key={uuid}
				>
					<Image
						alt={displayName}
						height={320}
						priority
						src={displayIcon}
						style={{ backgroundImage: `url(${background})` }}
						width={320}
					/>
					<div className="card-body">
						<h3 className="card-title font-bold text-primary">{displayName}</h3>
						<p className="text-secondary selection:bg-info/[.6] selection:text-accent">{description}</p>
						<div className="divider m-0"></div>
						<div className="flex gap-2 items-center">
							<Image alt={role.displayName} height={30} src={role.displayIcon} width={30} />
							<h5 className="font-semibold text-info">{role.displayName}</h5>
						</div>
					</div>
				</div>
			))}
		</div>
	)
}

export default AgentsPage
