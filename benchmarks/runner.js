import React from 'react';
import ReactDOMServer from 'react-dom/server';
import Benchmark from "benchmark";
import {
    CreateClassVersion,
    ES6ConstructorBindVersion,
    AutobindVersion,
    ReactBindVersion,
} from "./components";

function test(Component) {
    return () => {
        ReactDOMServer.renderToString(<Component />);
    }
}

function onComplete() {
    this.forEach(benchmark => {
        console.log(benchmark.name);
        console.log(`    Average:    ${Math.round(benchmark.stats.mean * 1000000)} us`);
    });
}

Benchmark.Suite({ })
    .add('CreateClassVersion', test(CreateClassVersion))
    .add('ES6ConstructorBindVersion', test(ES6ConstructorBindVersion))
    .add('AutobindVersion', test(AutobindVersion))
    .add('ReactBindVersion', test(ReactBindVersion))
    .on("complete", onComplete)
    .run();