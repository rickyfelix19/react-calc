import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// check index.HTML to see how Hello World works in JSX

// Hello World using JavaScript
class HelloWorld extends React.Component {
    render() {
        return (
            <div className="helloWorld">
                <h1>Hello, React!</h1>
            </div>
        )
    }
}

ReactDOM.render(<HelloWorld />, document.getElementById('root'));