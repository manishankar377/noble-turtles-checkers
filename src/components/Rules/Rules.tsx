import React, { Component, CSSProperties } from "react";
import 'bulma/css/bulma.min.css';


interface RulesProps {
  toggleRules?: any;
}

interface RulesState {
}

export default class Rules extends Component<RulesProps,RulesState> {
    constructor(props : RulesProps){
        super(props);  
        console.log(this.props);
    }

    public render(): JSX.Element {
        return(
        <div className={`modal is-active`}>
          <div className="modal-background" />
          <div className="modal-card">
            <header className="modal-card-head">
              <p className="modal-card-title">Modal title</p>
              <button
                onClick={this.props.toggleRules}
                className="delete"
                aria-label="close"
              />
            </header>
            <section className="modal-card-body">
              <div className="field">
                <label className="label">Name</label>
                <div className="control">
                  <input
                    className="input"
                    type="text"
                    placeholder="e.g Alex Smith"
                  />
                </div>
              </div>
              <div className="field">
                <div className="control">
                  <label className="checkbox">
                    <input type="checkbox" />I agree to get you the gift you
                    pest...
                  </label>
                </div>
              </div>
            </section>
            <footer className="modal-card-foot">
              <button onClick={this.props.toggleRules} className="button">
                Cancel
              </button>
            </footer>
          </div>
        </div>
        );
    }
}