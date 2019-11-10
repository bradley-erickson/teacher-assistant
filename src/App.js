import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from './login.js';
import Student from './user/students.js';
import './App.css';

class App extends Component {
    
   constructor(props) {
        super(props);
        this.onStart = this.onStart.bind(this);
        this.state = {
            user: {}
        }
    }

    onStart(user) {
        if (user) {
            this.setState({ user });
        }
    }

    render() {
        const { user } = this.state;
        return (
            <main className="default">
                <Switch>
                    <Route exact path='/' component={() => <Login onStart={this.onStart}/>}/>
                    <Route path='/student' component={() => <Student user={user} />}/>
                </Switch>
            </main>
        );
    }
}

export default App;
