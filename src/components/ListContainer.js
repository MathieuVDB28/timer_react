import React from 'react';
import PropTypes from 'prop-types';
import Container from './Container';


const renderContainer = props => {
    return props.timers.map((timer => {
        return (
             <Container 
             onFormSubmit={props.onFormSubmit}
             onDelete={props.onDelete}
             onPlay={props.onPlay}
             onPause={props.onPause}
             key={timer.id}
             {...timer}
             />
        )
    }))
}

const ListContainer = (props) => {
        return(
            <div className="list--container">
                {renderContainer(props)}
            </div>
        )
}

ListContainer.prototype = {
    onFormSubmit: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired, 
    timers: PropTypes.array.isRequired,
    onPlay: PropTypes.func.isRequired,
    onPause: PropTypes.func.isRequired
}

export default ListContainer;