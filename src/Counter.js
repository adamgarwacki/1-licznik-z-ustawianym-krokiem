import React, {Component} from 'react';

class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            counterValue: 108
        }
    }

    changeCounter = () => {
        this.setState(prevState => {
            return ({counterValue: prevState.counterValue + 1});
        });
    }

    render() {
        return (
            <div>
                {this.state.counterValue}
                <button onClick={this.changeCounter}>Dodaj 1</button>
            </div>
        );
    }
}

export default Counter;