import React, {Component} from 'react';
import '../helpers.js';
//Formation React Etape 3 - Contenu minimal du state

class Timer extends Component {
    render() {
        const elapsedString = window.helpers.renderElapsedString(
            this.props.elapsed,
            this.props.runningSince
        )
        return(
            <div className="timer--box">
                <div className="timer--content">
                    <div className="timer--header">
                        <h2>{this.props.title}</h2>
                    </div>
                        <div className="timer--meta">
                            <p>{this.props.project}</p>
                        </div>
                            <div className="timer--h2">
                                <h4>{elapsedString}</h4>
                            </div>
                                <div className="actions">
                                    <span className="trash">Supprimer</span>
                                    <span onClick={this.props.onEditFormOpen} className="edit">Modifier</span>
                                </div>
                </div>
                <button className="button">Lancer</button>
            </div>
        )
    }
}

export default Timer;