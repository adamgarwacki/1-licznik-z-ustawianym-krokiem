import React from 'react';

class Step extends React.Component {
    constructor(props) {
        super(props);
        this.inputRef = React.createRef();
    }

    changeStepMethod = (stepValue) => {
        this.props.changeStepMethod(parseInt(stepValue));
    }

    render() {
        return (
            <div>
                <input type="number" ref={input => {this.inputRef = input}} onChange={() => this.changeStepMethod(this.inputRef.value)} min="1" />
            </div>
        )
    }
}

export default Step;