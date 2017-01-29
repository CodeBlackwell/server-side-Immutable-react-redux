var React = require('react')

module.exports = React.createClass({
    render () {
        return (
            <html>
                <head>
                    <title>Isomorphic App with React</title>
                    <link rel="stylesheet" href="/style.css" />
                </head>
                <body>
                    <div>
                        <h1>Hello World!</h1>
                        <p>server side rendering baby</p>
                        <button onClick={ this._handleClick }>Press me for proof!</button>
                    </div>
                    <script src="/bundle.js" />
                </body>
            </html>

        )
    },

    _handleClick () {
        alert('Proof!')
    }
})
