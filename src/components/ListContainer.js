import React, {Component} from 'react';
import Container from './Container';


class ListContainer extends Component {
    renderContainer = () => {
        return this.props.timers.map((timer => {
            return <Container onFormSubmit={this.props.onFormSubmit} key={timer.id} {...timer}/>
        }))
    }
    render() {
        return(
            <div className="list--container">
                {this.renderContainer()}
            </div>
        )
    }
}

export default ListContainer;