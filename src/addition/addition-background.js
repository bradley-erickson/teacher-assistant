import React, { Component } from 'react';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';

const AdditionBackground = () => {
    return (    
        <div>
            <div>
                <b className="body-header">Background:</b>
                <br />
                Addition is a combination of multiple groups, or the total amongst all groups involved. This total is called the sum. The general form for an equation is:
                <br />
                <br />
                <i>a + b = c</i>
                <br />
                <br />
                Where <i>a</i> and <i>b</i> are numbers and <i>c</i> is the sum.
                Click 'Next' to look at some examples
            </div>
            <div>
                <Link to="/student/addition/example">
                    <Button>
                        Next
                    </Button>
                </Link>
            </div>
        </div>
    );
}

export default AdditionBackground;
