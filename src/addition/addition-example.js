import React, { Component } from 'react';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { names } from '../constants/names.js';
import { items } from '../constants/items.js';

function getTalliesText(num, ran1) {
    let text = `${num}  =  `;
    for (let i = 0; i < num; i++) {
        if (i === ran1) {
            text = text + '  +  ';
        }
        text = text + '|';
    }
    return text;
}

class AdditionExample extends Component {
    constructor(props) {
        super(props);
        this.nextPage = this.nextPage.bind(this);
        this.showBasicExample = this.showBasicExample.bind(this);
        this.showComplexExample = this.showComplexExample.bind(this);
        this.state = {
            rand1: Math.floor(Math.random() * 6),
            rand2: Math.floor(Math.random() * 6),
            rand3: Math.floor(Math.random() * 6),
            rand4: Math.floor(Math.random() * 6),
            name: names[Math.floor(Math.random() * names.length)],
            item: items[Math.floor(Math.random() * items.length)]
        };
    }

    nextPage() {
        this.props.click('practice');
    }

    showBasicExample() {
        const { rand1, rand2 } = this.state;
        const total = rand1 + rand2;
        let i = 0;
        const run = setInterval(function() {
            document.getElementById('basicExample').innerHTML = getTalliesText(i++, rand1);
            if (i === total + 1) clearInterval(run);
        }, 1000); 
    }

    showComplexExample() {
        const { rand3, rand4 } = this.state;
        const total = rand3 + rand4;
        let i = 0;
        const run = setInterval(function() {
            document.getElementById('complexExample').innerHTML = getTalliesText(i++, rand3);
            if (i === total + 1) clearInterval(run);
        }, 1000); 
    }

    render() {
        const {
            rand1, rand2, rand3, rand4, name, item
        } = this.state;
        return (    
            <div>
                <div>
                    <b className="body-header">Example:</b>
                    <br />
                    Click the button to show the steps for this basic example: 
                    <Button onClick={this.showBasicExample}>
                        Show steps
                    </Button>
                    <br />
                    {rand1} + {rand2} = {rand1 + rand2}
                    <div id="basicExample"></div>
                    <br />
                    Click the button to show the steps for this complex example: 
                    <Button onClick={this.showComplexExample}>
                        Show steps
                    </Button>
                    <br />
                    {name} has {rand3} {item}. They obtain {rand4} more. How many {item} does {name} have now?
                    <br />
                    <i>They now have {rand3 + rand4} total.</i> 
                    <div id="complexExample"></div>
                    <br />
                </div>
                <div>
                <Link to="/addition/practice">
                    <Button onClick={this.nextPage}>
                        Next
                    </Button>
                </Link>
                </div>
            </div>
        );
    }
};

AdditionExample.propTypes = {
    click: PropTypes.func.isRequired
}

export default AdditionExample;