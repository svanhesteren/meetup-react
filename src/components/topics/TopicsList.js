import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
// import RsvpList from '../rsvps/RsvpList'
import {connect} from 'react-redux'

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
      <div classname="topics-list" style={{width: 750, float: 'right'}}>
      <header>
        <h1>Topics list</h1>
      </header>
        <ol>
          { this.props.topics.map(topic => <li key={topic.topic}>{topic.topic} ({topic.count})</li> ) }
        </ol>
      </div>
    )
	}
}

const mapStateToProps = ({topics}) => ({topics})

export default connect(mapStateToProps)(TopicsList)
