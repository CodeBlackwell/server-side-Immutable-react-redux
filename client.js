var createStore = require('redux').createStore
var Provider    = require('react-redux').Provider
var React       = require('react')
var ReactDOM    = require('react-dom')
var routes      = require('./routes/routes.jsx')
var transit     = require('transit-immutable-js')

var createReducer   = require('redux-immutablejs').createReducer
var combineReducers = require('redux-immutablejs').combineReducers

const initState = window.PROPS ? transit.fromJSON(window.PROPS) : new Map();

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
