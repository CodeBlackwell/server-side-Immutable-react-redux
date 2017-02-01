var createStore = require('redux').createStore
var Provider    = require('react-redux').Provider
var React       = require('react')
var ReactDOM    = require('react-dom')
var routes      = require('./routes/routes.jsx')
var Immutable   = require('immutable')

var createReducer   = require('redux-immutablejs').createReducer
var combineReducers = require('redux-immutablejs').combineReducers

var initState = Immutable.Map(window.PROPS)

var reducer      = createReducer(initState, {})
var rootReducer  = combineReducers({
    application: reducer
})
var initialState = rootReducer(initState)
var store = createStore(rootReducer, initialState)

ReactDOM.render(
    <Provider store={ store }>
        { routes }
    </Provider>, document
)
