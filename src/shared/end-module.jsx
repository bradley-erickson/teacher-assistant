import React from 'react';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import _ from 'lodash';

const EndModule = (props) => {
    const { moduleType, name } = props;
    return (    
        <div>
            <div>
                <b className="body-header">Congratulations, {_.upperFirst(name)}!</b>
                <br />
                You completed the {_.upperFirst(moduleType)} module!
            </div>
            <Link to="/student">
                <Button id="dash-button" className="dash-button">
                    <i className="fa fa-home mr-1" />
                    Menu
                </Button>
            </Link>
        </div>
    );
};

EndModule.propTypes = {
    moduleType: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
}

export default EndModule;