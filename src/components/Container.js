import React, {Component} from 'react';
import Timer from './Timer';
import TimerForm from './TimerForm';


class Container extends Component {
    state = {
        isFormOpen: false
    } 

    handleEditFormOpen = () => {
        this.setState({isFormOpen: true});
    }

    render() {
        return(
            <div className="list--container">
                {this.props.isFormOpen ? (
                    <TimerForm 
                    title = {this.props.title}
                    project = {this.props.project}
                    id = {this.props.id}
                    onFormSubmit = {this.props.onFormSubmit} 
                    />
                ) : (
                    <Timer 
                        title = {this.props.title}
                        project = {this.props.project} 
                        id = {this.props.id}
                        elapsed = {this.props.elapsed}
                        runningSince = {this.props.runningSince}
                        onEditFormOpen = {this.handleEditFormOpen}
                    />
                )}
            </div>
        )
    }
}

export default Container;