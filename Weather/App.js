import React, {Component} from 'react';
import {Root} from 'native-base';
import Main from './src/app';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {persistor, store} from './src/redux/store/configureStore';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <Root>
            <Main />
          </Root>
        </PersistGate>
      </Provider>
    );
  }
}

export default App;
