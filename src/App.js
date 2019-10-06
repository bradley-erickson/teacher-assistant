import React, { Component } from 'react';
import { HashRouter, Route } from 'react-router-dom';
import WelcomeScreen from './welcome.js';
import MainMenu from './main-menu.js';
import './App.css';
import AdditionModule from './addition/addition-module.js';
import SubtractionModule from './subtraction/subtraction-module.js';
import { getUsers } from './helpers/database-helpers.js';

class App extends Component {
    
   constructor(props) {
        super(props);
        this.onStart = this.onStart.bind(this);
        this.state = {
            name: 'user',
            users: []
        }
    }

    componentDidMount() {
        this.setState({ users: getUsers() });
    }

    onStart(name) {
        if (name) {
            this.setState({ name });
        }
    }

    render() {
        const { name, users } = this.state;
        const routes = ['background', 'example', 'practice', 'end'];
        console.log(users);
        return (
            <div className="default">
                <HashRouter basename='/'>
                    <Route exact path="/" component={() => <WelcomeScreen onStart={this.onStart} />} />
                    <Route exact path="/menu" component={() => <MainMenu name={name} />} />
                    <Route exact path="/addition/:type" component={() => <AdditionModule data={routes} name={name} />} />
                    <Route exact path="/subtraction/:type" component={() => <SubtractionModule data={routes} name={name} />} />
                </HashRouter>
            </div>
                
            
        );
    }
}

export default App;
