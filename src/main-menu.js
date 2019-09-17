import React from 'react';
import { Button } from 'reactstrap';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Header from './shared/header.js';

const MainMenu = (props) => {
    return (
        <div>
            <Header title="Main Menu" icon="fa-home" className="welcome-main-header">
                <Link to="/">
                    <Button>
                        Reset
                    </Button>
                </Link>
            </Header>
            <div className="body-component">
                Hello, {props.name}!
                <br />
                What do you need help with?
                <br />
                <div className="top-margin">
                    <Link to="/addition/background">
                        <Button className="right-margin">
                            <i className="right-margin fa fa-plus" />
                            Addition
                        </Button>
                    </Link>
                    <Link to="/subtraction/background">
                        <Button>
                            <i className="right-margin fa fa-minus" />
                            Subtraction
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

MainMenu.propTypes = {
    name: PropTypes.string.isRequired
}

export default MainMenu;