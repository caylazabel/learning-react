import React from 'react';
var div = React.DOM.div;
var h1 = React.DOM.h1;

const MyTitle = React.createClass({
  render () {
    return (
      <div>
      <h1 style = { style }>
      {this.props.title}
      </h1>
      </div>
    );
  }
});

export default MyTitle;
