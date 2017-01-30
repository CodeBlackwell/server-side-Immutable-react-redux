var router         = require('express').Router()
var React          = require('react')
var ReactDOMServer = require('react-dom/server')
var ReactRouter    = require('react-router')
var Redux          = require('redux')
var Provider       = require('react-redux').Provider

var Context = ReactRouter.RouterContext

function reducer(state) { return state }

router.get('*', function (request, response) {
    var initialState = { title: 'Isomorphic/Universal React' }
    var store = Redux.createStore(reducer, initialState)

    ReactRouter.match({
        routes:   require('./routes.jsx'),
        location: request.url
    }, function (error, redirectLocation, renderProps) {
        // if renderProps is defined - that means that the route was matched
        if (renderProps) {
            var html = ReactDOMServer.renderToString(
                <Provider store={ store }>
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
