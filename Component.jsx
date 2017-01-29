var React = require('react')

module.exports = React.createClass({
    render () {
        const { title } = this.props
        return (
            <html>
                <head>
                    <title>{ title }</title>
                    <link rel="stylesheet" href="/style.css" />
                </head>
                <body>
                    <div>
                        <h1>{ title }</h1>
                        <p>server side rendering baby</p>
                        <button onClick={ this._handleClick }>Press me for proof!</button>
                    </div>
                    <script dangerouslySetInnerHTML={ {__html: 'window.PROPS=' + JSON.stringify(this.props)} }/>
                    <script src="/bundle.js" />
                </body>
            </html>

        )
    },

    _handleClick () {
        alert('Proof!')
    }
})
