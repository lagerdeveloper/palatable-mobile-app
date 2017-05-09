import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { AsyncStorage, ActivityIndicator, View, Text } from 'react-native';
import createSagaMiddleware from 'redux-saga';
import { persistStore, autoRehydrate } from 'redux-persist';
import { createStore, applyMiddleware, compose } from 'redux';
import AppWithNavigationStateContainer from './containers/AppWithNavigation';
import { SESSION_KEY } from './LocalStorageKeys';
import reducers from './reducers';
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  reducers,
  compose(
    applyMiddleware(sagaMiddleware),
    autoRehydrate(),
  ),
);


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      localStorageLoading: false,
      store,
    };
  }

  componentWillMount() {
    this.setState({ localStorageLoading: true });
    AsyncStorage.getItem(SESSION_KEY).then((session) => {
      if (session !== null) {
        const sessionInfo = JSON.parse(session);
        const initialState = {
          user: {
            signedIn: sessionInfo.signedIn,
            session: sessionInfo.session,
          },
        };

        this.setState({ store: createStore(reducers, initialState, compose(
          applyMiddleware(sagaMiddleware),
          autoRehydrate(),
        )) });
      }

      sagaMiddleware.run(rootSaga);
      this.setState({ localStorageLoading: false });
    })
    .catch((error) => {
      console.log(error);
      this.setState({ store });
    });
  }

  render() {
    if (this.state.localStorageLoading) {
      return (
        <View>
          <Text>Hello</Text>
          <ActivityIndicator
            animating
            size="large"
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
          />
        </View>
      );
    }
    return (
      <Provider store={this.state.store}>
        <AppWithNavigationStateContainer />
      </Provider>
    );
  }
}

export default App;
