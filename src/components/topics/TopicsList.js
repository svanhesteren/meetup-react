import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
// import RsvpList from '../rsvps/RsvpList'

class TopicsList extends PureComponent {
  static propTypes = {
  	topics: PropTypes.arrayOf(PropTypes.shape({
  		topic: PropTypes.string.isRequired,
  		count: PropTypes.number.isRequired
  	}))
  }
  // <ul> this.props.topics.map(topic => {<li> topic.topic topic.count </li>}) </ul>

	render() {
		return (
      <div>
        <ol>
          { this.props.topics.map(topic => <li>{topic.topic} ({topic.count})</li> ) }
        </ol>
      </div>
    )
	}
}

export default TopicsList
