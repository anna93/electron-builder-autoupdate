import { ipcRenderer } from 'electron';
import React, { Component } from 'react';

import './styles/app.scss';


class RootContainer extends Component {

  componentDidMount() {
    ipcRenderer.send('prevent-display-sleep', {
      ab: 123,
      cv: 12344
    })
    ipcRenderer.send('start-persistent-connection', null);
    ipcRenderer.on('debug-data', (event, arg) => {
      console.log('------Main Debug Data-------', event, arg);
    })
  }

  render() {
    return (
      <div>
        <div>
          <div className="transparent-title-bar">
            Sample App
          </div>
          <div className="main-container">
            Hello World
          </div>
        </div>
      </div>
    )
  }
}


export default RootContainer;
