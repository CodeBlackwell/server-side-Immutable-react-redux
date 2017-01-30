var React   = require('react')
var Link    = require('react-router').Link
var connect = require('react-redux').connect

var Layout = React.createClass({

    render () {
        const { custom } = this.props
        const { title }  = custom
        return (
            <html>
                <head>
                    <title>{ title }</title>
                    <link rel="stylesheet" href="/style.css"/>
                </head>
                <body>
                    <div>
                        <h1>{ title }</h1>
                        <p>server side rendering baby</p>
                        <button onClick={ this._handleClick }>Press me for proof!</button>
                        { this.props.children }
                        <ul>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="about">About</Link>
                            </li>
                        </ul>
                    </div>
                    <script dangerouslySetInnerHTML={ { __html: 'window.PROPS=' + JSON.stringify(custom) } }/>
                    <script src="/bundle.js"/>
                </body>
            </html>

        )
    },

    _handleClick () {
        alert('Proof!')
    }
})

const mapStateToProps = function (state) {
    return { custom: state }
}

module.exports = connect(mapStateToProps)(Layout)
