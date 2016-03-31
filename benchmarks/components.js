import React, { Component } from 'react';

import { autobind } from 'core-decorators';
import reactbind from '../src/';

export const CreateClassVersion = React.createClass({
    fn1: function() {},
    fn2: function() {},
    fn3: function() {},
    render: function() {
        return <div onClick={this.fn1}>Hello world</div>;
    }
});

export class ES6ConstructorBindVersion extends Component {
    constructor() {
        super();
        this.fn1 = this.fn1.bind(this);
        this.fn2 = this.fn2.bind(this);
        this.fn3 = this.fn3.bind(this);
    }

    fn1() {}
    fn2() {}
    fn3() {}
    render() {
        return <div onClick={this.fn1}>Hello world</div>;
    }
}

@autobind()
export class AutobindVersion extends Component {
    fn1() {}
    fn2() {}
    fn3() {}
    render() {
        return <div onClick={this.fn1}>Hello world</div>;
    }
}

@reactbind()
export class ReactBindVersion extends Component {
    fn1() {}
    fn2() {}
    fn3() {}
    render() {
        return <div onClick={this.fn1}>Hello world</div>;
    }
}
