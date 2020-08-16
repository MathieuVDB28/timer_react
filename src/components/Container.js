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

    handleEditCloseForm = () => {
        this.setState({isFormOpen: false});
    }

    onFormSubmit = ({id, title, project}) => {
        this.handleEditFormClose();
        this.props.onFormSubmit({id, title, project});
    }

    render() {
        return(
            <div className="list--container">
                {this.state.isFormOpen ? (
                    <TimerForm 
                    title = {this.props.title}
                    project = {this.props.project}
                    id = {this.props.id}
                    onFormSubmit = {this.onFormSubmit} 
                    onCloseForm = {this.handleEditCloseForm}
                    />
                ) : (
                    <Timer 
                        title = {this.props.title}
                        project = {this.props.project} 
                        id = {this.props.id}
                        elapsed = {this.props.elapsed}
                        runningSince = {this.props.runningSince}
                        onEditFormOpen = {this.handleEditFormOpen}
                        onDelete = {this.props.onDelete}
                        onPlay={this.props.onPlay}
                        onPause={this.props.onPause}
                    />
                )}
            </div>
        )
    }
}

export default Container;