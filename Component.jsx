var React = require('react')

module.exports = React.createClass({
    render () {
        return (
            <div>
                <h1>Hello World!</h1>
                <p>server side rendering baby</p>
                <button onClick={ this._handleClick }>Press me for proof!</button>
            </div>
        )
    },

    _handleClick () {
        alert('Proof!')
    }
})
