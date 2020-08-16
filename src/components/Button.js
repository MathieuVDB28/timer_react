import React, {Component} from 'react';

class Button extends Component {
    render() {
        return(
            <button onClick={this.props.handleFormOpen} className="button__outline">
                +
            </button>
        )
    }
}

export default Button;