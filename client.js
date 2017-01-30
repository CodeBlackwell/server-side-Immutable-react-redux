var React = require('react')
var ReactDOM = require('react-dom')
var createStore= require('redux').createStore
var Provider = require('react-redux').Provider

var routes = require('./routes/routes.jsx')

function reducer(state) { return state }

var store = createStore(reducer, window.PROPS)

ReactDOM.render(
    <Provider store={ store}>
        {routes}
    </Provider>, document
)
