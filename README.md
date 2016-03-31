# react-bind-decorator

An ES2016 decorator that autobinds all of the unique class methods that are not React.Component prototype methods. This is lighter, and faster than the `core-decorator` autobind decorator for React components.

## Install

``` js
npm install react-bind-decorator --save
```

## Usage:
``` js

import reactbind from 'react-bind-decorator';

@reactbind()
class Foo extends React.Component {

    // This gets called with the correct <this>
    boundMethod(arg, i) {
        return <li key={i}>{this.props.test + arg}</li>;
    }

    // Not bound
    componentDidMount() {

    }

    // Not bound
    render() {
        return (
            <div>
                { this.props.data.map(this.boundMethod) }
            </div>
        );
    }
}

```

## Benchmarks

![](https://raw.githubusercontent.com/zackargyle/react-bind-decorator/master/benchmarks/benchmarks.png)

## Scripts
script         | description
-------------- | -----------
`npm start`    | run the example on `localhost:3000`
`npm run benchmark` | run the benchmarks to get average time to render

## License
[MIT](http://isekivacenz.mit-license.org/)
