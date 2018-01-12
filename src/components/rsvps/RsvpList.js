import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import RsvpItem from './RsvpItem'

class RsvpList extends PureComponent {
	static propTypes = {
		rsvps: PropTypes.arrayOf(PropTypes.object).isRequired
  }

	render() {
		return (
			<div className="rsvp list" style={{width: 500, float: 'left'}}>
				<header>
					<h1>RSVP list</h1>
				</header>

				<main>
					{ this.props.rsvps.map(rsvp => <RsvpItem key={rsvp.rsvp_id} rsvp={rsvp} />) }
					
				</main>
			</div>
		)
	}
}

export default RsvpList
