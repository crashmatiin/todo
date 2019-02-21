import React, { Component } from 'react';
import { createStore } from 'redux';
import Route from 'react-router-dom/Route';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import ContactPage from './components/input/input';
import './App.css';
import logo from './logo.svg';
import MainPage from "./components/main page/main page";
import rootReducer from './store/reducers';

const store = createStore(rootReducer);

function HeadApp(){
      return (
          <div className='App-header'>
                <h1>My react</h1>
                <img src={logo} className="App-logo" alt="logo" />
                <h1>App</h1>
          </div>
      );
}

class App extends Component {
    render(){
        return (
            <Provider store={store}>
                <Router>
                    <div className="App">
                        <div className='wrapper'>
                            <HeadApp />
                            <Route path="/" exact component={ ContactPage }
                            />
                        </div>
                        <Route path="/main" exact component={ MainPage }>
                        </Route>
                        <div className="footer">
                        </div>
                    </div>
                </Router>
            </Provider>
        );
    }
}

export default App;
