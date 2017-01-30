var React       = require('react')
var ReactRouter = require('react-router')

var Route          = ReactRouter.Route
var Router         = ReactRouter.Router
var browserHistory = ReactRouter.browserHistory
var IndexRoute     = ReactRouter.IndexRoute

module.exports = (
    <Router history={ browserHistory }>
        <Route path='/' component={ require('../views/Layout.jsx') }>
            <IndexRoute component={ require('../views/Index.jsx') }/>
            <Route path='about' component={ require('../views/About.jsx') }/>
        </Route>
    </Router>
)
