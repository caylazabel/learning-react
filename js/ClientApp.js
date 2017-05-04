import React from 'react';
import { render } from 'react-dom';
import MyTitle from './MyTitle';

var div = React.DOM.div;

var MyTitleFactory = React.createFactory(MyTitle);

var MyFirstComponent = React.createClass({
  render: function () {
    return (
      div(null,
        MyTitleFactory({ title: 'props are the best', color: 'lightBlue' }),
        MyTitleFactory({ title: 'semicolons are cool', color: 'pink' }),
        MyTitleFactory({ title: 'Hey whats  up', color: 'yellow' }),
        MyTitleFactory({ title: 'its sunny outside', color: 'green' })
      )
    );
  }
});

render(React.createElement(MyFirstComponent), document.getElementById('app'));
