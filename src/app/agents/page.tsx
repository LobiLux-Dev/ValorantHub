import Image from 'next/image'
import { Metadata } from 'next'

import { fetchAgents } from '@/helpers/fetchAgents'

const AgentsPage = async () => {
	const agents = await fetchAgents()

	return (
		<div className="container flex flex-wrap gap-5 justify-center mx-auto py-1">
			{agents.map(({ background, description, displayIcon, displayName, role, uuid }) => (
				<div
					className=" bg-accent border border-black card card-compact hover:shadow-2xl rounded-lg shadow-slate-800 w-64"
					key={uuid}
				>
					<Image
						alt={displayName}
						height={256}
						priority
						src={displayIcon}
						style={{ backgroundImage: `url(${background})` }}
						width={256}
					/>
					<div className="card-body">
						<h3 className="card-title text-primary font-bold">{displayName}</h3>
						<p className="text-secondary selection:text-accent selection:bg-info/[.6]">{description}</p>
						<div className="divider m-0"></div>
						<div className="flex gap-2">
							<Image alt={role.displayName} height={24} src={role.displayIcon} width={24} />
							<h5 className="text-info font-semibold">{role.displayName}</h5>
						</div>
					</div>
				</div>
			))}
		</div>
	)
}

export default AgentsPage
