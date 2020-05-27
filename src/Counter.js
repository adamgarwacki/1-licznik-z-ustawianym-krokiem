import React, { Component } from 'react';
import Buttons from './Buttons';
import Step from './Step';

class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            counterValue: props.initValue,
            stepValue: 1
        }
    }

    changeCounter = () => {
        this.setState(prevState => {
            return ({
                counterValue: prevState.counterValue + this.state.stepValue
            });
        });
    }

    setZeroOrReset = (resetValue) => {
        switch (resetValue) {
            case 0:
                this.setState({ counterValue: 0 });
                break;

            case 1:
                this.setState({ counterValue: this.props.initValue })
                break;

            default:
                break;
        }
    }

    changeStep = (inputStep) => {
        console.log(inputStep);
        this.setState(() => {
            return ({
                stepValue: inputStep
            });
        });
    }

    render() {
        return (
            <div>
                <p>Licznik: {this.state.counterValue}</p>
                <Buttons changeCounterMethod={this.changeCounter} setZeroOrResetMethod={this.setZeroOrReset} />
                <Step changeStepMethod={this.changeStep} />
            </div>
        );
    }
}

export default Counter;