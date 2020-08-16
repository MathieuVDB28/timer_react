import React, {Component} from 'react';
import ActionContainer from './ActionContainer';
import ListContainer from './ListContainer';
import {v4 as uuid} from 'uuid';

class Box extends Component {
    state = {
        timers: [
            { 
            title: "Apprendre React",
            project: "Développpent web",
            id: "0a4a79cb-b06d-4cb1-883d-549a1e3b66d7",
            elapsed: 5609628,
            runningSince: null
            },
            {
                title: "Apprendre Angular",
                project: "Développpent web",
                id: "0a4a79cb-b06d-4cb1-883d-549a1e3b66d4",
                elapsed: 5609628,
                runningSince: null
            }
        ]
    }

    handleTimerCreate = ({title, project}) => {
        const timer = {
            title,
            project,
            id: uuid(),
            elapsed: 0,
            runningSince: null
        }
        this.setState({
            timers: [...this.state.timers, timer]
        })
    }

    handleTimerEdit = ({id, title, project}) => {
        this.setState({
            timers: this.state.timers.map(timer => {
                if(timer.id === id) {
                    return {
                        ...timer,
                        title,
                        project
                    }
                }
                return {...timer}
            })
        })
    }

    hanleDelete = id => {
        this.setState({
            timers: this.state.timers.filter(timer => timer.id !== id)
        });
    }

    handlePlay = id => {
        console.log('play');
        const now = Date.now();
        this.setState({
            timers: this.state.timers.map(timer => {
                if(id === timer.id) {
                    return {
                        ...timer,
                        runningSince: now
                    }
                } else {
                    return {...timer}
                }
            })
        })
    }

    handlePause = id => {
        console.log('pause');
        const now = Date.now();
        this.setState({
            timers: this.state.timers.map(timer => {
                if(id === timer.id) {
                    const nextElapsed = now - timer.runningSince;
                    return {
                        ...timer,
                        runningSince: null,
                        elapsed: timer.elapsed + nextElapsed 
                    }
                } else {
                    return {...timer}
                }
            })
        })
    }

    render() {
        return(
            <div className="boxed--view">
                <div className="boxes--view__box">
                    <ListContainer 
                        onFormSubmit={this.handleTimerEdit}
                        onDelete={this.hanleDelete} 
                        timers={this.state.timers}
                        onPlay={this.handlePlay}
                        onPause={this.handlePause}
                    />
                    <ActionContainer onFormSubmit={this.handleTimerCreate}/>
                </div>
            </div>
        )
    }
}

export default Box;
