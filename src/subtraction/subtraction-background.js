import React, { Component } from 'react';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class SubtractionBackground extends Component {
    constructor(props) {
        super(props);
        this.nextPage = this.nextPage.bind(this);
    }

    nextPage() {
        this.props.click('example');
    }

    render() {
        return (    
            <div>
                <div>
                    <b className="body-header">Background:</b>
                    <br />
                    Subtraction is the take away of an amout from a group. This is call the difference:
                    <br />
                    <br />
                    <i>a - b = c</i>
                    <br />
                    <br />
                    Where <i>a</i> and <i>b</i> are numbers and <i>c</i> is the difference.
                    Click 'Next' to look at some examples
                </div>
                <div className="top-margin">
                    <Link to="/subtraction/example">
                        <Button onClick={this.nextPage}>
                            Next
                        </Button>
                    </Link>
                </div>
            </div>
        );
    }
};

SubtractionBackground.propTypes = {
    click: PropTypes.func.isRequired
}

export default SubtractionBackground;