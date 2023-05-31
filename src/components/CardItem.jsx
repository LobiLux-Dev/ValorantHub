import PropTypes from 'prop-types'
import { Card } from 'react-bootstrap'

const CardItem = ({ background, description, displayIcon, displayName, role }) => {
	return (
		<div className="bg-[#27272f] border border-black/[.175] rounded-md text-[#c1c1c4] w-80">
			<Card.Header>
				<Card.Img variant="top" alt={displayName} src={displayIcon} style={{ background: `url(${background})` }} />
			</Card.Header>
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

export default CardItem

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
