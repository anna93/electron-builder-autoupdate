import React from 'react';
import ReactDOM from 'react-dom';
import RootContainer from './root-container';

import { AppContainer } from 'react-hot-loader';

const render = Component => {
  ReactDOM.render(
      <AppContainer>
        <Component/>
      </AppContainer>,
      document.getElementById('app')
  );
}

render(RootContainer)

// // webpack Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./root-container', () => {
    render(require('./root-container').default)
  })
}
