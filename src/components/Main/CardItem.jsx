import PropTypes from 'prop-types'
import { Card } from 'react-bootstrap'

export const CardItem = ({ background, description, displayIcon, displayName, role }) => {
	return (
		<div className="bg-[#27272f] border border-black/[.175] rounded-lg text-[#c1c1c4] w-80 p-5 m-5 hover:shadow-2xl shadow-slate-800">
			<div className="bg-zinc-800 border-b border-black/[.175]">
				<img src={displayIcon} alt={displayName} style={{ background: `url(${background})` }} />
			</div>
			<Card.Body>
				<h3 className="fw-bold">{displayName}</h3>
				<p>{description}</p>
			</Card.Body>
			<Card.Footer>
				<img alt={role.displayName} src={role.displayIcon} /> {role.displayName}
			</Card.Footer>
		</div>
	)
}

CardItem.propTypes = {
	background: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
	displayIcon: PropTypes.string.isRequired,
	displayName: PropTypes.string.isRequired,
	role: PropTypes.shape({
		displayIcon: PropTypes.string.isRequired,
		displayName: PropTypes.string.isRequired,
	}),
}
