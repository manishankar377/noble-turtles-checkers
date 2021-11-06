import React, { Component, CSSProperties } from "react";
import 'bulma/css/bulma.min.css';


interface ToPlayProps {
  toggleToPlay?: any;
  navigateToGame? : any;
}

interface ToPlayState {
}



export default class ToPlay extends Component<ToPlayProps,ToPlayState> {

    constructor(props : ToPlayProps){
        super(props);  
        console.log(this.props);
    }

    public render(): JSX.Element {
        return (
        <div className={`modal is-active`}>
          <div className="modal-background" />
          <div className="modal-card">
            <header className="modal-card-head">
              <p className="modal-card-title">Player Details</p>
              <button
                onClick={this.props.toggleToPlay}
                className="delete"
                aria-label="close"
              />
            </header>
            <section className="modal-card-body">

                <div className="columns">
                    <div className="column">
                        <div className="field">
                        <label className="label">First Player</label>
                        <div className="control">
                        <input
                        className="input"
                        type="text"
                        value="Player 1"
                        placeholder="player 1"
                        />
                        </div>
                        </div>
                    </div>
                    <div className="column">
                        <div className="field">
                        <label className="label">Second Player</label>
                        <div className="control">
                        <input
                        className="input"
                        type="text"
                        value="Player 2"
                        placeholder="player 2"
                        />
                        </div>
                        </div>
                    </div>
                </div>
            </section>
            <footer className="modal-card-foot">
              <button onClick={this.props.toggleToPlay} className="button">
                Cancel
              </button>
              <button  onClick={this.props.navigateToGame} className="button is-primary is-medium">
                Start Playing 😀
              </button>
            </footer>
          </div>
        </div>
        );
    }
}
