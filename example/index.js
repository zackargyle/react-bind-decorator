import React from 'react';
import ReactDOM from 'react-dom';
import reactbind from '../src/';

@reactbind()
class Demo extends React.Component {
    constructor() {
        super();
        this.state = { demo: '__STATE__' };
    }

    appendState(value) {
        const content = value + this.state.demo;
        return <li key={content}>{content}</li>;
    }

    prependState(value, i) {
        const content = this.state.demo + value;
        return <li key={content}>{content}</li>;
    }

    render() {
        const example = ['Hello', 'World', 'Foo', 'Bar'];
        return (
            <div style={ Styles.example }>
                { example.map(this.appendState) }
                { example.map(this.prependState) }
            </div>
        );
    }
}

const Styles = {
    example: {
        border: '2px solid #252525',
        borderRadius: '5px',
        color: '#252525',
        fontFamily: 'Arial',
        height: '160px',
        margin: '0 auto',
        padding: '20px',
        position: 'relative',
        width: '200px',
    }
};

ReactDOM.render(
    <Demo />,
    document.getElementById('app')
);
