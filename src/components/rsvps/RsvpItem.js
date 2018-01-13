import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'

// export const rsvpShape = PropTypes.shape({
// 	memeberPhoto: PropTypes.url.isRequired,
// 	memberName: PropTypes.string.isRequired,
// 	eventName: PropTypes.string.isRequired
// })


class RsvpItem extends PureComponent {
	static propTypes = {
		rsvp: PropTypes.shape({
			event: PropTypes.shape({ eventName: PropTypes.string.isRequired }).isRequired,
			member: PropTypes.shape({ memberName: PropTypes.string.isRequired, photo: PropTypes.string }).isRequired
		}).isRequired
	}

	render() {
		const {member, event} = this.props.rsvp
		return (
			<div className="rsvp-item" style={{backgroundColor: 'grey', margin: 10, padding: 5}}>
				<img src={member.photo} alt="my scary pic"/>
				<h4>{ event.event_name }</h4>

				<span style={{color:'white'}}>{ member.member_name } is joining this event.</span>
			</div>
		)
	}
}




export default RsvpItem
