import React, { Component } from 'react';
import { HashRouter, Route } from 'react-router-dom';
import WelcomeScreen from './welcome.js';
import MainMenu from './main-menu.js';
import './App.css';
import AdditionModule from './addition/addition-module.js';
import SubtractionModule from './subtraction/subtraction-module.js';

class App extends Component {
    
   constructor(props) {
        super(props);
        this.onStart = this.onStart.bind(this);
        this.state = {
            name: 'user',
            users: []
        }
    }

    onStart(name) {
        if (name) {
            this.setState({ name });
        }
    }
    
    
    componentDidMount(){
        fetch('/data')
            .then(res => res.json())
            .then(users => this.setState({users}));

    }

    render() {
        const { name, users } = this.state;
        const routes = ['background', 'example', 'practice', 'end'];
        console.log(users);
        return (
            <div className="default">
            
                <div className="something">
                    <ul>
                    {this.state.users.map(user => 
                        <li key={user.id}>{user.username}</li>
                    )}
                    </ul>
                </div>
            
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
