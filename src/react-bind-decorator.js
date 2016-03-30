const REACT_METHODS = {
    constructor: true,
    getDOMNode: true,
    getInitialState: true,
    getDefaultProps: true,
    componentWillMount: true,
    componentDidMount: true,
    componentWillReceiveProps: true,
    shouldComponentUpdate: true,
    componentWillUpdate: true,
    componentDidUpdate: true,
    componentWillUnmount: true,
    isMounted: true,
    render: true,
    replaceProps: true,
    replaceState: true,
    setProps: true,
};

function isFunction(fn) {
    return typeof fn === 'function';
}

/*
 * This creates a closure around the object <target>, which can then
 * be used to iterate over a list of method names, returning whether
 * or not the method is a React.Component prototype method.
 * @param {Object} target - the root object
 * @param {string} method - an object attribute
 */
function isNotReactMethod(target) {
    return (method) => {
        return isFunction(target.prototype[method]) && !REACT_METHODS[method];
    }
}

/*
 * This creates a closure around the object <target>, which can then
 * be used to iterate over a list of method names, binding each one
 * to target explicitly.
 */
function bindMethod(target) {
    return (method) => {
        const fn = target.prototype[method];
        let boundFn = null;
        Object.defineProperty(target.prototype, method, {
            get() {
                if (!boundFn) {
                    boundFn = fn.bind(this);
                }
                return boundFn;
            }
        });
    };
}

/*
 * Binds all of the unique class methods to the current
 * instance. This will not bind the methods inherited from
 * React.Component.
 */
export default function bind() {
    return function(target) {
        Object.getOwnPropertyNames(target.prototype)
              .filter(isNotReactMethod(target))
              .forEach(bindMethod(target))
    };
}