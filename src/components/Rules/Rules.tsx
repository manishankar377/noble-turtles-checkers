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
              <p className="modal-card-title">Rules</p>
              <button
                onClick={this.props.toggleRules}
                className="delete"
                aria-label="close"
              />
            </header>
            <section className="modal-card-body">
              Rules are as follows..... ⚠️
            </section>
            <footer className="modal-card-foot">
              <button onClick={this.props.toggleRules} className="button">
                Close
              </button>
            </footer>
          </div>
        </div>
        );
    }
}