/* global React ReactDOM */

var div = React.DOM.div
var h1 = React.DOM.h1

var MyTitle = React.createClass({
  render () {
    return (
      div(null,
        h1({style: {color: this.props.color}}, this.props.title)
      )
    )
  }
})

var MyTitleFactory = React.createFactory(MyTitle)

var MyFirstComponent = React.createClass({
  render: function () {
    return (
      div(null,
        MyTitleFactory({ title: 'props are the best', color: 'lightBlue' }),
        MyTitleFactory({ title: 'semicolons are cool', color: 'pink' }),
        MyTitleFactory({ title: 'Hey whats  up', color: 'yellow' }),
        MyTitleFactory({ title: 'its sunny outside', color: 'green' })
      )
    )
  }
})

ReactDOM.render(React.createElement(MyFirstComponent), document.getElementById('app'))
