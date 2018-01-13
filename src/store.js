import {createStore, applyMiddleware, combineReducers, compose} from 'redux'
import ReduxThunk from 'redux-thunk'
import reducers from './reducers'
import io from 'socket.io-client'

const socket = io.connect('http://localhost:3002')

const reducer = combineReducers(reducers)

const devTools = window.devToolsExtension ? window.devToolsExtension() : f => f

const enhancer = compose(
	applyMiddleware(ReduxThunk),
	devTools
)

const store = createStore(reducer, enhancer)

socket.on('action', payload => {
	console.log(payload)
	store.dispatch(payload)
})

export default store
