import React from 'react';
import { render } from 'react-dom';
import MyTitle from './MyTitle';



var MyFirstComponent = React.createClass({
  render: function () {
    return (
      <div>
      <MyTitle title='props are cool' color='lightPink' />
      <MyTitle title='this is dope' color='lightBlue' />
      <MyTitle title='its so sunny outside' color='lightYellow' />
      </div>
    );
  }
});

render(React.createElement(MyFirstComponent), document.getElementById('app'));
