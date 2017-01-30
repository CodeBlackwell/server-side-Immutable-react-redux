var React       = require('react')
var ReactRouter = require('react-router')

var Route          = ReactRouter.Route
var Router         = ReactRouter.Router
var browserHistory = ReactRouter.browserHistory
var IndexRoute     = ReactRouter.IndexRoute

if (typeof window === 'object') {
    function createElement (Component, props) {
        return <Component { ...props } custom={ window.PROPS }/>
    }
}

module.exports = (
    <Router history={ browserHistory } createElement={ createElement }>
        <Route path='/' component={ require('../views/Layout.jsx') }>
            <IndexRoute component={ require('../views/Index.jsx') }/>
            <Route path='about' component={ require('../views/About.jsx') }/>
        </Route>
    </Router>
)
