var router         = require('express').Router()
var React          = require('react')
var ReactDOMServer = require('react-dom/server')
var ReactRouter    = require('react-router')

var Route          = ReactRouter.Route
var Router         = ReactRouter.Router
var Context        = ReactRouter.RouterContext
var browserHistory = ReactRouter.browserHistory

router.get('*', function (request, response) {
    var props = { title: 'Isomorphic/Universal React' }
    ReactRouter.match({
        routes:   (
                      <Router history={ browserHistory }>
                          <Route path='/' component={ require('../Component.jsx') }>
                          </Route>
                      </Router>
                  ),
        location: request.url
    }, function (error, redirectLocation, renderProps) {
        // if renderProps is defined - that means that the route was matched
        if (renderProps) {
            var html = ReactDOMServer.renderToString(
                <Context { ...renderProps }
                    createElement={ function (Component, renderProps) {
                        {/*this syntax evaluates to { ...renderProps, ...props }*/}
                       return <Component { ...renderProps } { ...props }/>
                    } }
                />
            )
            response.send(html)
        }
        else {
            response.status(404).send('Not Found')
        }
    })
})

module.exports = router
