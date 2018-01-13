import { UPDATE_TOPICS } from '../actions/topics/topics'

const topics = [{topic:"music", count: 5},
                {topic: "fighting", count: 4},
                {topic: "swimming", count: 1}]


export default function (state = topics, { type, payload } = {}) {
  switch(type){
    case UPDATE_TOPICS:
      return [...payload]

    default:
    return state
  }
}
