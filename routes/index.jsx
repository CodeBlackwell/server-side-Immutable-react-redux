var router         = require('express').Router()
var React          = require('react')
var ReactDOMServer = require('react-dom/server')
var ReactRouter    = require('react-router')
var Redux          = require('redux')
var Provider       = require('react-redux').Provider
var Context        = ReactRouter.RouterContext

var Immutable       = require('immutable')
var createReducer   = require('redux-immutablejs').createReducer
var combineReducers = require('redux-immutablejs').combineReducers

var initState = Immutable.fromJS({ application: { title: 'Immutable' } })

var reducer      = createReducer(initState, {})
var rootReducer  = combineReducers({
    application: reducer
})
var initialState = rootReducer(initState)

var transit = require('transit-immutable-js')

router.get('*', function (request, response) {
    var store = Redux.createStore(rootReducer, initialState)

    ReactRouter.match({
        routes:   require('./routes.jsx'),
        location: request.url
    }, function (error, redirectLocation, renderProps) {
        // if renderProps is defined - that means that the route was matched
        if (renderProps) {
            var html = ReactDOMServer.renderToString(
                <Provider store={ transit.fromJSON(store) }>
                    <Context { ...renderProps }/>
                </Provider>
            )
            response.send(html)
        }
        else {
            response.status(404).send('Not Found')
        }
    })
})

module.exports = router
